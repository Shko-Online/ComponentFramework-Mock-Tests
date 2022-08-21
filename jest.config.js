/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    moduleNameMapper: {
      '@albanian-xrm/componentframework-mock/(.*)': '<rootDir>/ComponentFramework-Mock/src/$1',
      '@albanian-xrm/test-components/(.*)': '<rootDir>/__test-components__/$1',
      '@powerapps-samples/control-state-api/(.*)': '<rootDir>/PowerApps-Samples/component-framework/ControlStateAPI/$1'
    },  
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      // transform files with ts-jest
      "^.+\\.(jsx?|tsx?)$": "ts-jest",
    },
  }