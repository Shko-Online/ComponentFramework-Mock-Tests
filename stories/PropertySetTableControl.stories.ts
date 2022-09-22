import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { PropertySetTableControl } from '@albanian-xrm/test-components/PropertySetTableControl';
import { IInputs, IOutputs } from '@albanian-xrm/test-components/PropertySetTableControl/generated/ManifestTypes';
import  resource from '@albanian-xrm/test-components/PropertySetTableControl/strings/PropertySetTableControl.1033.resx';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { EntityRecord } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock';
import "@powerapps-samples/property-set-table-control/PropertySetTableControl/css/PropertySetTableControl.css"

export default {
    title: "PCF Components/PropertySetTableControl",
  
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
  
} as Meta;

const Template =(args) => {
    const container = document.createElement("div");
    container.className = "SampleNamespace.PropertySetTableControl";
    container.style.padding = "20px"
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
        PropertySetTableControl,
        {
            sampleDataSet : DataSetMock,
        },
        container
    );
    mockGenerator.SetControlResource(resource);
    const controlValue = mockGenerator.context.parameters.sampleDataSet as DataSetMock;
    controlValue.columns = args.Columns||[];
    controlValue.initRecords((args.Items||[]).map(record=>{
      const record1 = new EntityRecord("test", record.id, record.alias);
      record1.columns = record;
      return record1;
    }))
  
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
  
};

export const Primary = Template.bind({});
Primary.args= {
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
        }
      ]
}
