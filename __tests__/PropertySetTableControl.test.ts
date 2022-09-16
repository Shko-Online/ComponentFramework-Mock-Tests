/*
	Unless explicitly acquired and licensed from Licensor under another
	license, the contents of this file are subject to the Reciprocal Public
	License ("RPL") Version 1.5, or subsequent versions as allowed by the RPL,
	and You may not copy or use this file in either source code or executable
	form, except in compliance with the terms and conditions of the RPL.

	All software distributed under the RPL is provided strictly on an "AS
	IS" basis, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND
	LICENSOR HEREBY DISCLAIMS ALL SUCH WARRANTIES, INCLUDING WITHOUT
	LIMITATION, ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
	PURPOSE, QUIET ENJOYMENT, OR NON-INFRINGEMENT. See the RPL for specific
	language governing rights and limitations under the RPL. 
*/

import * as sinon from 'sinon';

import { ComponentFrameworkMockGenerator } from '@shko-online/componentframework-mock/ComponentFramework-Mock-Generator';
import { PropertySetTableControl }  from '@powerapps-samples/property-set-table-control/PropertySetTableControl';
import { IInputs, IOutputs } from '@powerapps-samples/property-set-table-control/PropertySetTableControl/generated/ManifestTypes';
import * as resource from '@powerapps-samples/property-set-table-control/PropertySetTableControl/strings/PropertySetTableControl.1033.resx';
import { DataSetMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSet.mock';
import { EntityRecord } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/DataSetApi/EntityRecord.mock';

describe("PropertySetTableControl", () => {
	let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
	beforeEach(() => {
		const container = document.createElement('div');

		mockGenerator = new ComponentFrameworkMockGenerator(
			PropertySetTableControl,
			{
				sampleDataSet: DataSetMock
			},
			container);
		mockGenerator.SetControlResource(resource);
		const controlValue = mockGenerator.context.parameters
		.sampleDataSet as DataSetMock;
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
		document.body.appendChild(container);
	})

	afterEach(() => {
		document.body.innerHTML = null;
	})
	it("Init should work", () => {
		mockGenerator.ExecuteInit();
		sinon.assert.calledOnce(mockGenerator.control.init);
		expect(document.body).toMatchSnapshot();
	})
	it("Update View should Work", () => {    
        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        sinon.assert.calledOnce(mockGenerator.control.init);
        sinon.assert.calledOnce(mockGenerator.control.updateView);
        expect(document.body).toMatchSnapshot();
    })
	it("Button LoadPrev & LoadNext should work", () => {
        mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
      
        const buttons =mockGenerator.container.querySelectorAll('.Button_Style');
        buttons.forEach((button)=>{
        var evt = document.createEvent("Event");
		evt.initEvent("click", true, false);
		button.dispatchEvent(evt);

        mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot();
        })
	})
	it("Row click should work", () => {
        const controlValue =mockGenerator.context.parameters.sampleDataSet as DataSetMock;
		const row = new EntityRecord();
		row.id = {guid : "0023-2190139-12213-5646"}
		controlValue.records[row.id.guid]= row;
		controlValue.sortedRecordIds = [row.id.guid]
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();

		const select = mockGenerator.container.querySelector(`[rowRecId='${row.id.guid}']`);
			var evt = document.createEvent("Event");
			evt.initEvent("click", true, false);
			select.dispatchEvent(evt);
	
			mockGenerator.ExecuteUpdateView();
			expect(document.body).toMatchSnapshot(); 
	})
	it("Get output should work", () => {
        mockGenerator.control.getOutputs();
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot(); 
	})
	it("Destroy should work", () => {
        mockGenerator.control.destroy();
		mockGenerator.ExecuteInit();
		mockGenerator.ExecuteUpdateView();
		expect(document.body).toMatchSnapshot(); 
	})
	it("toggle load more button if it has next page", () => {
        const controlValue = mockGenerator.context.parameters
          .sampleDataSet as DataSetMock;
        controlValue.paging.hasNextPage = true;
        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        expect(document.body).toMatchSnapshot();
      });
	  it("toggle load more button if it has previous page", () => {
        const controlValue = mockGenerator.context.parameters
          .sampleDataSet as DataSetMock;
        controlValue.paging.hasPreviousPage = true;
        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        expect(document.body).toMatchSnapshot();
      });
	  it("Get colums", () => {
        const controlValue = mockGenerator.context.parameters
          .sampleDataSet as DataSetMock;
        controlValue.columns= [];
        mockGenerator.ExecuteInit();
        mockGenerator.ExecuteUpdateView();
        expect(document.body).toMatchSnapshot();
      });
})