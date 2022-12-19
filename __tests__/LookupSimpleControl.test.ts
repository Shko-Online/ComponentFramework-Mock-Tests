/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  LookupPropertyMock,
} from "@shko.online/componentframework-mock";
import { LookupSimpleControl } from "@powerapps-samples/lookup-simple-control/LookupSimpleControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/lookup-simple-control/LookupSimpleControl/generated/ManifestTypes";

describe("LookupSimpleControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      LookupSimpleControl,
      {
        controlValue: LookupPropertyMock,
        controlValue1: LookupPropertyMock,
      },
      container
    );

    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          controlValue: {
            entityType: "mocked_entity",
            id: "00000000-0000-0000-0000-000000000001",
            name: "Test Betim",
          },
          controlValue1: {
            entityType: "mocked_entity",
            id: "00000000-0000-0000-0000-000000000002",
            name: "Test Betim2",
          },
        },
      ],
    });
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

  it("Click should Work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const buttons = mockGenerator.container.querySelectorAll("button");
    buttons.forEach((button) => {
      var evt = document.createEvent("Event");
      evt.initEvent("click", false, true);
      button.dispatchEvent(evt);

      mockGenerator.ExecuteUpdateView();

      expect(document.body).toMatchSnapshot();
    });
  });
});
