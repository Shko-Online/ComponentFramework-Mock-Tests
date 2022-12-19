/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import * as sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
  DateTimePropertyMock,
  DecimalNumberPropertyMock,
  WholeNumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { FormattingAPIControl } from "@albanian-xrm/test-components/FormattingAPIControl";
import {
  IInputs,
  IOutputs,
} from "@albanian-xrm/test-components/FormattingAPIControl/generated/ManifestTypes";

describe("FormattingAPIControl tests", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      FormattingAPIControl,
      {
        currencyInput: NumberPropertyMock,
        dateInput: DateTimePropertyMock,
        decimalInput: DecimalNumberPropertyMock,
        integerInput: WholeNumberPropertyMock,
      },
      container
    );

    mockGenerator.metadata.initItems({
      "@odata.context": "#!CanvasApp",
      value: [
        {
          currencyInput: 1001.01,
          dateInput: new Date(2022, 8, 2),
          decimalInput: 123.45,
          integerInput: 987,
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
});
