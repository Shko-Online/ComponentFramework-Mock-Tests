/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko.online/componentframework-mock';
import { DeviceApiControl } from '@powerapps-samples/device-api-control/DeviceApiControl';
import { IInputs, IOutputs } from '@powerapps-samples/device-api-control/DeviceApiControl/generated/ManifestTypes';
import resource from '@powerapps-samples/device-api-control/DeviceApiControl/strings/DeviceApiControl.1033.resx';
import { StringPropertyMock } from '@shko.online/componentframework-mock';

describe("DeviceApiControl", () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
        window.alert = function(s:string){
            console.info(s);
        }
		const container = document.createElement('div');

		mockGenerator = new ComponentFrameworkMockGenerator(
			DeviceApiControl,
			{
				Location: StringPropertyMock
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
		mockGenerator.context.updatedProperties[0] = "Location";
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		sinon.assert.calledOnce(mockGenerator.control.init);
        sinon.assert.calledOnce(mockGenerator.control.updateView);
        expect(document.body).toMatchSnapshot();
    })
    it("getLocationBtn should Work", () => {
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const button = mockGenerator.container.querySelector("input#getLocationBtn");
        var evt = document.createEvent("Event");
		evt.initEvent("pointerup", true, false);
		button.dispatchEvent(evt);

		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
           
    })
    it("getImageBtn should Work", () => {
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const button = mockGenerator.container.querySelector("input#getImageBtn");
        var evt = document.createEvent("Event");
		evt.initEvent("pointerup", true, false);
		button.dispatchEvent(evt);

		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
           
    })
    it("captureVideo should Work", () => {
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const button = mockGenerator.container.querySelector("input#captureVideo");
        var evt = document.createEvent("Event");
		evt.initEvent("pointerup", true, false);
		button.dispatchEvent(evt);

		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
           
    })
    it("captureAudio should Work", () => {
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const button = mockGenerator.container.querySelector("input#captureAudio");
        var evt = document.createEvent("Event");
		evt.initEvent("pointerup", true, false);
		button.dispatchEvent(evt);

		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
           
    })
    it("input#getBarcode should Work", () => {
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

		const button = mockGenerator.container.querySelector("input#getBarcode");
        var evt = document.createEvent("Event");
		evt.initEvent("pointerup", true, false);
		button.dispatchEvent(evt);

		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
           
    })
    it("Update View with error should work", () => {
        mockGenerator.context.device.pickFile.callsFake((options)=>{
           return new Promise<ComponentFramework.FileObject[]>((resolve,reject)=>{
            reject("Error");
           })
        });

		const element = mockGenerator.container.getElementsByClassName("error")[0];
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
        expect(document.body).toMatchSnapshot();
		
	})
    
})
