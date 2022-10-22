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
jest.useFakeTimers({
	now: new Date(2022, 9, 9, 10)
});

import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { TableControl } from '@powerapps-samples/table-control/TableControl';
import { IInputs, IOutputs } from '@powerapps-samples/table-control/TableControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/table-control/TableControl/strings/TableControl.1033.resx';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';


describe("TableControl", () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
		const container = document.createElement('div');

		mockGenerator = new ComponentFrameworkMockGenerator(
			TableControl,
			{
				stringProperty: StringPropertyMock
			},
			container);
		mockGenerator.SetControlResource(resource);
		document.body.appendChild(container);
		mockGenerator.metadata.initMetadata([{
			LogicalName: 'account',
			Attributes: []
		} as ShkoOnline.EntityMetadata]);

		mockGenerator.context.utils.lookupObjects.callsFake((lookupOptions: ComponentFramework.UtilityApi.LookupOptions) => {
			return new Promise<ComponentFramework.LookupValue[]>((resolve) => {
				resolve([{
					entityType: lookupOptions.entityTypes ? lookupOptions.entityTypes[0] : 'account',
					id: "00000000-0000-0000-0000-000000000001",
					name: "Account",
				}])
			});
		})

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
	it("GetOutputs should work", () => {
		mockGenerator.control.getOutputs();
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
	})
	it("Destroy should work", () => {
		mockGenerator.control.destroy();
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
	})

	it("Click should Work", () => {

		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const buttons = mockGenerator.container.querySelectorAll("button");
		buttons.forEach((button) => {
			var evt = document.createEvent("Event");
			evt.initEvent("click", true, false);
			button.dispatchEvent(evt);

			mockGenerator.ExecuteUpdateView();
			expect(document.body).toMatchSnapshot();
		})

	})

	it("onlookup", () => {

		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
		const entitymeta = mockGenerator.context.utils.getEntityMetadata("account");
		const times = 0;
		const buttons = mockGenerator.container.querySelectorAll(".SampleControlHtmlTable_ButtonClass");
		buttons.forEach((button) => {
			var evt = document.createEvent("Event");
			evt.initEvent("click", true, false);
			button.dispatchEvent(evt);
			times + 1;

			mockGenerator.ExecuteUpdateView();
			expect(document.body).toMatchSnapshot();
		})
	})
})