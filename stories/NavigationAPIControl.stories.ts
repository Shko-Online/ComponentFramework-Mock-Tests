import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { NavigationAPIControl } from '@powerapps-samples/navigation-api-control/NavigationAPIControl';
import { IInputs, IOutputs } from '@powerapps-samples/navigation-api-control/NavigationAPIControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/navigation-api-control/NavigationAPIControl/strings/NavigationAPIControl.1033.resx';
import { NumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/NumberProperty.mock';
import { valueToNode } from '@babel/types';

export default {
    title: 'PCF Components/NavigationAPIControl',
   
    argTypes: {
        controlValue: {type :"number"},
    },
     parameters: {
        controls:{
        include:['controlValue'],
        layout: 'fullscreen',
    }
    },
  } as Meta;

  const Template = (args) =>{
    const container = document.createElement("div");
    const mockGenerator :ComponentFrameworkMockGenerator<IInputs, IOutputs> = new ComponentFrameworkMockGenerator(
        NavigationAPIControl,
        {
            controlValue: NumberPropertyMock,
        },
        container,
    );
    const controlValue = mockGenerator.context.parameters.controlValue as NumberPropertyMock;
    controlValue.setValue(args.controlValue);
    mockGenerator.SetControlResource(resource);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
  }
  export const Primary = Template.bind({})
  Primary.args= {
       
  }