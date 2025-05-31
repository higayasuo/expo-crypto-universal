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
   * Fills the passed Uint8Array with cryptographically secure random values.
   * @param values - The Uint8Array to fill with random values.
   * @returns The same Uint8Array filled with random values.
   */
  abstract getRandomValues: (values: Uint8Array) => Uint8Array;
}
