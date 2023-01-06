import { ReactNode } from "react";
import createConfig from "../utils/createConfig";

export type SizeValue = null | "small" | "large";

export interface SizeProps {
  value: SizeValue;
  children: ReactNode;
}

const Size = createConfig<SizeValue, SizeProps>(null, "value");

export default Size;
