/*
	Unless explicitly acquired and licensed from Licensor under another
	license, the contents of this file are subject to the Reciprocal Public
	License ("RPL") Version 1.5, or subsequent versions as allowed by the RPL,
	and You may not copy or use this file in either source code or executable
	form, except in compliance with the terms and conditions of the RPL.

	All software distributed under the RPL is provided strictly on an "AS
	IS" basis, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND
	LICENSOR HEREBY DISCLAIMS ALL SUCH WARRANTIES, INCLUDING WITHOUT
	LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
	PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. See the RPL for specific
	language governing rights and limitations under the RPL. 
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
      
    },  
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      // transform files with ts-jest
      "^.+\\.(jsx?|tsx?)$": "ts-jest",
      "\\.resx" : "<rootDir>/raw-Loader.js"
    },
    coveragePathIgnorePatterns : [
      "/node_modules/",
      "/ComponentFramework-Mock/"
    ],
    coverageReporters: ['cobertura', "text","html"]
  }