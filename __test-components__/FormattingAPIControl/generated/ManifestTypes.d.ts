/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
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
