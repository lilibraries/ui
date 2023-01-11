import React, {
  FC,
  useState,
  ReactNode,
  ChangeEvent,
  ChangeEventHandler,
} from "react";
import { usePersist, useUpdate } from "@lilib/hooks";
import Size, { SizeValue } from "../Size";
import RadioConfig from "./RadioConfig";
import SpinnerConfig from "../Spinner/SpinnerConfig";

export interface RadioGroupProps {
  size?: SizeValue;
  name?: string;
  value?: string;
  defaultValue?: string;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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

  const isControlled = "value" in props;
  const size = Size.useConfig(sizeProp);
  const [value, setValue] = useState<string | undefined>(
    isControlled ? valueProp : defaultValue
  );

  useUpdate(() => {
    if (isControlled) {
      setValue(valueProp);
    }
  }, [valueProp]);

  const handleChange = usePersist((event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
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
