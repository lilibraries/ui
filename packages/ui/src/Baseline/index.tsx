import React, { FC, ReactNode } from "react";

export interface BaselineProps {
  children?: ReactNode;
}

const Baseline: FC = ({ children }) => {
  return <>{children}</>;
};

export default Baseline;
