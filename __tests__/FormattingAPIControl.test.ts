import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { FormattingAPIControl }  from '@albanian-xrm/test-components/FormattingAPIControl';
import { IInputs, IOutputs }  from '@albanian-xrm/test-components/FormattingAPIControl/generated/ManifestTypes';
import { NumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/NumberProperty.mock';
import { DateTimePropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DateTimeProperty.mock';
import { DecimalNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DecimalNumberProperty.mock';
import { WholeNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/WholeNumberProperty.mock';


describe("FormattingAPIControl tests", () => {
    let mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs>;
    beforeEach(()=>{
        const container = document.createElement('div');

         mockGenerator = new ComponentFrameworkMockGenerator(
            FormattingAPIControl,
            {
               currencyInput: NumberPropertyMock,
               dateInput: DateTimePropertyMock,
               decimalInput: DecimalNumberPropertyMock,
               integerInput: WholeNumberPropertyMock
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
        mockGenerator.context.parameters.currencyInput.raw = 1000.01;
        mockGenerator.context.parameters.dateInput.raw = new Date(2022,8,2);
        mockGenerator.context.parameters.decimalInput.raw = 123.45;
        mockGenerator.context.parameters.integerInput.raw = 987;

        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        sinon.assert.calledOnce(mockGenerator.control.init);
        sinon.assert.calledOnce(mockGenerator.control.updateView);
        expect(document.body).toMatchSnapshot();
    })
})