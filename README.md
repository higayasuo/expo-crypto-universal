# expo-crypto-universal

A universal crypto implementation for Expo that works across all platforms, including web. This package provides a consistent interface for crypto operations that can be implemented differently based on the platform.

## Features

- Platform-agnostic crypto interface
- AES encryption/decryption
- SHA-256 hashing
- Secure random bytes generation
- TypeScript support
- Utility functions for Uint8Array operations

## Installation

```bash
# Install the main package
npm install expo-crypto-universal
# or
yarn add expo-crypto-universal

# Install required Expo module
npx expo install expo-crypto
```

### Dependencies

This package requires the following peer dependencies:

- `expo-crypto`
- `react-native`

## Usage

```typescript
import { CryptoModule } from 'expo-crypto-universal';
import { compareUint8Arrays } from 'expo-crypto-universal';

// Implement the CryptoModule interface for your platform
class MyCryptoImplementation implements CryptoModule {
  getRandomBytes(size: number): Uint8Array {
    // Implement platform-specific random bytes generation
  }

  async sha256Async(code: string): Promise<string> {
    // Implement platform-specific SHA-256 hashing
  }

  async aesEncryptAsync(
    data: Uint8Array,
    rawKey: Uint8Array,
  ): Promise<Uint8Array> {
    // Implement platform-specific AES encryption
  }

  async aesDecryptAsync(
    data: Uint8Array,
    rawKey: Uint8Array,
  ): Promise<Uint8Array> {
    // Implement platform-specific AES decryption
  }
}

// Use the implementation
const crypto = new MyCryptoImplementation();

// Generate random bytes
const randomBytes = crypto.getRandomBytes(32);

// Generate SHA-256 hash
const hash = await crypto.sha256Async('Hello, World!');

// Encrypt data
const key = crypto.getRandomBytes(32);
const data = new TextEncoder().encode('Secret message');
const encrypted = await crypto.aesEncryptAsync(data, key);

// Decrypt data
const decrypted = await crypto.aesDecryptAsync(encrypted, key);
const message = new TextDecoder().decode(decrypted);
console.log(message); // 'Secret message'

// Compare Uint8Arrays
const areEqual = compareUint8Arrays(data, decrypted);
```

## API

### `CryptoModule` Interface

The package exports a `CryptoModule` interface that defines the contract for crypto implementations:

```typescript
interface CryptoModule {
  getRandomBytes(size: number): Uint8Array;
  sha256Async(code: string): Promise<string>;
  aesEncryptAsync(data: Uint8Array, key: Uint8Array): Promise<Uint8Array>;
  aesDecryptAsync(data: Uint8Array, key: Uint8Array): Promise<Uint8Array>;
}
```

### `getRandomBytes(size: number): Uint8Array`

Generates cryptographically secure random bytes.

### `sha256Async(code: string): Promise<string>`

Generates a SHA-256 hash of the input string, returned as a base64-encoded string.

### `aesEncryptAsync(data: Uint8Array, key: Uint8Array): Promise<Uint8Array>`

Encrypts data using AES.

- `data`: The data to encrypt
- `key`: The encryption key
- Returns: Encrypted data with IV prepended

### `aesDecryptAsync(encrypted: Uint8Array, key: Uint8Array): Promise<Uint8Array>`

Decrypts AES encrypted data.

- `encrypted`: The encrypted data (including IV)
- `key`: The decryption key
- Returns: Decrypted data

### `uint8ArrayUtils`

The package includes utility functions for working with Uint8Arrays:

```typescript
function compareUint8Arrays(a: Uint8Array, b: Uint8Array): boolean;
```

Compares two Uint8Arrays for equality, checking both length and content.

## Security

This interface supports:

- AES encryption/decryption
- SHA-256 for hashing
- Cryptographically secure random bytes generation

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
