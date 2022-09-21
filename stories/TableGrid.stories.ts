import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { TableGrid } from '@albanian-xrm/test-components/TableGrid';
import { IInputs, IOutputs } from '@albanian-xrm/test-components/TableGrid/generated/ManifestTypes';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import  resource from '@albanian-xrm/test-components/TableGrid/strings/TableGrid.1033.resx';
import { EntityRecord } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock';

export default {
    title: "PCF Components/TableGrid",
    parameters: {
        layout: 'fullscreen',
    },
    argTypes:{
   
    },
   
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
    const simpleTableGrid = mockGenerator.context.parameters.simpleTableGrid as DataSetMock;
    simpleTableGrid.columns = args.Columns||[];
    simpleTableGrid.initRecords((args.Items||[]).map(record=>{
      const record1 = new EntityRecord("test", record.id, record.alias);
      record1.columns = record;
      return record1;
    }))
   
    
    mockGenerator.SetControlResource(resource);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
}
export const Primary = Template.bind({});
Primary.args={
  Columns: [
    {
      alias: "alias1",
      dataType: "string",
      displayName: "First Mocked Column",
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
  ],
  Items: [
    {
      id: '1',
      alias: 'First Item',
      alias2: 'Second Item'
    },
    {
      id: '2',
      alias: 'First Item 2',
      alias2: 'Second Item 2'
    },
    {
      id: '3',
      alias: 'First Item 3',
      alias2: 'Second Item 3'
    }
  ]
}