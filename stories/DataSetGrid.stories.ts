/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Story, Meta } from "@storybook/html";

import { ComponentFrameworkMockGenerator,DataSetMock } from "@shko.online/componentframework-mock";
import { DataSetGrid } from "@albanian-xrm/test-components/DataSetGrid";
import {
  IInputs,
  IOutputs,
} from "@albanian-xrm/test-components/DataSetGrid/generated/ManifestTypes";
import resource from "@powerapps-samples/data-set-grid/DataSetGrid/strings/DataSetGrid.1033.resx";
import "@powerapps-samples/data-set-grid/DataSetGrid/css/DataSetGrid.css"

export default {
  title: "PCF Components/DataSetGrid",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    (Story, context) => {
      return Story(context.args);
    },
  ],
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.DataSetGrid";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      DataSetGrid,
      {
        dataSetGrid: DataSetMock,
      },
      container
    );
  mockGenerator.SetControlResource(resource);

  const dataSetGrid = mockGenerator.context.parameters
    .dataSetGrid as DataSetMock;
    
  dataSetGrid.columns = args.Columns||[];
  const itemsLogicalName = '!!!items';
  
  mockGenerator.metadata.initMetadata([
      {
          EntitySetName: itemsLogicalName,
          LogicalName: itemsLogicalName,
          PrimaryIdAttribute: 'myId',
          PrimaryNameAttribute: 'alias',
          Attributes: ['myId', 'alias', "alias2"].map(
              (logicalName) =>
              ({
                  EntityLogicalName: itemsLogicalName,
                  LogicalName: logicalName,
              } as ShkoOnline.StringAttributeMetadata),
          ),
      },
  ]);
  mockGenerator.context._parameters.dataSetGrid._Bind(itemsLogicalName, 'items');
  mockGenerator.context._parameters.dataSetGrid._InitItems(args.items || []);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const NoData = Template.bind({});
NoData.args = {
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
  items: [
    {
      myId: '1',
      alias: 'First Item',
      alias2: 'Second Item'
    },
    {
      myId: '2',
      alias: 'First Item 2',
      alias2: 'Second Item 2'
    }
  ]
}