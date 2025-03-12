# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-03-12

### Added
- Initial release
- Universal crypto implementation for Expo (iOS, Android, Web)
- AES-256-CBC encryption with HMAC-SHA256 authentication
- Platform-specific implementations:
  - Native: Uses expo-crypto and crypto-js
  - Web: Uses Web Crypto API
- Automatic platform detection
- TypeScript support
- Comprehensive test suite
- Expo Go compatibility
- Core crypto operations:
  - `getRandomBytes`: Generate cryptographically secure random bytes
  - `sha256Async`: Generate SHA-256 hash (base64 encoded)
  - `aesEncryptAsync`: AES-256-CBC encryption with HMAC
  - `aesDecryptAsync`: AES-256-CBC decryption with HMAC verification
