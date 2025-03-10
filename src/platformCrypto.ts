import { CryptoModule } from './CryptoModule';
import { standardCrypto } from './StandardCrypto';
import { nativeCrypto } from './NativeCrypto';
import { Platform } from 'react-native';

export const platformCrypto: CryptoModule = Platform.OS === 'web' ? standardCrypto : nativeCrypto;

// // let platformCrypto: CryptoModule | undefined;

// export const getPlatformCrypto = async (): Promise<CryptoModule> => {
//   if (Platform.OS === 'web') {
//     return standardCrypto;
//   }

//   return nativeCrypto;
//   // if (platformCrypto) {
//   //   return platformCrypto;
//   // }

//   // try {
//   //   // Dynamically check for React Native environment
//   //   const reactNative = await import('react-native');
//   //   if (reactNative.Platform.OS !== 'web') {
//   //     // Use NativeCrypto implementation which uses expo-crypto
//   //     const { nativeCrypto } = await import('./NativeCrypto');
//   //     platformCrypto = nativeCrypto;
//   //   } else {
//   //     console.log('Using standard crypto implementation (web platform)');
//   //     platformCrypto = standardCrypto;
//   //   }
//   // } catch (error) {
//   //   // React Native not available, use standard implementation
//   //   console.log('Using standard crypto implementation (non-RN environment)');
//   //   platformCrypto = standardCrypto;
//   // }

//   // return platformCrypto;
// };
