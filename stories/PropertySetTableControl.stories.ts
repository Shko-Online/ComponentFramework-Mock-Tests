import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  DataSetMock,
} from "@shko.online/componentframework-mock";
import { PropertySetTableControl } from "@albanian-xrm/test-components/PropertySetTableControl";
import {
  IInputs,
  IOutputs,
} from "@albanian-xrm/test-components/PropertySetTableControl/generated/ManifestTypes";
import resource from "@albanian-xrm/test-components/PropertySetTableControl/strings/PropertySetTableControl.1033.resx";
// import "@powerapps-samples/property-set-table-control/PropertySetTableControl/css/PropertySetTableControl.css"

export default {
  title: "PCF Components/PropertySetTableControl",

  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.PropertySetTableControl";
  container.style.padding = "20px";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      PropertySetTableControl,
      {
        sampleDataSet: DataSetMock,
      },
      container
    );
  mockGenerator.SetControlResource(resource);
  const controlValue = mockGenerator.context.parameters
    .sampleDataSet as DataSetMock;
  controlValue.columns = args.Columns || [];
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
  mockGenerator.context._parameters.sampleDataSet._Bind(
    itemsLogicalName,
    "items"
  );
  mockGenerator.context._parameters.sampleDataSet._InitItems(args.items || []);
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
  ],
};
