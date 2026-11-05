import { isChunkLoadError } from './chunk-load-error.handler';

describe('ChunkLoadErrorHandler', () => {
  it('detects lazy chunk loading failures', () => {
    expect(
      isChunkLoadError(
        new Error(
          'ChunkLoadError: Loading chunk 4176 failed. (https://example.test/4176.js)',
        ),
      ),
    ).toBeTrue();
  });

  it('detects module MIME failures wrapped by Angular', () => {
    expect(
      isChunkLoadError({
        rejection:
          'Failed to load module script: module script has MIME type text/html',
      }),
    ).toBeTrue();
  });

  it('ignores unrelated application errors', () => {
    expect(isChunkLoadError(new Error('Payment request failed'))).toBeFalse();
  });
});
