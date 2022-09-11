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
import { ControlStateAPI }  from '@powerapps-samples/control-state-api/ControlStateAPI';
import { IInputs, IOutputs }  from '@powerapps-samples/control-state-api/ControlStateAPI/generated/ManifestTypes';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';


// Key used to store the selected color into the context object to persist across navigations 
const PERSISTED_SELECTED_COLOR_KEY_NAME = "selectedColor";

// Key used to store the selected color into the context object to persist across navigations 
const PERSISTED_SELECTED_LABEL_KEY_NAME = "selectedLabel";

describe("ControlStateAPI tests", () => {
    let mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs>;
    beforeEach(()=>{
        const container = document.createElement('div');

         mockGenerator = new ComponentFrameworkMockGenerator(
            ControlStateAPI,
            {
                stateControlProperty: StringPropertyMock
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

    it("Update View with state should Work", () => {      
        mockGenerator.state = {};
        mockGenerator.state[PERSISTED_SELECTED_COLOR_KEY_NAME] = "#add8e6";
        mockGenerator.state[PERSISTED_SELECTED_LABEL_KEY_NAME] = "Blue";
     
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
       
        const button = document.body.querySelector("[value=Blue]");
        var evt = document.createEvent("Event");
        evt.initEvent("click", false, true);
        button.dispatchEvent(evt);
   
        mockGenerator.ExecuteUpdateView();     
        expect(mockGenerator.state[PERSISTED_SELECTED_LABEL_KEY_NAME]).toEqual("Blue");
        sinon.assert.calledOnce(mockGenerator.context.mode.setControlState);
        expect(document.body).toMatchSnapshot();
    })

  
});
