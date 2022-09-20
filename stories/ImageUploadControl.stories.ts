import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { ImageUploadControl } from "@powerapps-samples/image-upload-control/ImageUploadControl";
import {IInputs,IOutputs, } from "@powerapps-samples/image-upload-control/ImageUploadControl/generated/ManifestTypes";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";
import * as resource from "@powerapps-samples/image-upload-control/ImageUploadControl/strings/ImageUploadControl.1033.resx";
export default {
    title: 'PCF Components/ImageUploadControl',
   
    argTypes: {
        value: {type :"string"},
    },
     parameters: {
        controls:{
        include:['value'],
        layout: 'fullscreen',
    }
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
    const value = mockGenerator.context.parameters.value as StringPropertyMock;
    value.setValue(args.value);
    container.style.width = "200px";
    container.style.height = "200px";
    mockGenerator.SetControlResource(resource);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;

  }
  export const Primary = Template.bind({})
  Primary.args= {
       value:"https://cdn1.iconfinder.com/data/icons/ui-colored-3-of-3/100/UI_3__2-512.png",
  }