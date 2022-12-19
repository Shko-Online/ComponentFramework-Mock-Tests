/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { LinearInputControl } from "@powerapps-samples/linear-input-control/LinearInputControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/linear-input-control/LinearInputControl/generated/ManifestTypes";

describe("LinearInputControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      LinearInputControl,
      {
        controlValue: NumberPropertyMock,
      },
      container
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
  it("Update View with value should work", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          controlValue: 500,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });
  it("Refresh Data should work", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          controlValue: 50,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const button = mockGenerator.container.querySelector("input");
    var evt = document.createEvent("Event");
    evt.initEvent("input", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();

    expect(document.body).toMatchSnapshot();
  });
  it("Slider should work", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          controlValue: 500,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const range = mockGenerator.container.querySelector("input");
    range.value = "700";
    var evt = document.createEvent("Event");
    evt.initEvent("input", true, false);
    range.dispatchEvent(evt);
    mockGenerator.ExecuteUpdateView();

    expect(document.body).toMatchSnapshot();
  });
});
