import { ErrorHandler, Injectable } from '@angular/core';

const CHUNK_RELOAD_KEY = 'tingilin:chunk-reload-at';
const RELOAD_COOLDOWN_MS = 60_000;

function errorText(error: unknown, seen = new WeakSet<object>()): string {
  if (error instanceof Error) {
    return `${error.name} ${error.message} ${error.stack ?? ''}`;
  }

  if (typeof error === 'object' && error !== null) {
    if (seen.has(error)) return '';
    seen.add(error);

    const candidate = error as {
      message?: unknown;
      reason?: unknown;
      rejection?: unknown;
      ngOriginalError?: unknown;
    };
    return [
      candidate.message,
      candidate.reason,
      candidate.rejection,
      candidate.ngOriginalError,
    ]
      .map((value) => errorText(value, seen))
      .join(' ');
  }

  return String(error ?? '');
}

export function isChunkLoadError(error: unknown): boolean {
  return /ChunkLoadError|Loading chunk \d+ failed|Failed to fetch dynamically imported module|Importing a module script failed|module script.*MIME type/i.test(
    errorText(error),
  );
}

@Injectable()
export class ChunkLoadErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    if (isChunkLoadError(error) && this.reloadOnce()) return;

    console.error(error);
  }

  private reloadOnce(): boolean {
    if (typeof window === 'undefined') return false;

    try {
      const previousReloadAt = Number(
        window.sessionStorage.getItem(CHUNK_RELOAD_KEY) ?? 0,
      );
      const now = Date.now();

      if (now - previousReloadAt < RELOAD_COOLDOWN_MS) return false;

      window.sessionStorage.setItem(CHUNK_RELOAD_KEY, String(now));
      window.location.reload();
      return true;
    } catch {
      window.location.reload();
      return true;
    }
  }
}
