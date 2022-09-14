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
import { WebAPIControl } from '@powerapps-samples/web-api-control/WebAPIControl';
import { IInputs, IOutputs } from '@powerapps-samples/web-api-control/WebAPIControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/web-api-control/WebAPIControl/strings/WebAPIControl.1033.resx';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';

describe("WebAPIControl", () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
        window.alert = function(s:string){
            console.info(s);
        }
		const container = document.createElement('div');

		mockGenerator = new ComponentFrameworkMockGenerator(
			WebAPIControl,
			{
				stringProperty: StringPropertyMock
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
    it("Button //100 work", () => {
        mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
      
        const button =mockGenerator.container.querySelector('#create_button_100');
        var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);

        mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
    })
    it("Button //200 work", () => {
        mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
     
        const button =mockGenerator.container.querySelector('#create_button_200');
        var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);

        mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
    })
    it("Button //300 work", () => {
        mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
       
        const button =mockGenerator.container.querySelector('#create_button_300');
        var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);

        mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
    })
    it("Button delete_button work", () => {
        mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();

        const button =mockGenerator.container.querySelector('#delete_button');
        var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);

        mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
    })
    it("Button calculateAverage work", () => {
        mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
        mockGenerator.context.webAPI.retrieveMultipleRecords.callsFake((entity,options)=>{
            return new Promise<ComponentFramework.WebApi.RetrieveMultipleResponse>((resolve) =>{
                resolve({
                    entities: [
                        {
                            average_val: 234
                        }
                    ],
                    nextLink: "string"
                })
            })
        });
        const buttons =mockGenerator.container.querySelectorAll('#odata_refresh');
        buttons.forEach((button)=>{
            var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);

        mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
        })
        
    })
    
})