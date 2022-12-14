import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { LocalizationAPIControl } from "@powerapps-samples/localization-api-control/LocalizationAPIControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/localization-api-control/LocalizationAPIControl/generated/ManifestTypes";
import resource from "@powerapps-samples/localization-api-control/LocalizationAPIControl/strings/LocalizationAPIControl.1033.resx";
import "@powerapps-samples/localization-api-control/LocalizationAPIControl/css/LocalizationAPIControl.css";
export default {
  title: "PCF Components/LocalizationAPIControl",

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
  container.className = "SampleNamespace.LocalizationAPIControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      LocalizationAPIControl,
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
  value: 10,
};
