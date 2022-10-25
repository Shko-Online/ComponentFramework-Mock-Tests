import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { LookupSimpleControl } from '@powerapps-samples/lookup-simple-control/LookupSimpleControl';
import { IInputs, IOutputs } from '@powerapps-samples/lookup-simple-control/LookupSimpleControl/generated/ManifestTypes';
import { LookupPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/LookupProperty.mock';


export default {
    title: 'PCF Components/LookupSimpleControl',
     parameters: {
        controls:{
            include:[],
            layout: 'fullscreen',
        },
    },
  } as Meta;

  const Template = (args) =>{
    const container = document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
        LookupSimpleControl,
        {
            controlValue: LookupPropertyMock,
            controlValue1: LookupPropertyMock,
        },
        container,
    )
  //const lookupValue = args.lookupvalue as LookupPropertyMock;

    mockGenerator.metadata.initCanvasItems([
      {
        controlValue: args.controlValue,   
        controlValue1: args.controlValue1,
      },
    ]);

    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
  }

  export const Primary = Template.bind({})
  Primary.args= {
    controlValue : {name:"Account",id:"00000000-0000-0000-0000-000000000000",entityType:"account"},
    controlValue1 : {name:"Contact",id:"00000000-0000-0000-0000-000000000001",entityType:"contact"},
 }