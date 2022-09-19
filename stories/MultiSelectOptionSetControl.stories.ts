/*
	Unless explicitly acquired and licensed from Licensor under another
	license, the contents of this file are subject to the Reciprocal Public
	License ("RPL") Version 1.5, or subsequent versions as allowed by the RPL,
	and You may not copy or use this file in either source code or executable
	form, except in compliance with the terms and conditions of the RPL.

	All software distributed under the RPL is provided strictly on an "AS
	IS" basis, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND
	LICENSOR HEREBY DISCLAIMS ALL SUCH WARRANTIES, INCLUDING WITHOUT
	LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
	PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. See the RPL for specific
	language governing rights and limitations under the RPL. 
*/

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
  attributes.Options = args.Options;
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
}

export const Secondary = Template.bind({});

Secondary.args = {
  Options:  [
    new OptionMetadataMock(1, "First"),
    new OptionMetadataMock(2, "Second"),
    new OptionMetadataMock(3, "Third"),
    new OptionMetadataMock(4, "Fourth"),
    new OptionMetadataMock(5, "Fifth"),
  ]

}

export const Primary = Template.bind({});
Primary.args = {
  Options: [
    new OptionMetadataMock(1, "First"),
    new OptionMetadataMock(2, "Second"),
  ]
}