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

import { Story, Meta } from "@storybook/html";

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { DataSetGrid } from '@albanian-xrm/test-components/DataSetGrid';
import { IInputs, IOutputs } from '@albanian-xrm/test-components/DataSetGrid/generated/ManifestTypes';
import { DataSetMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock";
import resource from "@powerapps-samples/data-set-grid/DataSetGrid/strings/DataSetGrid.1033.resx";

export default {
  title: "PCF Components/DataSetGrid",
  parameters: {
      layout: 'fullscreen',
  },
  argTypes:{
 
  },
  decorators: [
      (Story, context)=>{
          return Story(context.args);
      }
  ]
} as Meta;

const Template= (args) =>{
  const container= document.createElement("div");
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
      DataSetGrid,
      {
        dataSetGrid: DataSetMock,
      },
      container
    );
  mockGenerator.SetControlResource(resource);
  const controlValue = mockGenerator.context.parameters
    .dataSetGrid as DataSetMock;
  controlValue.columns = [
    {
      alias: "alias",
      dataType: "string",
      displayName: "Mocked Column",
      name: "alias",
      order: 1,
      visualSizeFactor: 200,
    },
    {
      alias: "alias2",
      dataType: "string",
      displayName: "Second Mocked Column",
      name: "alias2",
      order: 2,
      visualSizeFactor: 200,
    },
  ];

  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const NoData = Template.bind({});
