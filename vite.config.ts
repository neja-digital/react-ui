import { defineConfig, esmExternalRequirePlugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    dts({
      entryRoot: 'src',
      outDirs: 'dist',
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      name: 'NJ Design System',
      entry: './src/index.ts',
      formats: ['es'],
      fileName: 'index.es',
    },

    // rollupOptions: {
    //   external: ['react', 'react-dom', 'react/jsx-runtime'],
    // },

    cssCodeSplit: false,

    rolldownOptions: {
      // external: [/^react(-dom)?(\/.+)?$/],
      plugins: [
        esmExternalRequirePlugin({
          external: [/^react(-dom)?(\/.+)?$/],
        }),
      ],
    },
  },
})
