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
} from "@powerapps-samples/map-control/MapControl/generated/ManifestTypes";
import { MapControl } from "@powerapps-samples/map-control/MapControl";
import { StringPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock";

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
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      MapControl,
      {
        controlApiKey: StringPropertyMock,
        controlValue: StringPropertyMock,
      },
      container
    );
  const mapUrl = mockGenerator.context.parameters
    .controlValue as StringPropertyMock ;
  const apiKey = mockGenerator.context.parameters
    .controlApiKey as StringPropertyMock;
mapUrl.setValue(args.addressString);
apiKey.setValue(args.apiKey);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
Primary.args = {
    addressString: "",
    apiKey: "AIzaSyCdIXX4wdEPDGozhpbS1__l-LniN8IRotM"
};
