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

import * as sinon from "sinon";

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { MultiSelectOptionSetControl } from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl/generated/ManifestTypes";
import { MultiSelectOptionSetPropertyMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/MultiSelectOptionSetProperty.mock";
import { OptionSetMetadataMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/Metadata/OptionSetMetadata.mock";
import { OptionMetadataMock } from "@shko-online/componentframework-mock/ComponentFramework-Mock/Metadata/OptionMetadata.mock";

describe("MultiSelectOptionSetControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
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
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.innerHTML = null;
  });
  it("Init should work", () => {
    mockGenerator.ExecuteInit();
    sinon.assert.calledOnce(mockGenerator.control.init);
    expect(document.body).toMatchSnapshot();
  });
  it("Update View should Work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });
  it("Select string value work", () => {
    const controlValue = mockGenerator.context.parameters
      .controlValue as MultiSelectOptionSetPropertyMock;
    controlValue.setValue([1, 2]);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const select = mockGenerator.container.querySelector("select");
    const option1 = select.querySelector("option[value='1']");
    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    option1.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().controlValue[0]).toEqual(2);
    expect(document.body).toMatchSnapshot();
  });
  it("Update individual selected", () => {
    const controlValue = mockGenerator.context.parameters
      .controlValue as MultiSelectOptionSetPropertyMock;
    controlValue.setValue([]);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const select = mockGenerator.container.querySelector("select");
    const option1 = select.querySelector("option[value='1']");
    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    option1.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().controlValue[0]).toEqual(1);
    expect(document.body).toMatchSnapshot();
  });
});
