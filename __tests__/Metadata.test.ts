/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import {
  ComponentFrameworkMockGenerator,
  NumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { LinearInputControl } from "@powerapps-samples/linear-input-control/LinearInputControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/linear-input-control/LinearInputControl/generated/ManifestTypes";
import * as userMetadataJson from "./data/systemUser.json";

describe("Metadata Tests", () => {
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

  it("can retrieve metadata", async () => {
    mockGenerator.metadata.initMetadata([
      JSON.parse(JSON.stringify(userMetadataJson)),
    ]);
    const systemUserMetadata =
      await mockGenerator.context.utils.getEntityMetadata("systemuser");

    expect(systemUserMetadata).not.toBeNull();
  });

  it("can retrieve subset of attributes", async () => {
    mockGenerator.metadata.initMetadata([
      JSON.parse(JSON.stringify(userMetadataJson)),
    ]);
    const systemUserMetadata =
      await mockGenerator.context.utils.getEntityMetadata("systemuser", [
        "fullname",
      ]);

    expect(systemUserMetadata).not.toBeNull();
    expect(systemUserMetadata.Attributes.length).toEqual(1);
  });
});
