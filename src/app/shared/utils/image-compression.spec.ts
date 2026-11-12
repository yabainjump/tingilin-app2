import {
  compressImageFile,
  ImageCompressionError,
} from './image-compression';

const canvasBlob = async (
  width: number,
  height: number,
): Promise<Blob> => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d')!;
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#079bd3');
  gradient.addColorStop(1, '#17202a');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('canvas failed'))),
      'image/png',
    );
  });
};

describe('compressImageFile', () => {
  it('resizes and converts an image before upload', async () => {
    const sourceBlob = await canvasBlob(2200, 1200);
    const source = new File([sourceBlob], 'large-product.png', {
      type: 'image/png',
    });

    const result = await compressImageFile(source, {
      maxWidth: 1600,
      maxHeight: 1600,
      maxOutputBytes: 4.5 * 1024 * 1024,
    });

    expect(['image/webp', 'image/jpeg']).toContain(result.type);
    expect(result.size).toBeLessThanOrEqual(4.5 * 1024 * 1024);

    const image = new Image();
    const url = URL.createObjectURL(result);
    try {
      await new Promise<void>((resolve, reject) => {
        image.onload = () => resolve();
        image.onerror = () => reject(new Error('decode failed'));
        image.src = url;
      });
      expect(image.naturalWidth).toBe(1600);
      expect(image.naturalHeight).toBeLessThanOrEqual(1600);
    } finally {
      URL.revokeObjectURL(url);
    }
  });

  it('rejects an unsupported image before decoding it', async () => {
    const source = new File(['not-an-image'], 'product.svg', {
      type: 'image/svg+xml',
    });

    await expectAsync(compressImageFile(source)).toBeRejectedWith(
      jasmine.objectContaining<ImageCompressionError>({
        code: 'UNSUPPORTED_FORMAT',
      }),
    );
  });
});
