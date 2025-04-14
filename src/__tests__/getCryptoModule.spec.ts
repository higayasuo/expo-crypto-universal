import { describe, it, expect, afterEach, vi } from 'vitest';
import { isWeb } from '../isWeb';
import { getCryptoModule } from '../getCryptoModule';
//import { webCryptoModule } from '../WebCryptoModule';
//import { nativeCryptoModule } from '../NativeCryptoModule';

vi.mock('../isWeb', () => ({
  isWeb: vi.fn(),
}));

vi.mock('expo-crypto', () => ({
  getRandomValues: vi.fn(),
}));

// describe('isWeb mock', () => {
//   it('should mock isWeb function to return true', () => {
//     (isWeb as Mock).mockReturnValue(true);
//     expect(isWeb()).toBe(true);
//   });

//   it('should mock isWeb function to return false', () => {
//     (isWeb as Mock).mockReturnValue(false);
//     expect(isWeb()).toBe(false);
//   });
// });

describe('getCryptoModule', () => {
  it('should return webCryptoModule when isWeb returns true', async () => {
    vi.mocked(isWeb).mockReturnValue(true);
    expect(getCryptoModule().constructor.name).toBe('WebCryptoModule');
  });

  it('should return webCryptoModule when isWeb returns true', async () => {
    vi.mocked(isWeb).mockReturnValue(false);
    expect(getCryptoModule().constructor.name).toBe('NativeCryptoModule');
  });
});
