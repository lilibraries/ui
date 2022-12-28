import React, { FC, ReactNode } from "react";

export interface RootProps {
  children?: ReactNode;
}

const Root: FC = ({ children }) => {
  return <>{children}</>;
};

export default Root;
