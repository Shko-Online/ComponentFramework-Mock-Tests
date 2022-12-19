/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import { ImageUploadControl } from "@powerapps-samples/image-upload-control/ImageUploadControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/image-upload-control/ImageUploadControl/generated/ManifestTypes";
import resource from "@powerapps-samples/image-upload-control/ImageUploadControl/strings/ImageUploadControl.1033.resx";

describe("ImageUploadontrol", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      ImageUploadControl,
      {
        value: StringPropertyMock,
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
    mockGenerator.context.parameters.value.raw = null;
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    sinon.assert.calledOnce(mockGenerator.control.init);
    sinon.assert.calledOnce(mockGenerator.control.updateView);
    expect(document.body).toMatchSnapshot();
  });

  it("Click upload work", () => {
    mockGenerator.context.parameters.value.raw = null;
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelectorAll("button")[0];

    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().value).not.toBeNull();
    expect(document.body).toMatchSnapshot();
  });
  it("Click remove work", () => {
    mockGenerator.context.parameters.value.raw = "";
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelectorAll("button")[1];
    var evt = document.createEvent("Event");
    evt.initEvent("click", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(mockGenerator.control.getOutputs().value).toEqual(undefined);
    expect(document.body).toMatchSnapshot();
  });
});
