import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ExpoCryptoUniversal',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['expo-crypto'],
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
      output: {
        globals: {
          'expo-crypto': 'expoCrypto',
        },
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      include: ['src/**/*.ts'],
      exclude: ['src/__tests__/**/*.ts', '**/*.spec.ts', '**/*.test.ts'],
    }),
  ],
});
