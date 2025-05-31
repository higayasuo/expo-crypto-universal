/**
 * Interface for crypto operations that can be implemented by different platforms
 */
export interface CryptoModule {
  /**
   * Fills the passed Uint8Array with cryptographically secure random values
   * @param values - The Uint8Array to fill with random values
   * @returns The same Uint8Array filled with random values
   */
  getRandomValues: (values: Uint8Array) => Uint8Array;
  /**
   * Generates random bytes of specified size
   * @param size - The number of random bytes to generate. Defaults to 32 if not specified
   * @returns Uint8Array containing random bytes
   */
  getRandomBytes: (size?: number) => Uint8Array;
}
