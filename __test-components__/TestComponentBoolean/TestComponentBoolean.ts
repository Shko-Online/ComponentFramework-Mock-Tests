/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { ReactElement, JSXElementConstructor } from "react";
import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class TestComponentBoolean implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private _value: boolean;
    init(context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged?: () => void,
        state?: ComponentFramework.Dictionary,
        container?: HTMLDivElement): void {
        this._value = context.parameters.turnedOn.raw;
        notifyOutputChanged();
    }
    updateView(context: ComponentFramework.Context<IInputs>): ReactElement<any, string | JSXElementConstructor<any>> {
        throw new Error("Method not implemented.");
    }
    getOutputs?(): IOutputs {
        return {
            turnedOn: this._value
        }
    }
    destroy(): void {
        throw new Error("Method not implemented.");
    }
}