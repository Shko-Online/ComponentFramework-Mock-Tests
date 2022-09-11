import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { LookupSimpleControl } from '@powerapps-samples/lookup-simple-control/LookupSimpleControl';
import { IInputs, IOutputs } from '@powerapps-samples/lookup-simple-control/LookupSimpleControl/generated/ManifestTypes';
import { LookupPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/LookupProperty.mock';

describe("ControlStateAPI tests", () => {
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
       
        const button = mockGenerator.container.querySelector("button");
        var evt = document.createEvent("Event");
        evt.initEvent("click", false, true);
        button.dispatchEvent(evt);
   
        mockGenerator.ExecuteUpdateView();     
            
        expect(document.body).toMatchSnapshot();
    })
});