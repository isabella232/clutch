import * as React from "react";
import styled from "@emotion/styled";
import _ from "lodash";

import { InputAdornment, MuiStandardTextFieldProps as MuiStandardTextFieldProps } from "@material-ui/core";
import { TextField as MuiTextField } from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';
import ClearIcon from '@material-ui/icons/Clear';

const KEY_ENTER = 13;

const BaseTextField = ({ InputProps, InputLabelProps, ...props }: MuiStandardTextFieldProps) =>
  <MuiTextField
    InputLabelProps={{ ...InputLabelProps, shrink: true }}
    InputProps={{ ...InputProps, disableUnderline: true }}
    fullWidth
    {...props}
  />

const StyledTextField = styled(BaseTextField)(
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

    ".MuiInputBase-root": {
      border: "1px solid rgba(13, 16, 48, 0.38)",
      borderRadius: "4px",
      fontSize: "16px",
      padding: "14px 16px",
    },

    "label + .MuiInput-formControl": {
      marginTop: "20px"
    },

    ".MuiInputBase-root.Mui-focused": {
      borderColor: "#3548d4",
    },

    ".MuiInputBase-root.Mui-disabled": {
      backgroundColor: "rgba(13, 16, 48, 0.12)",
    },

    ".MuiInput-input": {
      padding: "0"
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

    ".MuiInputBase-root.Mui-error": {
      borderColor: "#db3615"
    },

    ".MuiFormHelperText-root > svg": {
      height: "16px",
      width: "16px",
      marginRight: "5px"
    },

    ".MuiInputAdornment-root": {
      display: "none",
    },

    ".Mui-focused > .MuiInputAdornment-root": {
      display: "inherit",
    },


    ".MuiInputAdornment-root > svg": {
      cursor: "pointer",
    },
  }
);

export interface TextFieldProps extends Pick<MuiStandardTextFieldProps, "defaultValue" | "disabled" | "error" | "helperText" | "id" | "inputRef" | "label" | "name" | "onChange" | "placeholder" | "required" | "value"> {
  onReturn?: () => void;
}

export const TextField = ({
  onChange,
  onReturn,
  error,
  helperText,
  ...props
}: TextFieldProps) => {

  const [isEmpty, setIsEmpty] = React.useState(true);
  const nestedOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmpty(_.isEmpty(e.target.value));
    onChange && onChange(e);
  }

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
      onChange={nestedOnChange}
      error={error}
      helperText={helperText}
      InputProps={{ endAdornment: !isEmpty && <InputAdornment position="end"><ClearIcon onClick={() => console.log("ahhh")} /> </InputAdornment> }}
      {...props}
    />
  );
};

export default TextField;
