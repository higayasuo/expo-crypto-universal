import { describe, it, expect, vi, afterEach } from 'vitest';
import { isWeb } from '../isWeb';

describe('isWeb', () => {
  const originalWindow = global.window;

  afterEach(() => {
    // Restore original window object
    global.window = originalWindow;
  });

  it('should return true in web environment', () => {
    // Mock window object with crypto
    global.window = {
      crypto: {
        getRandomValues: vi.fn(),
      },
    } as any;

    expect(isWeb()).toBe(true);
  });

  it('should return false when window is undefined', () => {
    // Remove window object
    global.window = undefined as any;

    expect(isWeb()).toBe(false);
  });

  it('should return false when crypto is undefined', () => {
    // Mock window object without crypto
    global.window = {} as any;

    expect(isWeb()).toBe(false);
  });

  it('should return false when getRandomValues is not a function', () => {
    // Mock window object with crypto but getRandomValues is not a function
    global.window = {
      crypto: {
        getRandomValues: 'not a function',
      },
    } as any;

    expect(isWeb()).toBe(false);
  });
});
