/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class TestComponentContainer
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private _value: string;
  private _container: HTMLDivElement;
  updateView(context: ComponentFramework.Context<IInputs>) {
    this._container.innerHTML = `${context.mode.allocatedHeight},${context.mode.allocatedWidth}`;
  }
  init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged?: () => void,
    state?: ComponentFramework.Dictionary,
    container?: HTMLDivElement
  ): void {
    this._container = container;
    this._value = context.parameters.controlValue.raw;
    this._container.innerHTML = `${context.mode.allocatedHeight},${context.mode.allocatedWidth}`;
    context.mode.trackContainerResize(true);
  }
  destroy(): void {}
  getOutputs?(): IOutputs {
    return {
      controlValue: this._value,
    };
  }
}
