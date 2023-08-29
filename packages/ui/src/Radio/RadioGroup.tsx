import React, { FC, ReactNode, ChangeEvent, ChangeEventHandler } from "react";
import { usePersist, useUpdate, useSafeState } from "@lilib/hooks";
import Size, { SizeValue } from "../Size";
import SpinnerConfig from "../Spinner/SpinnerConfig";
import RadioConfig, { RadioElement } from "./RadioConfig";

export interface RadioGroupProps {
  size?: SizeValue;
  name?: string;
  value?: any;
  defaultValue?: any;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  disabled?: boolean;
  onChange?: ChangeEventHandler<RadioElement>;
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    size: sizeProp,
    name,
    value: valueProp,
    defaultValue,
    loading,
    loadingIcon,
    loadingDelay,
    disabled,
    onChange,
    children,
  } = props;

  const controlled = valueProp !== undefined;
  const size = Size.useConfig(sizeProp);
  const [value, setValue] = useSafeState<any>(
    controlled ? valueProp : defaultValue
  );

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
