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

   const lookup1=mockGenerator.context.parameters.controlValue as LookupPropertyMock;
    lookup1.setValue([{name:args.lookupValue1[0],entityType:args.lookupValue1[1],id:args.lookupValue1[2]}])
    const lookup2=mockGenerator.context.parameters.controlValue1 as LookupPropertyMock;
    lookup2.setValue([{name:args.lookupValue2[0],entityType:args.lookupValue2[1],id:args.lookupValue2[2]}])


    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
  }

  export const Primary = Template.bind({})
  Primary.args= {
    lookupValue1 : ["Account","account", "00000000-0000-0000-0000-000000000000"],
    lookupValue2 : ["Contact","contact", "00000000-0000-0000-0000-000000000001"],
 }