/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Story, Meta } from "@storybook/html";

import { ComponentFrameworkMockGenerator, StringPropertyMock } from "@shko.online/componentframework-mock";
import { ControlStateAPI } from "@powerapps-samples/control-state-api/ControlStateAPI";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/control-state-api/ControlStateAPI/generated/ManifestTypes";
import "@powerapps-samples/control-state-api/ControlStateAPI/css/ControlStateAPI.css"
export default {
  title: "PCF Components/ControlState",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.ControlStateAPI";
  let mockGenerator = new ComponentFrameworkMockGenerator<IInputs,IOutputs>(
      ControlStateAPI,
      {
        stateControlProperty: StringPropertyMock,
      },
      container
    );

    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
};

export const Primary = Template.bind({});
