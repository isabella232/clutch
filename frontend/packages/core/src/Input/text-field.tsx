import * as React from "react";
import styled from "@emotion/styled";
import type { TextFieldProps as MuiTextFieldProps } from "@material-ui/core";
import { TextField as MuiTextField } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

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

    ".MuiInputLabel-root.Mui-disabled": {
      color: "rgba(13, 16, 48, 0.38)"
    },

    ".MuiInputLabel-root.Mui-error": {
      color: "#db3615"
    },

    ".MuiInput-input": {
      border: "1px solid rgba(13, 16, 48, 0.38)",
      borderRadius: "4px",
      fontSize: "16px",
      marginTop: "6px",
      padding: "14px 16px"
    },

    ".Mui-focused > .MuiInput-input": {
      borderColor: "#3548D4",
    },

    ".MuiInput-input.Mui-disabled": {
      backgroundColor: "rgba(13, 16, 48, 0.12)",
    },

    ".MuiFormHelperText-root": {
      verticalAlign: "middle",
      display: "flex",
      position: "relative",
      fontSize: "12px",
      marginTop: "6px"
    },

    ".MuiFormHelperText-root.Mui-error": {
      color: "#db3615"
    },

    ".Mui-error > .MuiInput-input": {
      borderColor: "#db3615"
    },

    ".MuiFormHelperText-root > svg": {
      height: "16px",
      width: "16px",
      marginRight: "5px"
    }
  }
);

export interface TextFieldProps extends Pick<MuiTextFieldProps, "defaultValue" | "disabled" | "error" | "helperText" | "id" | "inputRef" | "label" | "name" | "onChange" | "placeholder" | "required" | "value"> {
  onReturn?: () => void;
}

export const TextField = ({
  onChange,
  onReturn,
  error,
  helperText,
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

  if (error) {
    helperText = <>
      <ErrorIcon />
      {helperText}
    </>
  }

  return (
    <StyledTextField
      onKeyDown={e => onKeyDown(e)}
      onFocus={onChange}
      onBlur={onChange}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};

export default TextField;
