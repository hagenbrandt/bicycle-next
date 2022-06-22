import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    viewportHeight: 800,
    viewportWidth: 1280,
    video: false,
    testFiles: ['**/*.spec.ts', '**/*.feature'],
    ignoreTestFiles: ['**/__snapshots__/*', '**/__image_snapshots__/*'],
    projectId: '1p1k1v',
  },
})
