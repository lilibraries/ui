import createConfig from "../_utils/createConfig";

export type SizeValue = null | "small" | "large";
export interface SizeProps {
  value?: SizeValue;
}

const Size = createConfig<SizeValue, SizeProps>("value", null);

export default Size;
