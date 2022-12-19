/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/map-control/MapControl/generated/ManifestTypes";
import { MapControl } from "@powerapps-samples/map-control/MapControl";

describe("MapControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      MapControl,
      {
        controlApiKey: StringPropertyMock,
        controlValue: StringPropertyMock,
      },
      container
    );
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

  it("MapUrl not null", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          controlValue: "MapUrl",
          controlApiKey: "ApiKey",
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });
  it("ApiKey not null", () => {
    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          controlValue: "MapUrl",
          controlApiKey: "ApiKey",
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });
  it("Destroy should work", () => {
    mockGenerator.control.destroy();
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
});
