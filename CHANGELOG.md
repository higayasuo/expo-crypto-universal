# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.12] - 2025-06-03

### Changed

- Version bump to 0.2.12

## [0.2.11] - 2025-05-31

### Changed

- Simplified AbstractCryptoModule to only include getRandomBytes and getRandomValues methods
- Removed SHA-2 related methods from AbstractCryptoModule
- Updated CryptoModule interface to match the simplified implementation

## [0.2.10] - 2025-05-31

### Changed

- Updated method syntax to use arrow functions consistently across the codebase
- Made interface and implementation method signatures consistent
- Updated tests to use destructured method references

## [0.2.9] - 2025-05-31

### Changed

- Updated `getRandomBytes` parameter type to `size?` to better reflect optional parameter behavior

## [0.2.8] - 2025-05-31

### Changed

- Added default size of 32 bytes for `getRandomBytes` when size is not specified
- Updated documentation and tests to reflect the default size behavior

## [0.2.7] - 2025-04-16

### Changed

- Removed the `default` field from the `exports` section in package.json for simplification and clarity. Only `import`, `require`, and `types` are now specified.
- Version bump to align with expo-crypto-universal-web and expo-crypto-universal-native after dependency cleanup in those packages.

## [0.2.6] - 2025-04-15

### Changed

- Separated Web and Native implementations into separate packages:
  - `expo-crypto-universal-web` for web platform
  - `expo-crypto-universal-native` for native platforms
- Removed direct dependency on `expo-crypto`
- Simplified testing by removing the need for `expo-crypto` mocks
- Updated documentation to reflect the new package structure

## [0.2.5] - 2025-04-15

### Changed

- Updated Testing section in README.md with Vitest mock instructions

## [0.2.4] - 2025-04-15

### Added

- Added `isWeb` utility function to exports

### Changed

- Updated Testing section in README.md with Vitest mock instructions

## [0.2.3] - 2025-04-15

### Changed

- Updated README.md to accurately reflect current implementation
- Removed references to unimplemented features (AES encryption/decryption)
- Added documentation for SHA-384 and SHA-512 support
- Added documentation for platform-specific implementations
- Updated version numbers in documentation

## [0.2.2] - 2025-04-09

### Changed

- Version bump to 0.2.2
  - Aligned version with expo-crypto-universal-native update
  - No changes to this project

## [0.2.1] - 2025-03-20

### Changed

- Version bump to 0.2.1
  - Aligned version with expo-crypto-universal-native update
  - No changes to this project

## [0.2.0] - 2025-03-12

### Changed

- Updated dependencies to latest versions
- Improved documentation and examples
- Enhanced test coverage
- Better TypeScript type definitions
- Removed platform-specific implementation details from documentation
- Made encryption mode descriptions more generic

## [0.1.0] - 2025-03-12

### Added

- Initial release
- Universal crypto interface for Expo (iOS, Android, Web)
- Platform-agnostic crypto operations interface
- Core crypto operations:
  - `getRandomValues`: Fill Uint8Array with cryptographically secure random values
  - `getRandomBytes`: Generate cryptographically secure random bytes
  - `sha256Async`: Compute SHA-256 hash
  - `sha384Async`: Compute SHA-384 hash
  - `sha512Async`: Compute SHA-512 hash
  - `sha2Async`: Generic SHA-2 hash computation (256, 384, or 512 bits)
- TypeScript support
- Comprehensive test suite
- Platform-specific implementations:
  - Web: Using Web Crypto API
  - Native: Using Expo's native crypto implementation
- Automatic platform detection
