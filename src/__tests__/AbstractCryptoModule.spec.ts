import { describe, it, expect, vi } from 'vitest';
import { AbstractCryptoModule } from '../AbstractCryptoModule';

// Concrete implementation for testing
class TestCryptoModule extends AbstractCryptoModule {
  getRandomValues = (values: Uint8Array): Uint8Array => {
    return crypto.getRandomValues(values);
  };
}

describe('AbstractCryptoModule', () => {
  const crypto = new TestCryptoModule();
  const { getRandomBytes } = crypto;

  describe('getRandomBytes', () => {
    it('should generate random bytes of specified size', () => {
      const size = 32;
      const result = getRandomBytes(size);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(size);
    });

    it('should generate 32 bytes when size is not specified', () => {
      const result = getRandomBytes();
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(32);
    });
  });
});
