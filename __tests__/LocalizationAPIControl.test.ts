/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { LocalizationAPIControl } from "@powerapps-samples/localization-api-control/LocalizationAPIControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/localization-api-control/LocalizationAPIControl/generated/ManifestTypes";
import resource from "@powerapps-samples/localization-api-control/LocalizationAPIControl/strings/LocalizationAPIControl.1033.resx";

describe("LocalizationAPIControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      LocalizationAPIControl,
      {
        value: NumberPropertyMock,
      },
      container
    );
    mockGenerator.SetControlResource(resource);
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
          value: 100,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });
  it("Blur should Work", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          value: 100,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const button = mockGenerator.container.querySelector("input");
    var evt = document.createEvent("Event");
    evt.initEvent("blur", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().value).toEqual(100);
    expect(document.body).toMatchSnapshot();
  });
  it("Click should Work", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          value: 100,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelector("button");
    var evt = document.createEvent("Event");
    evt.initEvent("click", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().value).toEqual(101);
    expect(document.body).toMatchSnapshot();
  });
});
