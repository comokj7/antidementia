import React from "react";
import { Button, ButtonProps } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
}

export const TextButton: React.FC<Props & ButtonProps> = ({children, ...props}) => {
  return (
    <Button variant="outlined" size="large" {...props}>{children}</Button>
  );
}