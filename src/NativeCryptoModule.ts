import * as ExpoCrypto from 'expo-crypto';
import { AbstractCryptoModule } from './AbstractCryptoModule';

/**
 * NativeCryptoModule class provides cryptographic functionalities using ExpoCrypto.
 * It extends the AbstractCryptoModule to implement specific methods for random value generation
 * and SHA-2 hashing algorithms.
 */
export class NativeCryptoModule extends AbstractCryptoModule {
  /**
   * Fills the given Uint8Array with cryptographically secure random values.
   *
   * @param {Uint8Array} values - The array to be filled with random values.
   * @returns {Uint8Array} The same array filled with random values.
   */
  getRandomValues(values: Uint8Array): Uint8Array {
    return ExpoCrypto.getRandomValues(values);
  }

  /**
   * Computes the SHA-256 hash of the given data asynchronously.
   *
   * @param {Uint8Array} data - The data to be hashed.
   * @returns {Promise<Uint8Array>} A promise that resolves to a Uint8Array containing the hash.
   */
  async sha256Async(data: Uint8Array): Promise<Uint8Array> {
    const digest = await ExpoCrypto.digest(
      ExpoCrypto.CryptoDigestAlgorithm.SHA256,
      data,
    );

    return new Uint8Array(digest);
  }

  /**
   * Computes the SHA-384 hash of the given data asynchronously.
   *
   * @param {Uint8Array} data - The data to be hashed.
   * @returns {Promise<Uint8Array>} A promise that resolves to a Uint8Array containing the hash.
   */
  async sha384Async(data: Uint8Array): Promise<Uint8Array> {
    const digest = await ExpoCrypto.digest(
      ExpoCrypto.CryptoDigestAlgorithm.SHA384,
      data,
    );
    return new Uint8Array(digest);
  }

  /**
   * Computes the SHA-512 hash of the given data asynchronously.
   *
   * @param {Uint8Array} data - The data to be hashed.
   * @returns {Promise<Uint8Array>} A promise that resolves to a Uint8Array containing the hash.
   */
  async sha512Async(data: Uint8Array): Promise<Uint8Array> {
    const digest = await ExpoCrypto.digest(
      ExpoCrypto.CryptoDigestAlgorithm.SHA512,
      data,
    );
    return new Uint8Array(digest);
  }
}
