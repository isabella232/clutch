import * as React from "react";
import type { Meta } from "@storybook/react";

import type { TextFieldProps } from "../text-field";
import TextField from "../text-field";

export default {
  title: "Core/Input/TextField",
  component: TextField,
} as Meta;

const Template = (props: TextFieldProps) => <TextField {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Field Label"
}

export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true
}

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Basic.args,
  placeholder: "This is a placeholder, start typing for input...",
};
