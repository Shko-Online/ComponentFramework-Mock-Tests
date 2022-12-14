import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { IncrementControl } from "@powerapps-samples/increment-control/IncrementControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/increment-control/IncrementControl/generated/ManifestTypes";
import resource from "@powerapps-samples/increment-control/IncrementControl/strings/IncrementControl.1033.resx";
import "@powerapps-samples/increment-control/IncrementControl/css/IncrementControl.css";

export default {
  title: "PCF Components/IncrementControl",

  argTypes: {
    value: { type: "number" },
  },
  parameters: {
    controls: {
      include: ["value"],
      layout: "fullscreen",
    },
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.IncrementControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      IncrementControl,
      {
        value: NumberPropertyMock,
      },
      container
    );
  mockGenerator.metadata.initCanvasItems([
    {
      value: args.value,
    },
  ]);
  mockGenerator.SetControlResource(resource);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
Primary.args = {
  value: 100,
};
