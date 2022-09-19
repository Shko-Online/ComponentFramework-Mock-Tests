import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { IFrameControl } from '@powerapps-samples/i-frame-control/IFrameControl';
import { IInputs, IOutputs } from '@powerapps-samples/i-frame-control/IFrameControl/generated/ManifestTypes';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';
import { DecimalNumberPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DecimalNumberProperty.mock';

export default {
    title: 'PCF Components/IFrameControl',
   
    argTypes: {
        stringProperty: {type :"string"},
        latitudeValue: {type :"number"},
        longitudeValue: {type :"number"},
    },
     parameters: {
        controls:{
            include:['latitudeValue','longitudeValue'],
            layout: 'fullscreen',
        },
    },
  } as Meta;
  
  const Template =(args)=>{
    const container = document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
        IFrameControl,
        {
            stringProperty: StringPropertyMock,
            latitudeValue: DecimalNumberPropertyMock,
            longitudeValue: DecimalNumberPropertyMock,
        },
        container
    );
    
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;

  }

  export const Primary = Template.bind({});
  Primary.args ={
    latitudeValue: 41.153332,
    longitudeValue: 20.168331,
  }


  export const Secondary = Template.bind({});
  Secondary.args ={
    latitudeValue: 45.153332,
    longitudeValue: 25.168331,
  }