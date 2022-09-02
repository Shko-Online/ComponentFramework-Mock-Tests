/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    currencyInput: ComponentFramework.PropertyTypes.NumberProperty;
    dateInput: ComponentFramework.PropertyTypes.DateTimeProperty;
    decimalInput: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    integerInput: ComponentFramework.PropertyTypes.WholeNumberProperty;
}
export interface IOutputs {
    currencyInput?: number;
    dateInput?: Date;
    decimalInput?: number;
    integerInput?: number;
}
