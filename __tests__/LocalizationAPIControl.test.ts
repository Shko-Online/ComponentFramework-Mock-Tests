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
import {LocalizationAPIControl} from '@powerapps-samples/localization-api-control/LocalizationAPIControl';
import { IInputs, IOutputs } from '@powerapps-samples/localization-api-control/LocalizationAPIControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/localization-api-control/LocalizationAPIControl/strings/LocalizationAPIControl.1033.resx';
import { NumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/NumberProperty.mock';

describe("LocalizationAPIControl", () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
		const container = document.createElement('div');

		mockGenerator = new ComponentFrameworkMockGenerator(
			LocalizationAPIControl ,
			{
				value: NumberPropertyMock
			},
			container);
		mockGenerator.SetControlResource(resource);
		document.body.appendChild(container);
	})
    afterEach(() => {
		document.body.innerHTML = null;
	})
	it("Init should work", () => {
		mockGenerator.ExecuteInit();
		sinon.assert.calledOnce(mockGenerator.control.init);
		expect(document.body).toMatchSnapshot();
	})
	it("Update View should Work", () => {
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		sinon.assert.calledOnce(mockGenerator.control.init);
		sinon.assert.calledOnce(mockGenerator.control.updateView);
		expect(document.body).toMatchSnapshot();
	})
	it("Update View with value should work", () => {
		mockGenerator.context.parameters.value.raw = 100;
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		sinon.assert.calledOnce(mockGenerator.control.init);
		sinon.assert.calledOnce(mockGenerator.control.updateView);
		expect(document.body).toMatchSnapshot();
	})
    it("Blur should Work", () => {
		mockGenerator.context.parameters.value.raw = 100;
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();

		const button = mockGenerator.container.querySelector("input");
		var evt = document.createEvent("Event");
		evt.initEvent("blur", true, false);
		button.dispatchEvent(evt);

		mockGenerator.ExecuteUpdateView();		
		expect(mockGenerator.control.getOutputs().value).toEqual(100);
		expect(document.body).toMatchSnapshot();
    })
    it("Click should Work", () => {
		mockGenerator.context.parameters.value.raw = 100;
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const button = mockGenerator.container.querySelector("button");
		var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);


		mockGenerator.ExecuteUpdateView();
		console.log(mockGenerator.control.getOutputs().value);
		expect(mockGenerator.control.getOutputs().value).toEqual(101);
		expect(document.body).toMatchSnapshot();
    })
});