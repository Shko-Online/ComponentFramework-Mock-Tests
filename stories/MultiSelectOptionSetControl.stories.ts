/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  MultiSelectOptionSetPropertyMock,
  OptionSetMetadataMock,
  OptionMetadataMock,
} from "@shko.online/componentframework-mock";
import { MultiSelectOptionSetControl } from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl/generated/ManifestTypes";

export default {
  title: "PCF Components/MultiSelectOptionSetControl",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: "onLogin" },
    onLogout: { action: "onLogout" },
    onCreateAccount: { action: "onCreateAccount" },
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      MultiSelectOptionSetControl,
      {
        controlValue: MultiSelectOptionSetPropertyMock,
      },
      container
    );

  const controlValueMetadata = mockGenerator.metadata.getAttributeMetadata(
    "!CanvasApp",
    "controlValue"
  ) as unknown as ShkoOnline.PickListAttributeMetadata;
  controlValueMetadata.OptionSet = controlValueMetadata.OptionSet = {
    IsCustomOptionSet: true,
    MetadataId: "",
    Name: "",
    OptionSetType: 11,
    Options: {},
  };
  args.Options.forEach((option) => {
    controlValueMetadata.OptionSet.Options[option.Value] = option;
  });
  mockGenerator.metadata.upsertAttributeMetadata(
    "!CanvasApp",
    controlValueMetadata
  );
  mockGenerator.metadata.initCanvasItems([{ controlValue: [] }]);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Secondary = Template.bind({});

Secondary.args = {
  Options: [
    { Value: 1, Label: "First" },
    { Value: 2, Label: "Second" },
    { Value: 3, Label: "Third" },
    { Value: 4, Label: "Fourth" },
    { Value: 5, Label: "Fifth" },
  ],
};

export const Primary = Template.bind({});
Primary.args = {
  Options: [
    { Value: 1, Label: "First" },
    { Value: 2, Label: "Second" },
  ],
};
