import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@albanian-xrm/componentframework-mock/ComponentFramework-Mock-Generator';
import { ControlStateAPI }  from '@powerapps-samples/control-state-api/ControlStateAPI';
import { IInputs, IOutputs }  from '@powerapps-samples/control-state-api/ControlStateAPI/generated/ManifestTypes';
import { StringPropertyMock } from '@albanian-xrm/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';


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