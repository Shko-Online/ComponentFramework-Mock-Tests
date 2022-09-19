import { Story, Meta } from '@storybook/html';

import { ComponentFrameworkMockGenerator } from "@shko-online/componentframework-mock/ComponentFramework-Mock-Generator";
import { TableControl }  from '@powerapps-samples/table-control/TableControl';
import { IInputs, IOutputs } from '@powerapps-samples/table-control/TableControl/generated/ManifestTypes';
import { StringPropertyMock } from '@shko-online/componentframework-mock/ComponentFramework-Mock/PropertyTypes/StringProperty.mock';


export default {
    title: "PCF Components/TableControl",
    parameters: {
        layout: 'fullscreen',
    },
    argTypes:{
        onEntityName: { action: 'onEntityName' },
        onEntityType: { action: 'onEntityType' },
        onCreateEntity: { action: 'onCreateEntity' },
    },
    decorators: [
        (Story, context)=>{
            return Story(context.args);
        }
    ]
} as Meta;

const Template = (args) =>{
    const container = document.createElement("div");
    const mockGenerator: ComponentFrameworkMockGenerator<IInputs,IOutputs> = new ComponentFrameworkMockGenerator(
        TableControl,
        {
            stringProperty: StringPropertyMock,
        },
        container
    );
    mockGenerator.context.utils.getEntityMetadata.callsFake((entity)=>{
		return new	Promise<ComponentFramework.PropertyHelper.EntityMetadata>(resolve=>{
			resolve({
				data:  [
					{
						entityName: 'account'
					}
				]
			})
		})
		})
		mockGenerator.context.utils.lookupObjects.callsFake((lookupOptions: ComponentFramework.UtilityApi.LookupOptions) => {
            return new Promise<ComponentFramework.LookupValue[]>((resolve) => {
                resolve([{
                    entityType: lookupOptions.entityTypes ? lookupOptions.entityTypes[0] : 'account',
                    id: "00000000-0000-0000-0000-000000000004",
                    name: "Account",
                }])
            });
        })
    mockGenerator.ExecuteInit();
    mockGenerator.ExecuteUpdateView();
    return container;
}
export const Primary = Template.bind({});