/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { IncrementControl } from "@powerapps-samples/increment-control/IncrementControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/increment-control/IncrementControl/generated/ManifestTypes";
import resource from "@powerapps-samples/increment-control/IncrementControl/strings/IncrementControl.1033.resx";

describe("IncrementControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      IncrementControl,
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
  it("Update View with error should work", () => {
    mockGenerator.context.parameters.value.error = true;
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
