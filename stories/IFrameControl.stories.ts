import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
  DecimalNumberPropertyMock,
} from "@shko.online/componentframework-mock";
import { IFrameControl } from "@powerapps-samples/i-frame-control/IFrameControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/i-frame-control/IFrameControl/generated/ManifestTypes";
import "@powerapps-samples/i-frame-control/IFrameControl/css/IFrameControl.css";

export default {
  title: "PCF Components/IFrameControl",

  argTypes: {
    stringProperty: { type: "string" },
    latitudeValue: { type: "number" },
    longitudeValue: { type: "number" },
  },
  parameters: {
    controls: {
      include: ["latitudeValue", "longitudeValue"],
      layout: "fullscreen",
    },
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.IFrameControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      IFrameControl,
      {
        stringProperty: StringPropertyMock,
        latitudeValue: DecimalNumberPropertyMock,
        longitudeValue: DecimalNumberPropertyMock,
      },
      container
    );
  // const latitudeValue = mockGenerator.context.parameters.latitudeValue as DecimalNumberPropertyMock;
  // latitudeValue.setValue(args.latitudeValue);
  mockGenerator.metadata.initCanvasItems([
    {
      latitudeValue: args.latitudeValue,
    },
  ]);
  // const longtitudeValue = mockGenerator.context.parameters.longitudeValue as DecimalNumberPropertyMock;
  // longtitudeValue.setValue(args.longitudeValue);
  mockGenerator.metadata.initCanvasItems([
    {
      longtitudeValue: args.longtitudeValue,
    },
  ]);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};

export const Primary = Template.bind({});
Primary.args = {
  latitudeValue: 41.341985,
  longitudeValue: 19.775859,
};

export const Secondary = Template.bind({});
Secondary.args = {
  latitudeValue: 45.153332,
  longitudeValue: 25.168331,
};
