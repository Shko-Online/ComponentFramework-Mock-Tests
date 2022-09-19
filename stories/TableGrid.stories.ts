import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { TableGrid } from '@albanian-xrm/test-components/TableGrid';
import { IInputs, IOutputs } from '@albanian-xrm/test-components/TableGrid/generated/ManifestTypes';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';

export default {
    title: "PCF Components/TableGrid",
    parameters: {
        layout: 'fullscreen',
    },
    argTypes:{
   
    },
    decorators: [
        (Story, context)=>{
            return Story(context.args);
        }
    ]
} as Meta;

const Template= (args) =>{
    const container= document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
        TableGrid,
        {
            simpleTableGrid : DataSetMock,
        },
        container
    );
    const simpleTableGrid = mockGenerator.context.parameters
      .simpleTableGrid as DataSetMock;
      
    simpleTableGrid.columns = [
      {
        alias: "alias",
        dataType: "string",
        displayName: "Mocked Column",
        name: "alias",
        order: 1,
        visualSizeFactor: 200,
        
      },
      {
        alias: "alias2",
        dataType: "string",
        displayName: "Second Mocked Column",
        name: "alias2",
        order: 2,
        visualSizeFactor: 200,
      },
      {
        alias: "alias3",
        dataType: "Number",
        displayName: "3 Mocked Column",
        name: "alias3",
        order: 3,
        visualSizeFactor: 300,
      },
    ];
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
}
export const Primary = Template.bind({});