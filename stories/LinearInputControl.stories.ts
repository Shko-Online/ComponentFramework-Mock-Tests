/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Meta } from "@storybook/html";
import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/linear-input-control/LinearInputControl/generated/ManifestTypes";
import { LinearInputControl } from "@powerapps-samples/linear-input-control/LinearInputControl";
import "@powerapps-samples/linear-input-control/LinearInputControl/css/LinearInputControl.css";

export default {
  title: "PCF Components/LinearInputControl",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;
const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.LinearInputControl";
  container.style.padding = "20px";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      LinearInputControl,
      {
        controlValue: NumberPropertyMock,
      },
      container
    );

  mockGenerator.metadata.initCanvasItems([
    {
      controlValue: args.sliderValue,
    },
  ]);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
Primary.args = {
  sliderValue: 333,
};
