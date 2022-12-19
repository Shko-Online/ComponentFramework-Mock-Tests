/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import { WebAPIControl } from "@powerapps-samples/web-api-control/WebAPIControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/web-api-control/WebAPIControl/generated/ManifestTypes";
import resource from "@powerapps-samples/web-api-control/WebAPIControl/strings/WebAPIControl.1033.resx";

describe("WebAPIControl", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    window.alert = function (s: string) {
      console.info(s);
    };
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      WebAPIControl,
      {
        stringProperty: StringPropertyMock,
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
  it("Button //100 work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelector("#create_button_100");
    var evt = document.createEvent("Event");
    evt.initEvent("click", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("Button //200 work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelector("#create_button_200");
    var evt = document.createEvent("Event");
    evt.initEvent("click", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("Button //300 work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelector("#create_button_300");
    var evt = document.createEvent("Event");
    evt.initEvent("click", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("Button delete_button work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const button = mockGenerator.container.querySelector("#delete_button");
    var evt = document.createEvent("Event");
    evt.initEvent("click", true, false);
    button.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("Button calculateAverage work", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
    mockGenerator.context.webAPI.retrieveMultipleRecords.callsFake(
      (entity, options) => {
        return new Promise<ComponentFramework.WebApi.RetrieveMultipleResponse>(
          (resolve) => {
            resolve({
              entities: [
                {
                  average_val: 234,
                },
              ],
              nextLink: "string",
            });
          }
        );
      }
    );
    const buttons = mockGenerator.container.querySelectorAll("#odata_refresh");
    buttons.forEach((button) => {
      var evt = document.createEvent("Event");
      evt.initEvent("click", true, false);
      button.dispatchEvent(evt);

      mockGenerator.ExecuteUpdateView();
      expect(document.body).toMatchSnapshot();
    });
  });
  it("Destroy should work", () => {
    mockGenerator.control.destroy();
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("getOuputs should work", () => {
    mockGenerator.control.getOutputs();
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
});
