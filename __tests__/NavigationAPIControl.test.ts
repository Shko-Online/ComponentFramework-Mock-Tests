/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { NavigationAPIControl } from "@powerapps-samples/navigation-api-control/NavigationAPIControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/navigation-api-control/NavigationAPIControl/generated/ManifestTypes";
import resource from "@powerapps-samples/navigation-api-control/NavigationAPIControl/strings/NavigationAPIControl.1033.resx";

describe("NavigationAPIControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      NavigationAPIControl,
      {
        controlValue: NumberPropertyMock,
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
  it("Buttons should work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const buttons = mockGenerator.container.querySelectorAll("button");
    buttons.forEach((button) => {
      var cases = button.textContent;
      var evt = document.createEvent("Event");
      evt.initEvent("click", true, false);
      button.dispatchEvent(evt);

      mockGenerator.ExecuteUpdateView();
      expect(document.body).toMatchSnapshot();
    });
  });
  it("GetOutputs should work", () => {
    mockGenerator.control.getOutputs();
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("Destroy should work", () => {
    mockGenerator.control.destroy();
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
});
