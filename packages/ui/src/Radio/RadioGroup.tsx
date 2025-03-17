import React, { FC, ReactNode, ChangeEvent, ChangeEventHandler, useState } from "react";
import { usePersist, useUpdate } from "@lilib/hooks";
import Size, { SizeValue } from "../Size";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import RadioConfig, { RadioElement } from "./RadioConfig";

export interface RadioGroupProps {
  children?: ReactNode;
  size?: SizeValue;
  name?: string;
  value?: any;
  defaultValue?: any;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  onChange?: ChangeEventHandler<RadioElement>;
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    children,
    size: sizeProp,
    name,
    value: valueProp,
    defaultValue,
    disabled,
    loading,
    loadingIcon,
    loadingDelay,
    onChange,
  } = props;

  const controlled = "value" in props;
  const size = Size.useConfig(sizeProp);
  const [value, setValue] = useState<any>(controlled ? valueProp : defaultValue);

  useUpdate(() => {
    if (controlled) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const handleChange = usePersist((event: ChangeEvent<RadioElement>) => {
    if (!controlled) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event);
    }
  });

  return (
    <Size value={size}>
      <RadioConfig
        name={name}
        value={value}
        loading={loading}
        disabled={disabled}
        controlled={true}
        onChange={handleChange}
      >
        <SpinnerConfig icon={loadingIcon} delay={loadingDelay}>
          {children}
        </SpinnerConfig>
      </RadioConfig>
    </Size>
  );
};

export default RadioGroup;
