/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import sinon from 'sinon';
import { ComponentFrameworkMockGenerator,TwoOptionsPropertyMock } from '@shko.online/componentframework-mock';
import { TestComponentBoolean } from '@albanian-xrm/test-components/TestComponentBoolean/TestComponentBoolean';
import { IInputs, IOutputs } from '@albanian-xrm/test-components/TestComponentBoolean/generated/ManifestTypes';

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
