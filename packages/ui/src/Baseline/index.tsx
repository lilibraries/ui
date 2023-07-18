import React, { FC, ReactNode } from "react";

export interface BaselineProps {
  children?: ReactNode;
}

const Baseline: FC<BaselineProps> = ({ children }) => {
  return <>{children}</>;
};

export default Baseline;
