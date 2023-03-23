import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTimeout } from "@lilib/hooks";
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

  const [updateValue] = useTimeout(() => {
    if (valueNodeRef.current) {
      const value = String(
        window.getComputedStyle(valueNodeRef.current!)[valueName]
      );
      setValue(transform ? transform(value) : value);
    }
  }, 1);

  useEffect(
    () => {
      updateValue();
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
