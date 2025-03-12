# expo-crypto-universal

A universal crypto implementation for Expo that works across all platforms, including web. This package extends `expo-crypto` functionality by providing a consistent interface that works on web platforms and automatically switches implementations based on the platform. AES-CBC-HMAC implementation that works with Expo Go is also available.

## Features

- Works on all platforms (iOS, Android, and Web)
- AES-256-CBC encryption with HMAC-SHA256 authentication
- Automatic platform detection and implementation switching
- Uses `expo-crypto` on native platforms
- Uses Web Crypto API on web platforms
- TypeScript support
- Comprehensive test suite
- Compatible with Expo Go

## Installation

```bash
npm install expo-crypto-universal
# or
yarn add expo-crypto-universal
```

### Dependencies

This package requires the following peer dependencies:

- `expo-crypto`
- `react-native`

## Usage

```typescript
import { platformCrypto } from 'expo-crypto-universal';

// Generate random bytes
const randomBytes = platformCrypto.getRandomBytes(32);

// Generate SHA-256 hash
const hash = await platformCrypto.sha256Async('Hello, World!');

// Encrypt data
const key = platformCrypto.getRandomBytes(32);
const data = new TextEncoder().encode('Secret message');
const encrypted = await platformCrypto.aesEncryptAsync(data, key);

// Decrypt data
const decrypted = await platformCrypto.aesDecryptAsync(encrypted, key);
const message = new TextDecoder().decode(decrypted);
console.log(message); // 'Secret message'
```

## API

### `getRandomBytes(size: number): Uint8Array`

Generates cryptographically secure random bytes.
- On native platforms: Uses `expo-crypto.getRandomBytes`
- On web: Uses `crypto.getRandomValues`

### `sha256Async(code: string): Promise<string>`

Generates a SHA-256 hash of the input string, returned as a base64-encoded string.
- On native platforms: Uses `expo-crypto.digestStringAsync`
- On web: Uses `crypto.subtle.digest`

### `aesEncryptAsync(data: Uint8Array, key: Uint8Array): Promise<Uint8Array>`

Encrypts data using AES-256-CBC with HMAC-SHA256 authentication.

- `data`: The data to encrypt
- `key`: 32-byte encryption key
- Returns: Encrypted data in format: [IV (16 bytes)][HMAC_KEY (32 bytes)][encrypted data][HMAC (32 bytes)]
- On native platforms: Uses `crypto-js` for AES-CBC and HMAC
- On web: Uses Web Crypto API for AES-CBC and HMAC

### `aesDecryptAsync(encrypted: Uint8Array, key: Uint8Array): Promise<Uint8Array>`

Decrypts AES-encrypted data.

- `encrypted`: The encrypted data (including IV, HMAC key, and HMAC)
- `key`: 32-byte encryption key
- Returns: Decrypted data
- Throws: If HMAC verification fails or decryption fails
- On native platforms: Uses `crypto-js` for AES-CBC and HMAC
- On web: Uses Web Crypto API for AES-CBC and HMAC

## Platform-specific Implementation

The library automatically selects the appropriate implementation based on the platform:

```typescript
// platformCrypto.ts
export const platformCrypto: CryptoModule = Platform.OS === 'web' ? standardCrypto : nativeCrypto;
```

### Native Implementation (iOS/Android)
- Uses `expo-crypto` for random bytes and SHA-256
- Uses `crypto-js` for AES-CBC encryption/decryption
- Implements HMAC-SHA256 for authentication

### Web Implementation
- Uses Web Crypto API (`crypto.subtle`) for all operations
- Provides identical security guarantees as native implementation

## Security

This implementation uses:
- AES-256-CBC for encryption
- HMAC-SHA256 for authentication (Encrypt-then-MAC)
- Secure random IV (16 bytes) generation
- Secure HMAC key (32 bytes) generation
- Full HMAC verification before decryption

## Testing with Other Projects

To test this package with another project locally:

1. Clone this repository
2. Build and pack the package:
```bash
npm install
npm run pack-local
```
3. This will create a file like `expo-crypto-universal-0.1.0.tgz`
4. In your test project, install the local package:
```bash
npm install /path/to/expo-crypto-universal-0.1.0.tgz
```

## License

MIT
