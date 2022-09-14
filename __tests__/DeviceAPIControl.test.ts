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
import { DeviceApiControl } from '@powerapps-samples/device-api-control/DeviceApiControl';
import { IInputs, IOutputs } from '@powerapps-samples/device-api-control/DeviceApiControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/device-api-control/DeviceApiControl/strings/DeviceApiControl.1033.resx';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';

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
            reject("Haha");
           })
        });

		const element = mockGenerator.container.getElementsByClassName("error")[0];
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
        expect(document.body).toMatchSnapshot();
		
	})
    
})
