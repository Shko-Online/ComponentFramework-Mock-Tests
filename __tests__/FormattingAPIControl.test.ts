import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { FormattingAPIControl }  from '@powerapps-samples/formatting-api/FormattingAPIControl';
import { IInputs, IOutputs }  from '@powerapps-samples/formatting-api/FormattingAPIControl/generated/ManifestTypes';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';


describe("FormattingAPIControl tests", () => {
    let mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs>;
    beforeEach(()=>{
        const container = document.createElement('div');

         mockGenerator = new ComponentFrameworkMockGenerator(
            FormattingAPIControl,
            {
                controlValue: StringPropertyMock
            },
            container);
        document.body.appendChild(container);
    }
    )

    afterEach(()=>{
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
})