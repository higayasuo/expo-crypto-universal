# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2024-03-12

### Changed

- Updated dependencies to latest versions
- Improved documentation and examples
- Enhanced test coverage
- Better TypeScript type definitions
- Removed platform-specific implementation details from documentation
- Made encryption mode descriptions more generic

## [0.1.0] - 2024-03-12

### Added

- Initial release
- Universal crypto interface for Expo (iOS, Android, Web)
- Platform-agnostic crypto operations interface
- Core crypto operations:
  - `getRandomBytes`: Generate cryptographically secure random bytes
  - `sha256Async`: Generate SHA-256 hash (base64 encoded)
  - `aesEncryptAsync`: AES encryption with IV
  - `aesDecryptAsync`: AES decryption with IV verification
- TypeScript support
- Comprehensive test suite
- Utility functions:
  - `compareUint8Arrays`: Compare Uint8Arrays for equality
