/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

jest.useFakeTimers({
	now: new Date(2022, 9, 9, 10)
});

import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator, StringPropertyMock } from '@shko.online/componentframework-mock';
import { TableControl } from '@powerapps-samples/table-control/TableControl';
import { IInputs, IOutputs } from '@powerapps-samples/table-control/TableControl/generated/ManifestTypes';
import resource from '@powerapps-samples/table-control/TableControl/strings/TableControl.1033.resx';

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