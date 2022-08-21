import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@albanian-xrm/componentframework-mock/ComponentFramework-Mock-Generator';
import { ControlStateAPI } from '@powerapps-samples/control-state-api/ControlStateAPI';
import { StringPropertyMock } from '@albanian-xrm/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';

describe("ControlStateAPI tests", () => {
    it("Init should work", () => {
        const container = document.createElement('div');

        const mockGenerator = new ComponentFrameworkMockGenerator(
            ControlStateAPI,
            {
                stateControlProperty: StringPropertyMock
            },
            container);
        document.body.appendChild(container);
        mockGenerator.ExecuteInit();
        sinon.assert.calledOnce(mockGenerator.control.init);
        expect(document.body).toMatchSnapshot();
    })

    it("Update View should Work", () => {
        const container = document.createElement('div');

        const mockGenerator = new ComponentFrameworkMockGenerator(
            ControlStateAPI,
            {
                stateControlProperty: StringPropertyMock
            },
            container);
        document.body.appendChild(container);    
        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        sinon.assert.calledOnce(mockGenerator.control.init);
        sinon.assert.calledOnce(mockGenerator.control.updateView);
        expect(document.body).toMatchSnapshot();
    })
});
