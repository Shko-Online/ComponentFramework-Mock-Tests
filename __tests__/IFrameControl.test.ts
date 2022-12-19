/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
  DecimalNumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { IFrameControl } from "@powerapps-samples/i-frame-control/IFrameControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/i-frame-control/IFrameControl/generated/ManifestTypes";
import resource from "@powerapps-samples/i-frame-control/IFrameControl/strings/IFrameControl.1033.resx";

describe("IFrameControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    window.alert = function (s: string) {
      console.info(s);
    };
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      IFrameControl,
      {
        stringProperty: StringPropertyMock,
        latitudeValue: DecimalNumberPropertyMock,
        longitudeValue: DecimalNumberPropertyMock,
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
          latitudeValue: 41.153332,
          longitudeValue: 20.168331,
        },
      ],
    });
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });
});
