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
import { LookupSimpleControl } from '@powerapps-samples/lookup-simple-control/LookupSimpleControl';
import { IInputs, IOutputs } from '@powerapps-samples/lookup-simple-control/LookupSimpleControl/generated/ManifestTypes';
import { LookupPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/LookupProperty.mock';

describe("LookupSimpleControl", () => {
    let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
    beforeEach(() => {
        const container = document.createElement('div');

        mockGenerator = new ComponentFrameworkMockGenerator(
            LookupSimpleControl,
            {
                controlValue: LookupPropertyMock,
                controlValue1: LookupPropertyMock
            },
            container);
        mockGenerator.context.parameters.controlValue.raw = [{
            entityType: 'mocked_entity',
            id: "00000000-0000-0000-0000-000000000001",
            name: 'Test Betim'
        }];
        mockGenerator.context.parameters.controlValue1.raw = [{
            entityType: 'mocked_entity',
            id: "00000000-0000-0000-0000-000000000002",
            name: 'Test Betim2'
        }];
        document.body.appendChild(container);
    }
    )

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

    it("Click should Work", () => {       
        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        expect(document.body).toMatchSnapshot();
       
        const buttons = mockGenerator.container.querySelectorAll("button");
        buttons.forEach(button => {
            var evt = document.createEvent("Event");
            evt.initEvent("click", false, true);
            button.dispatchEvent(evt);
       
            mockGenerator.ExecuteUpdateView();     
                
            expect(document.body).toMatchSnapshot();
        });       
    })
});