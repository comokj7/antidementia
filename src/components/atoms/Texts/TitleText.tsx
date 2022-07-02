import styled from "@emotion/styled";
import { Typography } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const StyledText = styled(Typography)`
  align: center;
  font-size: 100px;
`;

export const TitleText: React.FC<Props> = ({children}) => {
  return (
    <StyledText>{children}</StyledText>
  )
}