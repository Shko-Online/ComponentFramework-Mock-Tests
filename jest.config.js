/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    moduleNameMapper: {
      '@shko-online/componentframework-mock/(.*)': '<rootDir>/ComponentFramework-Mock/src/$1',
      '@albanian-xrm/test-components/(.*)': '<rootDir>/__test-components__/$1',
      '@powerapps-samples/control-state-api/(.*)': '<rootDir>/PowerApps-Samples/component-framework/ControlStateAPI/$1',
      '@powerapps-samples/formatting-api/(.*)': '<rootDir>/PowerApps-Samples/component-framework/FormattingAPIControl/$1'
    },  
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      // transform files with ts-jest
      "^.+\\.(jsx?|tsx?)$": "ts-jest",
    },
  }