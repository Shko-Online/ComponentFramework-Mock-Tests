import { Story, Meta } from "@storybook/html";

import {
  ComponentFrameworkMockGenerator,
  StringPropertyMock,
} from "@shko.online/componentframework-mock";
import { ImageUploadControl } from "@powerapps-samples/image-upload-control/ImageUploadControl";
import {
  IInputs,
  IOutputs,
} from "@powerapps-samples/image-upload-control/ImageUploadControl/generated/ManifestTypes";
import resource from "@powerapps-samples/image-upload-control/ImageUploadControl/strings/ImageUploadControl.1033.resx";
import "@powerapps-samples/image-upload-control/ImageUploadControl/css/ImageUploadControl.css";

export default {
  title: "PCF Components/ImageUploadControl",

  argTypes: {
    value: { type: "string" },
  },
  parameters: {
    controls: {
      include: ["value"],
      layout: "fullscreen",
    },
  },
} as Meta;

const Template = (args) => {
  const container = document.createElement("div");
  container.className = "SampleNamespace.ImageUploadControl";
  const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> =
    new ComponentFrameworkMockGenerator(
      ImageUploadControl,
      {
        value: StringPropertyMock,
      },
      container
    );

  mockGenerator.metadata.initCanvasItems([
    {
      value: args.value,
    },
  ]);
  container.style.width = "200px";
  container.style.height = "200px";
  mockGenerator.SetControlResource(resource);
  mockGenerator.ExecuteInit();
  mockGenerator.ExecuteUpdateView();
  return container;
};
export const Primary = Template.bind({});
Primary.args = {
  value:
    "https://cdn1.iconfinder.com/data/icons/ui-colored-3-of-3/100/UI_3__2-512.png",
};
