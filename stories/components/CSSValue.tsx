import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDarkMode } from "storybook-dark-mode";
import Monospace from "./Monospace";

interface CSSValueProps extends HTMLAttributes<HTMLSpanElement> {
  valueName: keyof CSSStyleDeclaration;
  valueStyle?: CSSProperties;
  transform?: (value: string) => string;
}

const CSSValue = forwardRef<HTMLSpanElement, CSSValueProps>((props, ref) => {
  const { valueName, valueStyle, transform, ...rest } = props;
  const valueNodeRef = useRef<HTMLSpanElement>(null);
  const isDarkMode = useDarkMode();
  const [value, setValue] = useState("");

  useEffect(
    () => {
      const value = String(
        window.getComputedStyle(valueNodeRef.current!)[valueName]
      );
      setValue(transform ? transform(value) : value);
    },
    [isDarkMode, valueName] // eslint-disable-line
  );

  return (
    <span {...rest} ref={ref}>
      <Monospace>{value}</Monospace>
      <span ref={valueNodeRef} style={{ display: "none", ...valueStyle }} />
    </span>
  );
});

export default CSSValue;
