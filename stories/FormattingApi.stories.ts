/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
  DateTimePropertyMock,
  DecimalNumberPropertyMock,
  WholeNumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { FormattingAPIControl } from "@albanian-xrm/test-components/FormattingAPIControl";
import {
  IInputs,
  IOutputs,
} from "@albanian-xrm/test-components/FormattingAPIControl/generated/ManifestTypes";
import "@powerapps-samples/formatting-api/FormattingAPIControl/css/FormattingAPIControl.css";

export default {
  title: "PCF Components/FormattingAPIControl",
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: "fullscreen",
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {},
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.FormattingAPIControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      FormattingAPIControl,
      {
        currencyInput: NumberPropertyMock,
        dateInput: DateTimePropertyMock,
        decimalInput: DecimalNumberPropertyMock,
        integerInput: WholeNumberPropertyMock,
      },
      container
    );
  mockGenerator.metadata.initCanvasItems([
    {
      currencyInput: args.value,
    },
  ]);
  mockGenerator.metadata.initCanvasItems([
    {
      dateInput: args.dateInput,
    },
  ]);
  mockGenerator.metadata.initCanvasItems([
    {
      decimalInput: args.decimalInput,
    },
  ]);
  mockGenerator.metadata.initCanvasItems([
    {
      integerInput: args.integerInput,
    },
  ]);

  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});

Primary.args = {
  currencyInput: 1001.01,
  dateInput: new Date(2022, 8, 2),
  decimalInput: 123.45,
  integerInput: 987,
};
