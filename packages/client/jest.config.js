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
    // "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/"
  ],
  
  // Whether to use watchman for file crawling
  // watchman: true,

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
    '^Src(.*)$': '<rootDir>/src$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Reducers(.*)$': '<rootDir>/src/reducers$1',
    '^Style(.*)$': '<rootDir>/src/style$1',
    '^Api(.*)$': '<rootDir>/src/api$1',
    '^Js(.*)$': '<rootDir>/src/js$1',
  },
};
