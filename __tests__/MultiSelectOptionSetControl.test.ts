/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  AttributeType,
  ComponentFrameworkMockGenerator,
  MultiSelectOptionSetPropertyMock,
} from "@shko.online/componentframework-mock";
import { MultiSelectOptionSetControl } from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/multi-select-option-set-control/MultiSelectOptionSetControl/generated/ManifestTypes";

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

    const controlValueMetadata = mockGenerator.metadata.getAttributeMetadata(
      "!CanvasApp",
      "controlValue"
    ) as unknown as ShkoOnline.PickListAttributeMetadata;
    controlValueMetadata.OptionSet = {
      IsCustomOptionSet: true,
      MetadataId: "",
      Name: "",
      OptionSetType: AttributeType.Picklist,
      Options: {
        1: {
          Label: "First",
          Value: 1,
        },
        2: {
          Label: "Second",
          Value: 2,
        },
      },
    };
    mockGenerator.metadata.upsertAttributeMetadata(
      "!CanvasApp",
      controlValueMetadata
    );
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
    mockGenerator.metadata.initCanvasItems([
      {
        controlValue: [1, 2],
      },
    ]);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const select = mockGenerator.container.querySelector("select");
    const option1 = select.querySelector(
      "option[value='1']"
    ) as HTMLOptionElement;
    var evt = document.createEvent("MouseEvent");
    evt.initUIEvent("click", true, true);
    option1.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().controlValue[0]).toEqual(2);
    expect(document.body).toMatchSnapshot();
  });
  it("Update individual selected", () => {
    mockGenerator.metadata.initCanvasItems([
      {
        controlValue: [],
      },
    ]);
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
