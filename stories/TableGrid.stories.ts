import { Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  DataSetMock,
} from "@shko.online/componentframework-mock";
import { TableGrid } from "@albanian-xrm/test-components/TableGrid";
import {
  IInputs,
  IOutputs,
} from "@albanian-xrm/test-components/TableGrid/generated/ManifestTypes";
import resource from "@albanian-xrm/test-components/TableGrid/strings/TableGrid.1033.resx";
import "../PowerApps-Samples/component-framework/TableGrid/TableGrid/css/TableGrid.css";

export default {
  title: "PCF Components/TableGrid",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.TableGrid";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      TableGrid,
      {
        simpleTableGrid: DataSetMock,
      },
      container
    );
  mockGenerator.context.parameters.simpleTableGrid.columns = args.Columns || [];
  const itemsLogicalName = "!!!items";
  mockGenerator.metadata.initMetadata([
    {
      EntitySetName: itemsLogicalName,
      LogicalName: itemsLogicalName,
      PrimaryIdAttribute: "myId",
      PrimaryNameAttribute: "alias",
      Attributes: ["myId", "alias", "alias2"].map(
        (logicalName) =>
          ({
            EntityLogicalName: itemsLogicalName,
            LogicalName: logicalName,
          } as ShkoOnline.StringAttributeMetadata)
      ),
    },
  ]);
  mockGenerator.context._parameters.simpleTableGrid._Bind(
    itemsLogicalName,
    "items"
  );
  mockGenerator.context._parameters.simpleTableGrid._InitItems(
    args.items || []
  );
  mockGenerator.SetControlResource(resource);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};
export const Primary = Template.bind({});
Primary.args = {
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
      id: "1",
      alias: "First Item",
      alias2: "Second Item",
    },
    {
      id: "2",
      alias: "First Item 2",
      alias2: "Second Item 2",
    },
    {
      id: "3",
      alias: "First Item 3",
      alias2: "Second Item 3",
    },
  ],
};
