import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  // GitHub Pages deployment configuration
  // For username.github.io: use base: '/'
  // For username.github.io/repo-name: use base: '/repo-name/'
  base: '/',
  build: {
    outDir: 'dist',
    // Disable sourcemaps in production for smaller bundle size
    sourcemap: false,
    // Use esbuild for faster minification
    minify: 'esbuild',
    // Optimize chunk size
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      autonomousDelivery: resolve(__dirname, 'research/autonomous-delivery/index.html'),
      automotiveBenchmarking: resolve(__dirname, 'research/automotive-benchmarking/index.html'),
      driverAutomation: resolve(__dirname, 'research/driver-automation/index.html'),
    },
    output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue']
  }
})
