module.exports = {
  "setupFilesAfterEnv": ["<rootDir>jest.setup.js"],
  testEnvironment: "jsdom",
  "testURL": "http://localhost/",
  "resetMocks": true,
  "resetModules": true,
  "collectCoverage": true,
  "collectCoverageFrom": [
    "packages/**/*.js",
    "!packages/**/dist/**",
    "!**/node_modules/**",
    "!**/*.story.js"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 56,
      "lines": 38,
      "statements": 38
    }
  },
  "coverageReporters": [
    "lcov",
    "html"
  ],
  "coveragePathIgnorePatterns": [
    "<rootDir>node_modules/",
    "<rootDir>coverage/"
  ],
  "testMatch": [
    "**/?(*.)(spec).js?(x)"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>node_modules/"
  ]
}
