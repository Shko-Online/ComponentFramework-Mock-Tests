/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Meta } from "@storybook/html";
import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/web-api-control/WebAPIControl/generated/ManifestTypes";
import { WebAPIControl } from "@powerapps-samples/web-api-control/WebAPIControl";
import "@powerapps-samples/web-api-control/WebAPIControl/css/WebAPIControl.css";

export default {
  title: "PCF Components/WebApiControl",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;
const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.WebAPIControl";
  let mockGenerator = new ComponentFrameworkMockGenerator<IInputs, IOutputs>(
    WebAPIControl,
    {
      stringProperty: StringPropertyMock,
    },
    container
  );

  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
