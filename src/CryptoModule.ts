/**
 * Interface for crypto operations that can be implemented by different platforms
 */
export interface CryptoModule {
  /**
   * Fills the passed Uint8Array with cryptographically secure random values
   * @param values - The Uint8Array to fill with random values
   * @returns The same Uint8Array filled with random values
   */
  getRandomValues(values: Uint8Array): Uint8Array;
  /**
   * Generates random bytes of specified size
   * @param size - The number of random bytes to generate. Defaults to 32 if not specified
   * @returns Uint8Array containing random bytes
   */
  getRandomBytes(size: number | undefined): Uint8Array;

  /**
   * Computes the SHA-256 hash of the given data asynchronously
   * @param data - The data to hash as a Uint8Array
   * @returns Promise resolving to a Uint8Array containing the SHA-256 hash
   */
  sha256Async(data: Uint8Array): Promise<Uint8Array>;

  /**
   * Computes the SHA-384 hash of the given data asynchronously
   * @param data - The data to hash as a Uint8Array
   * @returns Promise resolving to a Uint8Array containing the SHA-384 hash
   */
  sha384Async(data: Uint8Array): Promise<Uint8Array>;

  /**
   * Computes the SHA-512 hash of the given data asynchronously
   * @param data - The data to hash as a Uint8Array
   * @returns Promise resolving to a Uint8Array containing the SHA-512 hash
   */
  sha512Async(data: Uint8Array): Promise<Uint8Array>;

  /**
   * Computes the SHA-2 hash of the given data asynchronously
   * @param bits - The number of bits to use (256, 384, or 512)
   * @param data - The data to hash as a Uint8Array
   * @returns Promise resolving to a Uint8Array containing the SHA-2 hash
   */
  sha2Async(bits: number, data: Uint8Array): Promise<Uint8Array>;
}
