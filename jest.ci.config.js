module.exports = {
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/*.test.js",
    "**/__tests__/**/*.test.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules/"
  ],

  // Whether to use watchman for file crawling
  // watchman: true,
};
