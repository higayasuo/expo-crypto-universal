import { describe, it, expect, vi } from 'vitest';
import { AbstractCryptoModule } from '../AbstractCryptoModule';

// Concrete implementation for testing
class TestCryptoModule extends AbstractCryptoModule {
  getRandomValues(values: Uint8Array): Uint8Array {
    return crypto.getRandomValues(values);
  }

  async sha256Async(_data: Uint8Array): Promise<Uint8Array> {
    return new Uint8Array(32).fill(2);
  }

  async sha384Async(_data: Uint8Array): Promise<Uint8Array> {
    return new Uint8Array(48).fill(3);
  }

  async sha512Async(_data: Uint8Array): Promise<Uint8Array> {
    return new Uint8Array(64).fill(4);
  }
}

describe('AbstractCryptoModule', () => {
  const crypto = new TestCryptoModule();

  describe('getRandomBytes', () => {
    it('should generate random bytes of specified size', () => {
      const size = 32;
      const result = crypto.getRandomBytes(size);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(size);
    });

    it('should generate 32 bytes when size is not specified', () => {
      const result = crypto.getRandomBytes();
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(32);
    });
  });

  describe('sha2Async', () => {
    it('should compute SHA-256 hash', async () => {
      const data = new Uint8Array([1, 2, 3]);
      const result = await crypto.sha2Async(256, data);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(32);
      expect(result.every((byte) => byte === 2)).toBe(true);
    });

    it('should compute SHA-384 hash', async () => {
      const data = new Uint8Array([1, 2, 3]);
      const result = await crypto.sha2Async(384, data);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(48);
      expect(result.every((byte) => byte === 3)).toBe(true);
    });

    it('should compute SHA-512 hash', async () => {
      const data = new Uint8Array([1, 2, 3]);
      const result = await crypto.sha2Async(512, data);
      expect(result).toBeInstanceOf(Uint8Array);
      expect(result.length).toBe(64);
      expect(result.every((byte) => byte === 4)).toBe(true);
    });

    it('should throw error for unsupported bit length', async () => {
      const data = new Uint8Array([1, 2, 3]);
      const unsupportedBits = 128;
      const expectedError = `Unsupported SHA-${unsupportedBits} hash`;

      await expect(crypto.sha2Async(unsupportedBits, data)).rejects.toThrow(
        expectedError,
      );
    });
  });
});
