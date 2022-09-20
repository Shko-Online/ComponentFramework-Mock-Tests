import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { DeviceApiControl } from '@powerapps-samples/device-api-control/DeviceApiControl';
import { IInputs, IOutputs } from '@powerapps-samples/device-api-control/DeviceApiControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/device-api-control/DeviceApiControl/strings/DeviceApiControl.1033.resx';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';

export default {
    title: 'PCF Components/DeviceApiControl',
   
    argTypes: {
        Location : {type :"string"},
    },
     parameters: {
        controls:{
        include:['Location'],
        layout: 'fullscreen',
    }
    },
  } as Meta;

  const Template = (args) => {
    const container = document.createElement("div");
    const mockGenerator : ComponentFrameworkMockGenerator<IInputs, IOutputs> = new ComponentFrameworkMockGenerator(
        DeviceApiControl,
        {
            Location : StringPropertyMock
        },
        container
    );
    const Location = mockGenerator.context.parameters.Location as StringPropertyMock;
    Location.setValue(args.value);
    mockGenerator.SetControlResource(resource);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;

  }
  export const Primary = Template.bind({})
  Primary.args= {

}