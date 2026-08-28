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
      digitalTwinDriving: resolve(__dirname, 'research/digital-twin-driving/index.html'),
      drivingSimulationPlatform: resolve(__dirname, 'research/driving-simulation-platform/index.html'),
      voiceAssistant: resolve(__dirname, 'research/voice-assistant/index.html'),
      oyiResearch: resolve(__dirname, 'research/oyi/index.html'),
      softActuator: resolve(__dirname, 'research/soft-actuator/index.html'),
      gestureArm: resolve(__dirname, 'research/gesture-arm/index.html'),
      emgPrototype: resolve(__dirname, 'research/emg/index.html'),
      sleepPosture: resolve(__dirname, 'research/sleep-posture/index.html'),
      menstrualSensing: resolve(__dirname, 'research/menstrual-sensing/index.html'),
      tireTesting: resolve(__dirname, 'research/tire-testing/index.html'),
      evEnergyTesting: resolve(__dirname, 'research/ev-energy-testing/index.html'),
      evChargingService: resolve(__dirname, 'research/ev-charging-service/index.html'),
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
