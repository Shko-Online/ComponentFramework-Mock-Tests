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

            const args = {
                currencyInput: 1001.01,
                dateInput: new Date(2022,8,2),
                decimalInput: 123.45,
                integerInput:  987          
            }

            const currencyInput = mockGenerator.context.parameters.currencyInput as  NumberPropertyMock;
            currencyInput.setValue(args.currencyInput); 
            const dateInput = mockGenerator.context.parameters.dateInput as DateTimePropertyMock;
            dateInput.setValue(args.dateInput);
            const decimalInput = mockGenerator.context.parameters.decimalInput as DecimalNumberPropertyMock;
            decimalInput.setValue(args.decimalInput);
            const integerInput = mockGenerator.context.parameters.integerInput as WholeNumberPropertyMock;
            integerInput.setValue(args.integerInput); 
            

       
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