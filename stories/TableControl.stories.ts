import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import { TableControl } from "@powerapps-samples/table-control/TableControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/table-control/TableControl/generated/ManifestTypes";
import "../PowerApps-Samples/component-framework/TableControl/TableControl/css/TableControl.css";

export default {
  title: "PCF Components/TableControl",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onEntityName: { action: "onEntityName" },
    onEntityType: { action: "onEntityType" },
    onCreateEntity: { action: "onCreateEntity" },
  },
  decorators: [
    (Story, context) => {
      return Story(context.args);
    },
  ],
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.TableControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      TableControl,
      {
        stringProperty: StringPropertyMock,
      },
      container
    );
  mockGenerator.metadata.initMetadata([
    {
      LogicalName: "account",
      Attributes: [],
    } as ShkoOnline.EntityMetadata,
  ]);
  mockGenerator.context.utils.lookupObjects.callsFake(
    (lookupOptions: ComponentFramework.UtilityApi.LookupOptions) => {
      return new Promise<ComponentFramework.LookupValue[]>((resolve) => {
        resolve([
          {
            entityType: lookupOptions.entityTypes
              ? lookupOptions.entityTypes[0]
              : "account",
            id: "00000000-0000-0000-0000-000000000004",
            name: "Account",
          },
        ]);
      });
    }
  );
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};
export const Primary = Template.bind({});
