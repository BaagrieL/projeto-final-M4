export default {
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/__tests__/**/*.test.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@prisma|@babel)/)'
  ],
  setupFiles: ['<rootDir>/jest.setup.js']
}
