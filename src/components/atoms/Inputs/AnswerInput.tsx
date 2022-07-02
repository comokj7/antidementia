import React from 'react';
import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@material-ui/core';

const StyledInput = styled(TextField)`
  width: auto;
`;

export const AnswerInput: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledInput type="number" variant="outlined" {...props} />
  );
}
