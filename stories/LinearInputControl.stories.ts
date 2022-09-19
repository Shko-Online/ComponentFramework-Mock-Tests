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
import { Meta } from "@storybook/html";
import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/linear-input-control/LinearInputControl/generated/ManifestTypes";
import { NumberPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/NumberProperty.mock";
import { LinearInputControl } from "@powerapps-samples/linear-input-control/LinearInputControl";

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
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      LinearInputControl,
      {
        controlValue: NumberPropertyMock,
      },
      container
    );
  const sliderValue = mockGenerator.context.parameters
    .controlValue as NumberPropertyMock;
  sliderValue.setValue(args.sliderValue);

  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
Primary.args = {
  sliderValue: 333,

};
