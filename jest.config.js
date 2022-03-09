// eslint-disable-next-line
const nextJest = require('next/jest')

const creatJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/cypress/'],
}

module.exports = creatJestConfig(customJestConfig)
