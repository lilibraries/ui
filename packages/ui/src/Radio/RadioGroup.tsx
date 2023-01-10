import React, {
  FC,
  useState,
  ReactNode,
  ChangeEvent,
  ChangeEventHandler,
} from "react";
import { usePersist, useUpdate } from "@lilib/hooks";
import RadioConfig from "./RadioConfig";
import SpinnerConfig from "../Spinner/SpinnerConfig";

export interface RadioGroupProps {
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
    <RadioConfig
      name={name}
      value={value}
      loading={loading}
      disabled={disabled}
      controlled={isControlled}
      onChange={handleChange}
    >
      <SpinnerConfig icon={loadingIcon} delay={loadingDelay}>
        {children}
      </SpinnerConfig>
    </RadioConfig>
  );
};

export default RadioGroup;
