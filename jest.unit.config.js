module.exports = {
  // automock: false,
  // cacheDirectory: "/tmp/jest_rs",
  // clearMocks: false,

  testEnvironment: "node",
  testMatch: [
    "**/src/models/**/__tests__/*.spec.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],

  // Whether to use watchman for file crawling
  // watchman: true,
};
