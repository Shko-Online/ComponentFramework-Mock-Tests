/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import sinon from "sinon";

import {
  ComponentFrameworkMockGenerator,
  DataSetMock,
} from "@shko.online/componentframework-mock";
import { DataSetGrid } from "@powerapps-samples/data-set-grid/DataSetGrid";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/data-set-grid/DataSetGrid/generated/ManifestTypes";
import resource from "@powerapps-samples/data-set-grid/DataSetGrid/strings/DataSetGrid.1033.resx";

describe("DataSetGrid", () => {
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
  const itemsLogicalName = "!!!items";
  const rows = [
    {
      myId: "1",
      alias: "First Item",
      alias2: "Second Item",
    },
    {
      myId: "2",
      alias: "First Item 2",
      alias2: "Second Item 2",
    },
  ];

  beforeEach(() => {
    const container = document.createElement("div");

    mockGenerator = new ComponentFrameworkMockGenerator(
      DataSetGrid,
      {
        dataSetGrid: DataSetMock,
      },
      container
    );
    mockGenerator.SetControlResource(resource);
    const controlValue = mockGenerator.context._parameters.dataSetGrid;
    controlValue.columns = [
      {
        alias: "alias",
        dataType: "string",
        displayName: "Mocked Column",
        name: "alias",
        order: 1,
        visualSizeFactor: 200,
      },
      {
        alias: "alias2",
        dataType: "string",
        displayName: "Second Mocked Column",
        name: "alias2",
        order: 2,
        visualSizeFactor: 200,
      },
    ];
    mockGenerator.metadata.initMetadata([
      {
        EntitySetName: itemsLogicalName,
        LogicalName: itemsLogicalName,
        PrimaryIdAttribute: "myId",
        PrimaryNameAttribute: "alias",
        Attributes: ["myId", "alias", "alias2"].map(
          (logicalName) =>
            ({
              EntityLogicalName: itemsLogicalName,
              LogicalName: logicalName,
            } as ShkoOnline.StringAttributeMetadata)
        ),
      },
    ]);
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
  it("Load More Button", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();

    const select = mockGenerator.container.querySelectorAll(
      ".DataSetControl_LoadMoreButton_Style"
    )[0];
    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("Adding DataSet Control main-container button to the container", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const select = mockGenerator.container.querySelector(
      ".DataSetControl_main-container"
    );
    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);

    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });
  it("toggle load more button if it has next page", () => {
    const controlValue = mockGenerator.context.parameters
      .dataSetGrid as DataSetMock;
    controlValue.paging.hasNextPage = true;

    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const select = mockGenerator.container.querySelector(
      ".DataSetControl_main-container"
    );
    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);
    expect(document.body).toMatchSnapshot();
  });
  it("Get sorted Columns", () => {
    mockGenerator.context.parameters.dataSetGrid.columns = [];
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
    mockGenerator.ExecuteUpdateView();
  });
  it("Row Click Event handler for the associated row when being clicked", () => {
    mockGenerator.context._parameters.dataSetGrid._Bind(
      itemsLogicalName,
      "items"
    );
    mockGenerator.context._parameters.dataSetGrid._InitItems(rows || []);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    const select = mockGenerator.container.querySelectorAll(
      `[rowRecId='${rows[0].myId}']`
    )[0];

    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);
    expect(document.body).toMatchSnapshot();
  });
  it("toggle load more when needed", () => {
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    mockGenerator.context.parameters.dataSetGrid.paging.hasNextPage = true;
    const select = mockGenerator.container.querySelector(
      ".DataSetControl_LoadMoreButton_Hidden_Style"
    );
    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);
    expect(document.body).toMatchSnapshot();
  });
  it("Destroy should work", () => {
    mockGenerator.control.destroy();
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    expect(document.body).toMatchSnapshot();
  });

  it("Render multiple rows", () => {
    mockGenerator.context._parameters.dataSetGrid._Bind(
      itemsLogicalName,
      "items"
    );
    mockGenerator.context._parameters.dataSetGrid._InitItems(rows || []);

    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const select = mockGenerator.container.querySelectorAll(
      `[rowRecId='${rows[0].myId}']`
    )[0];

    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);
    expect(document.body).toMatchSnapshot();
  });

  it("Render multiple rows sorted", () => {
    mockGenerator.context._parameters.dataSetGrid._Bind(
      itemsLogicalName,
      "items"
    );
    mockGenerator.context._parameters.dataSetGrid._InitItems(rows || []);
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();

    const select = mockGenerator.container.querySelectorAll(
      `[rowRecId='${rows[0].myId}']`
    )[0];

    var evt = document.createEvent("Event");
    evt.initEvent("click", false, true);
    select.dispatchEvent(evt);
    expect(document.body).toMatchSnapshot();
  });
});
