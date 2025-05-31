import { CryptoModule } from './CryptoModule';

/**
 * Abstract class implementing the CryptoModule interface, providing
 * common functionality for cryptographic operations.
 */
export abstract class AbstractCryptoModule implements CryptoModule {
  /**
   * Generates random bytes of specified size.
   * @param size - The number of random bytes to generate. Defaults to 32 if not specified.
   * @returns Uint8Array containing random bytes.
   */
  getRandomBytes = (size = 32): Uint8Array => {
    return this.getRandomValues(new Uint8Array(size));
  };

  /**
   * Computes the SHA-2 hash of the given data asynchronously.
   * @param bits - The number of bits to use (256, 384, or 512).
   * @param data - The data to hash as a Uint8Array.
   * @returns Promise resolving to a Uint8Array containing the SHA-2 hash.
   * @throws Error if an unsupported bit length is provided.
   */
  sha2Async = async (bits: number, data: Uint8Array): Promise<Uint8Array> => {
    switch (bits) {
      case 256:
        return this.sha256Async(data);
      case 384:
        return this.sha384Async(data);
      case 512:
        return this.sha512Async(data);
      default:
        throw new Error(`Unsupported SHA-${bits} hash`);
    }
  };

  /**
   * Fills the passed Uint8Array with cryptographically secure random values.
   * @param values - The Uint8Array to fill with random values.
   * @returns The same Uint8Array filled with random values.
   */
  abstract getRandomValues: (values: Uint8Array) => Uint8Array;

  /**
   * Computes the SHA-256 hash of the given data asynchronously.
   * @param data - The data to hash as a Uint8Array.
   * @returns Promise resolving to a Uint8Array containing the SHA-256 hash.
   */
  abstract sha256Async: (data: Uint8Array) => Promise<Uint8Array>;

  /**
   * Computes the SHA-384 hash of the given data asynchronously.
   * @param data - The data to hash as a Uint8Array.
   * @returns Promise resolving to a Uint8Array containing the SHA-384 hash.
   */
  abstract sha384Async: (data: Uint8Array) => Promise<Uint8Array>;

  /**
   * Computes the SHA-512 hash of the given data asynchronously.
   * @param data - The data to hash as a Uint8Array.
   * @returns Promise resolving to a Uint8Array containing the SHA-512 hash.
   */
  abstract sha512Async: (data: Uint8Array) => Promise<Uint8Array>;
}
