# expo-crypto-universal

A universal crypto implementation for Expo that works across all platforms, including web. This package extends `expo-crypto` functionality by providing a similar interface that works on web platforms and automatically switches implementations based on the platform.

## Features

- Works on all platforms (iOS, Android, and Web)
- AES-256-CBC encryption with HMAC-SHA256 authentication
- Automatic platform detection and implementation switching
- Compatible with `expo-crypto` API
- TypeScript support
- Comprehensive test suite

## Installation

```bash
npm install expo-crypto-universal
# or
yarn add expo-crypto-universal
```

### Dependencies

This package requires the following peer dependencies:

- `expo-crypto`: "^12.8.0"
- `react`: ">=16.8.0"
- `react-native`: ">=0.60.0"

## Usage

```typescript
import crypto from 'expo-crypto-universal';

// Generate random bytes
const randomBytes = await crypto.getRandomBytes(32);

// Generate SHA-256 hash
const hash = await crypto.sha256Async('Hello, World!');

// Encrypt data
const key = await crypto.getRandomBytes(32);
const data = new TextEncoder().encode('Secret message');
const encrypted = await crypto.aesEncryptAsync(data, key);

// Decrypt data
const decrypted = await crypto.aesDecryptAsync(encrypted, key);
const message = new TextDecoder().decode(decrypted);
console.log(message); // 'Secret message'
```

## API

### `getRandomBytes(size: number): Uint8Array`

Generates cryptographically secure random bytes.

### `sha256Async(data: string): Promise<string>`

Generates a SHA-256 hash of the input string, returned as a base64-encoded string.

### `aesEncryptAsync(data: Uint8Array, key: Uint8Array): Promise<Uint8Array>`

Encrypts data using AES-256-CBC with HMAC-SHA256 authentication.

- `data`: The data to encrypt
- `key`: 32-byte encryption key
- Returns: Encrypted data with IV and HMAC

### `aesDecryptAsync(encrypted: Uint8Array, key: Uint8Array): Promise<Uint8Array>`

Decrypts AES-encrypted data.

- `encrypted`: The encrypted data (including IV and HMAC)
- `key`: 32-byte encryption key
- Returns: Decrypted data
- Throws: If HMAC verification fails or decryption fails

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

## Security

This implementation uses:
- AES-256-CBC for encryption
- HMAC-SHA256 for authentication (Encrypt-then-MAC)
- Secure random IV generation
- Secure key derivation

## License

MIT
