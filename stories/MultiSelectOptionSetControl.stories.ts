import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { MultiSelectOptionSetControl } from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl/generated/ManifestTypes";
import { MultiSelectOptionSetPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/MultiSelectOptionSetProperty.mock";
import { OptionSetMetadataMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/Metadata/OptionSetMetadata.mock";
import { OptionMetadataMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/Metadata/OptionMetadata.mock";

export default {
  title: 'PCF Components/MultiSelectOptionSetControl',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
  decorators: [
    (Story, context) => {

      return Story(context.args);
    }
  ]
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> = new ComponentFrameworkMockGenerator(
    MultiSelectOptionSetControl,
    {
      controlValue: MultiSelectOptionSetPropertyMock,
    },
    container
  );
  const attributes = mockGenerator.context.parameters.controlValue
    .attributes as OptionSetMetadataMock;
  attributes.Options = [
    new OptionMetadataMock(1, "First"),
    new OptionMetadataMock(2, "Second"),
  ];
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
}

export const Primary = Template.bind({});
