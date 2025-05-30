# expo-crypto-universal

A universal crypto implementation for Expo that works across all platforms, including web. This package provides a consistent interface for crypto operations that can be implemented differently based on the platform.

## Features

- Platform-agnostic crypto interface
- SHA-2 hashing (256, 384, 512 bits)
- Secure random bytes generation
- TypeScript support
- Platform detection utility
- Separate implementations for Web and Native platforms

## Installation

```bash
# Install the main package
npm install expo-crypto-universal
# or
yarn add expo-crypto-universal

# Install platform-specific implementation
npm install expo-crypto-universal-web    # For web platform
npm install expo-crypto-universal-native # For native platforms (iOS/Android)
```

### Dependencies

This package requires one of the following platform-specific implementations:

- `expo-crypto-universal-web` for web platform
- `expo-crypto-universal-native` for native platforms (iOS/Android)

## Usage

```typescript
import { isWeb } from 'expo-crypto-universal';
import { WebCryptoModule } from 'expo-crypto-universal-web';
import { NativeCryptoModule } from 'expo-crypto-universal-native';

// Get the appropriate crypto module for your platform
const crypto = isWeb() ? new WebCryptoModule() : new NativeCryptoModule();

// Generate random bytes
const randomBytes = crypto.getRandomBytes(32);

// Generate SHA-256 hash
const data = new TextEncoder().encode('Hello, World!');
const hash256 = await crypto.sha256Async(data);

// Generate SHA-384 hash
const hash384 = await crypto.sha384Async(data);

// Generate SHA-512 hash
const hash512 = await crypto.sha512Async(data);

// Or use the generic SHA-2 method
const hash = await crypto.sha2Async(256, data); // Same as sha256Async
```

## API

### `isWeb()`

Returns `true` if the current environment is a web environment, `false` otherwise.

### `CryptoModule` Interface

The package exports a `CryptoModule` interface that defines the contract for crypto implementations:

```typescript
interface CryptoModule {
  getRandomValues(values: Uint8Array): Uint8Array;
  getRandomBytes(size: number): Uint8Array;
  sha256Async(data: Uint8Array): Promise<Uint8Array>;
  sha384Async(data: Uint8Array): Promise<Uint8Array>;
  sha512Async(data: Uint8Array): Promise<Uint8Array>;
  sha2Async(bits: number, data: Uint8Array): Promise<Uint8Array>;
}
```

### `getRandomValues(values: Uint8Array): Uint8Array`

Fills the provided Uint8Array with cryptographically secure random values.

### `getRandomBytes(size: number | undefined): Uint8Array`

Generates a new Uint8Array of specified size filled with cryptographically secure random bytes. If no size is specified, it defaults to 32 bytes.

### `sha256Async(data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-256 hash of the input data.

### `sha384Async(data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-384 hash of the input data.

### `sha512Async(data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-512 hash of the input data.

### `sha2Async(bits: number, data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-2 hash of the input data with the specified number of bits (256, 384, or 512).

## Platform Support

The package provides platform-specific implementations:

- Web: `expo-crypto-universal-web` using Web Crypto API
- Native (iOS/Android): `expo-crypto-universal-native` using Expo's native crypto implementation

## Testing

The package is designed to work seamlessly with Vitest. No special configuration is required as the platform-specific implementations are now separate packages.

## License

MIT
