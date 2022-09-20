import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import {LocalizationAPIControl} from '@powerapps-samples/localization-api-control/LocalizationAPIControl';
import { IInputs, IOutputs } from '@powerapps-samples/localization-api-control/LocalizationAPIControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/localization-api-control/LocalizationAPIControl/strings/LocalizationAPIControl.1033.resx';
import { NumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/NumberProperty.mock';

export default {
    title: 'PCF Components/LocalizationAPIControl',
   
    argTypes: {
        
        value: {type :"number"},
        
    },
     parameters: {
        controls:{
            include:['value'],
            layout: 'fullscreen',
        },
    },
  } as Meta;

  const Template = (args) => {
    
    const container = document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
        LocalizationAPIControl,
        {
            value : NumberPropertyMock
        },
        container
    );
    const value = mockGenerator.context.parameters.value as NumberPropertyMock;
    value.setValue(args.value);
    mockGenerator.SetControlResource(resource);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
  }

  export const Primary = Template.bind({});
  Primary.args ={
    value : 10,
  }