export async function blobFromUrl(url: string): Promise<Blob> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Unable to fetch image blob (${res.status})`);
  }
  return res.blob();
}

export function fileFromBlob(
  blob: Blob,
  filename: string,
  fallbackType = 'image/jpeg',
): File {
  const type = String(blob.type || fallbackType).trim() || fallbackType;
  return new File([blob], filename, { type });
}
