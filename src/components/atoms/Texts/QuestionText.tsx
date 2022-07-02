import React from "react";
import { Typography } from "@material-ui/core";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const StyledText = styled(Typography)`
  font-size: 50px;
`;

export const QuestionText: React.FC<Props> = ({children}) => {
  return (
    <StyledText align="center">{children}</StyledText>
  )
}
