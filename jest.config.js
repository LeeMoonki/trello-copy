// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.next/"
  ],

  // An array of file extensions your modules use
  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "node"
  // ],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/"
  ],
  
  // Whether to use watchman for file crawling
  // watchman: true,

  moduleNameMapper: {
    '^@(.*)%': '<rootDir>/src$1',
    '^Components(.*)%': '<rootDir>/src/components$1',
    '^Reducers(.*)$': '<rootDir>/src/reducers$1',
    '^Style(.*)%': '<rootDir>/src/style$1',
  },
};
