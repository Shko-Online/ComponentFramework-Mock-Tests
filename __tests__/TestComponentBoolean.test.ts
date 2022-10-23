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

import * as sinon from 'sinon';
import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { TestComponentBoolean } from '@albanian-xrm/test-components/TestComponentBoolean/TestComponentBoolean';
import { IInputs, IOutputs } from '@albanian-xrm/test-components/TestComponentBoolean/generated/ManifestTypes';
import { TwoOptionsPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/TwoOptionsProperty.mock';

describe("dumb test", () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
		const container = document.createElement('div');

		mockGenerator = new ComponentFrameworkMockGenerator(
			TestComponentBoolean,
			{
				turnedOn: TwoOptionsPropertyMock
			});
		document.body.appendChild(container);
	})

	afterEach(() => {
		document.body.innerHTML = null;
	})

	it("should work", () => {
		mockGenerator.metadata.initItems({
			"@odata.context": "#!CanvasApp",
			"value": [
				{
					"turnedOn": true
				}
			]
		});
		mockGenerator.ExecuteInit();
		sinon.assert.calledOnce(mockGenerator.control.init);
		sinon.assert.called(mockGenerator.notifyOutputChanged);
	})
});
