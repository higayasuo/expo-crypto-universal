import { WebCryptoModule } from './WebCryptoModule';
import { NativeCryptoModule } from './NativeCryptoModule';
import { isWeb } from './isWeb';
import { CryptoModule } from './CryptoModule';
/**
 * Returns the appropriate CryptoModule based on the current environment.
 * If the environment is web, it returns the WebCryptoModule.
 * Otherwise, it returns the NativeCryptoModule.
 *
 * @returns {CryptoModule} The appropriate CryptoModule for the current environment.
 */
export const getCryptoModule = (): CryptoModule => {
  if (isWeb()) {
    return new WebCryptoModule();
  }

  return new NativeCryptoModule();
};
