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
} from "@powerapps-samples/map-control/MapControl/generated/ManifestTypes";
import { MapControl } from "@powerapps-samples/map-control/MapControl";
import "@powerapps-samples/map-control/MapControl/css/MapControl.css";
export default {
  title: "PCF Components/MapControl",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;
const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.MapControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      MapControl,
      {
        controlApiKey: StringPropertyMock,
        controlValue: StringPropertyMock,
      },
      container
    );

  mockGenerator.metadata.initCanvasItems([
    {
      mapUrl: args.addressString,
    },
  ]);
  mockGenerator.metadata.initCanvasItems([
    {
      apiKey: args.apiKey,
    },
  ]);

  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
Primary.args = {
  addressString: "",
  apiKey: "AIzaSyCdIXX4wdEPDGozhpbS1__l-LniN8IRotM",
};
