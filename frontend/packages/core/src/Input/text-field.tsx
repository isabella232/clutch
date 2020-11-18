import React from "react";
import styled from "@emotion/styled";
import type { TextFieldProps as MuiTextFieldProps } from "@material-ui/core";
import { TextField as MuiTextField } from "@material-ui/core";

const KEY_ENTER = 13;

const StyledTextField = styled((props: MuiTextFieldProps) => <MuiTextField
  InputLabelProps={{ shrink: true }}
  InputProps={{ disableUnderline: true }}
  fullWidth
  {...props}
/>)(
  {
    ".MuiInputLabel-root": {
      fontSize: "13px",
      fontWeight: "bold",
      transform: "scale(1)"
    },

    ".MuiInputLabel-root, .MuiInputLabel-root.Mui-focused": {
      color: "rgba(13, 16, 48, 0.6)",
    },

    ".MuiInput-input": {
      border: "1px solid rgba(13, 16, 48, 0.38)",
      borderRadius: "4px",
      fontSize: "16px",
      marginTop: "6px",
      padding: "14px 16px"
    },
  }
);

export interface TextFieldProps extends Pick<MuiTextFieldProps, "defaultValue" | "disabled" | "id" | "inputRef" | "label" | "name" | "onChange" | "placeholder" | "required" | "value"> {
  onReturn?: () => void;
}

const TextField = ({
  onChange,
  onReturn,
  ...props
}: TextFieldProps) => {
  const onKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (onChange !== undefined) {
      onChange(e as React.ChangeEvent<any>);
    }
    if (e.keyCode === KEY_ENTER && onReturn) {
      onReturn();
    }
  };

  return (
    <StyledTextField
      onKeyDown={e => onKeyDown(e)}
      onFocus={onChange}
      onBlur={onChange}
      {...props}
    />
  );
};

export default TextField;
