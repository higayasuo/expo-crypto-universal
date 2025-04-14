# expo-crypto-universal

A universal crypto implementation for Expo that works across all platforms, including web. This package provides a consistent interface for crypto operations that can be implemented differently based on the platform.

## Features

- Platform-agnostic crypto interface
- SHA-2 hashing (256, 384, 512 bits)
- Secure random bytes generation
- TypeScript support
- Automatic platform detection and module selection

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

## Usage

```typescript
import { getCryptoModule } from 'expo-crypto-universal';

// Get the appropriate crypto module for your platform
const crypto = getCryptoModule();

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

### `getCryptoModule()`

Returns the appropriate `CryptoModule` implementation based on the current platform.

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

### `getRandomBytes(size: number): Uint8Array`

Generates a new Uint8Array of specified size filled with cryptographically secure random bytes.

### `sha256Async(data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-256 hash of the input data.

### `sha384Async(data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-384 hash of the input data.

### `sha512Async(data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-512 hash of the input data.

### `sha2Async(bits: number, data: Uint8Array): Promise<Uint8Array>`

Computes the SHA-2 hash of the input data with the specified number of bits (256, 384, or 512).

## Platform Support

The package automatically selects the appropriate implementation based on the platform:

- Web: Uses the Web Crypto API
- Native (iOS/Android): Uses Expo's native crypto implementation

## Testing with Other Projects

To test this package with another project locally:

1. Clone this repository
2. Build and pack the package:

```bash
npm install
npm run pack-local
```

3. This will create a file like `expo-crypto-universal-0.2.2.tgz`
4. In your test project, install the local package:

```bash
npm install /path/to/expo-crypto-universal-0.2.2.tgz
```

## License

MIT
