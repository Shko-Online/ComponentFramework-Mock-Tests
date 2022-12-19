/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import {
  IInputs,
  IOutputs,
} from "@albanian-xrm/test-components/TestComponentContainer/generated/ManifestTypes";
import { TestComponentContainer } from "@albanian-xrm/test-components/TestComponentContainer/TestComponentContainer";

export default {
  title: "PCF Components/TestComponentcontainer",

  argTypes: {},
  parameters: {
    controls: {
      layout: "fullscreen",
    },
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      TestComponentContainer,
      {
        controlValue: StringPropertyMock,
      },
      container
    );
  container.style.overflow = "auto";
  container.style.position = "relative";
  container.style.resize = "both, initial";

  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};
export const Primary = Template.bind({});
