export type ImageCompressionErrorCode =
  | 'SOURCE_TOO_LARGE'
  | 'UNSUPPORTED_FORMAT'
  | 'DECODE_FAILED'
  | 'OUTPUT_TOO_LARGE';

export class ImageCompressionError extends Error {
  constructor(readonly code: ImageCompressionErrorCode) {
    super(code);
    this.name = 'ImageCompressionError';
  }
}

export type ImageCompressionOptions = {
  maxWidth?: number;
  maxHeight?: number;
  maxSourceBytes?: number;
  maxOutputBytes?: number;
  initialQuality?: number;
};

const SUPPORTED_IMAGE_TYPES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
]);

const canvasToBlob = (
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality: number,
) =>
  new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, mimeType, quality);
  });

async function loadImage(source: Blob): Promise<{
  image: HTMLImageElement;
  objectUrl: string;
}> {
  const objectUrl = URL.createObjectURL(source);
  const image = new Image();

  try {
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new ImageCompressionError('DECODE_FAILED'));
      image.src = objectUrl;
    });
    return { image, objectUrl };
  } catch (error) {
    URL.revokeObjectURL(objectUrl);
    throw error;
  }
}

function outputFilename(source: Blob | File, mimeType: string): string {
  const original = source instanceof File ? source.name : 'raffle-image';
  const base = original
    .replace(/\.[^.]+$/, '')
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .slice(0, 80);
  const extension = mimeType === 'image/webp' ? 'webp' : 'jpg';
  return `${base || 'raffle-image'}.${extension}`;
}

export async function compressImageFile(
  source: Blob | File,
  options: ImageCompressionOptions = {},
): Promise<File> {
  const maxWidth = Math.max(320, options.maxWidth ?? 1600);
  const maxHeight = Math.max(320, options.maxHeight ?? 1600);
  const maxSourceBytes = Math.max(
    1024 * 1024,
    options.maxSourceBytes ?? 20 * 1024 * 1024,
  );
  const maxOutputBytes = Math.max(
    256 * 1024,
    options.maxOutputBytes ?? Math.floor(4.5 * 1024 * 1024),
  );
  const mimeType = String(source.type ?? '').trim().toLowerCase();

  if (!SUPPORTED_IMAGE_TYPES.has(mimeType)) {
    throw new ImageCompressionError('UNSUPPORTED_FORMAT');
  }
  if (!source.size || source.size > maxSourceBytes) {
    throw new ImageCompressionError('SOURCE_TOO_LARGE');
  }

  const { image, objectUrl } = await loadImage(source);
  try {
    const naturalWidth = Number(image.naturalWidth || image.width);
    const naturalHeight = Number(image.naturalHeight || image.height);
    if (!naturalWidth || !naturalHeight) {
      throw new ImageCompressionError('DECODE_FAILED');
    }

    const initialScale = Math.min(
      1,
      maxWidth / naturalWidth,
      maxHeight / naturalHeight,
    );
    let width = Math.max(1, Math.round(naturalWidth * initialScale));
    let height = Math.max(1, Math.round(naturalHeight * initialScale));
    let quality = Math.max(0.55, Math.min(0.9, options.initialQuality ?? 0.82));
    let best: Blob | null = null;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new ImageCompressionError('DECODE_FAILED');

    for (let attempt = 0; attempt < 7; attempt += 1) {
      canvas.width = width;
      canvas.height = height;
      context.fillStyle = '#ffffff';
      context.fillRect(0, 0, width, height);
      context.drawImage(image, 0, 0, width, height);

      const webp = await canvasToBlob(canvas, 'image/webp', quality);
      const output =
        webp && webp.type === 'image/webp'
          ? webp
          : await canvasToBlob(canvas, 'image/jpeg', quality);
      if (!output) throw new ImageCompressionError('DECODE_FAILED');

      if (!best || output.size < best.size) best = output;
      if (output.size <= maxOutputBytes) {
        return new File([output], outputFilename(source, output.type), {
          type: output.type,
          lastModified: Date.now(),
        });
      }

      if (quality > 0.58) {
        quality = Math.max(0.55, quality - 0.09);
      } else {
        width = Math.max(320, Math.round(width * 0.82));
        height = Math.max(320, Math.round(height * 0.82));
        quality = 0.7;
      }
    }

    if (best && best.size <= maxOutputBytes) {
      return new File([best], outputFilename(source, best.type), {
        type: best.type,
        lastModified: Date.now(),
      });
    }
    throw new ImageCompressionError('OUTPUT_TOO_LARGE');
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
