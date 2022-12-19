/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    moduleNameMapper: {    
      '@shko-online/componentframework-mock/(.*)': '<rootDir>/ComponentFramework-Mock/src/$1',
      '@albanian-xrm/test-components/(.*)': '<rootDir>/__test-components__/$1',
      '@powerapps-samples/control-state-api/(.*)': '<rootDir>/PowerApps-Samples/component-framework/ControlStateAPI/$1',
      '@powerapps-samples/formatting-api/(.*)': '<rootDir>/PowerApps-Samples/component-framework/FormattingAPIControl/$1',
      '@powerapps-samples/image-upload-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/ImageUploadControl/$1',
      '@powerapps-samples/increment-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/IncrementControl/$1',
      '@powerapps-samples/linear-input-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/LinearInputControl/$1',
      '@powerapps-samples/localization-api-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/LocalizationAPIControl/$1',
      '@powerapps-samples/lookup-simple-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/LookupSimpleControl/$1',
      '@powerapps-samples/multi-select-option-set-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/MultiSelectOptionSetControl/$1',
      '@powerapps-samples/navigation-api-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/NavigationAPIControl/$1',
      '@powerapps-samples/data-set-grid/(.*)': '<rootDir>/PowerApps-Samples/component-framework/DataSetGrid/$1',
      '@powerapps-samples/device-api-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/DeviceApiControl/$1',
      '@powerapps-samples/web-api-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/webAPIControl/$1',
      '@powerapps-samples/i-frame-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/IFrameControl/$1',
      '@powerapps-samples/property-set-table-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/PropertySetTableControl/$1',
      '@powerapps-samples/table-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/TableControl/$1',
      '@powerapps-samples/map-control/(.*)': '<rootDir>/PowerApps-Samples/component-framework/MapControl/$1',
      '@powerapps-samples/table-grid/(.*)': '<rootDir>/PowerApps-Samples/component-framework/TableGrid/$1',
    },  
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      // transform files with ts-jest
      "^.+\\.(jsx?|tsx?)$": "ts-jest",
      "\\.resx" : "<rootDir>/raw-Loader.js"
    },
    "setupFiles": [
			"<rootDir>/setupTests.ts"
		],
    coveragePathIgnorePatterns : [
      "/node_modules/",
      "/ComponentFramework-Mock/"
    ],
    coverageReporters: ['cobertura', "text","html"]
  }