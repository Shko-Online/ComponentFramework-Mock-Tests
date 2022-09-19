import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { ImageUploadControl } from "@powerapps-samples/image-upload-control/ImageUploadControl";
import {IInputs,IOutputs, } from "@powerapps-samples/image-upload-control/ImageUploadControl/generated/ManifestTypes";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";

export default {
    title: 'PCF Components/ImageUploadControl',
   
    argTypes: {
        value: {type :"string"},
    },
     parameters: {
        include:['value'],
        layout: 'fullscreen',
    },
  } as Meta;

  const Template =(args)=>{
    const container = document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
       ImageUploadControl,
        {
            value: StringPropertyMock,
        },
        container
    );
    
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;

  }
  export const Primary = Template.bind({})
  Primary.args= {

  }