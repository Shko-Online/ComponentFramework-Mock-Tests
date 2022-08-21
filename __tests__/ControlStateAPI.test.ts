import * as sinon from 'sinon';
import { ComponentFrameworkMockGenerator } from '@albanian-xrm/componentframework-mock/ComponentFramework-Mock-Generator';
import { ControlStateAPI } from '@powerapps-samples/control-state-api/ControlStateAPI';
import { StringPropertyMock } from '@albanian-xrm/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';

describe("dumb test", () => {
    it("should work", () => {
        const mockGenerator = new ComponentFrameworkMockGenerator(ControlStateAPI, {
            stateControlProperty: StringPropertyMock
        });
        console.log( mockGenerator.context.parameters.stateControlProperty.raw);
        mockGenerator.ExecuteInit();
        sinon.assert.calledOnce(mockGenerator.control.init);
    })
});
