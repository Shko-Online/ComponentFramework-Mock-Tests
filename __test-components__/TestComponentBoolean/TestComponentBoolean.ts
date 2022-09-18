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

import { ReactElement, JSXElementConstructor } from "react";
import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class TestComponentBoolean implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private _value: boolean;
    updateView(context: ComponentFramework.Context<IInputs>): ReactElement<any, string | JSXElementConstructor<any>> {
        throw new Error("Method not implemented.");
    }
    init(context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged?: () => void,
        state?: ComponentFramework.Dictionary,
        container?: HTMLDivElement): void {
        this._value = context.parameters.turnedOn.raw;
        notifyOutputChanged();
    }
    destroy(): void {
        throw new Error("Method not implemented.");
    }
    getOutputs?(): IOutputs {
        return {
            turnedOn: this._value
        }
    }

}