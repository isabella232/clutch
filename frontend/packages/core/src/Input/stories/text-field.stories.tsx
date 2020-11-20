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
  label: "My Label",
  placeholder: "This is a placeholder, start typing",
}

// export const WithPlaceholder = Template.bind({});
// WithPlaceholder.args = {
//   ...Basic.args,
// };

export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  disabled: true
};

export const Error = Template.bind({});
Error.args = {
  ...Basic.args,
  error: true,
  helperText: "There was a problem!"
}

