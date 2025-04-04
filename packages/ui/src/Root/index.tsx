import { FC, ReactNode } from "react";

export interface RootProps {
  children?: ReactNode;
}

const Root: FC<RootProps> = ({ children }) => {
  return children;
};

export default Root;
