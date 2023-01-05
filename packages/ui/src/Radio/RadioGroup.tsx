import React, { FC, useState, ChangeEvent, ChangeEventHandler } from "react";
import { useUpdate } from "@lilib/hooks";
import RadioConfig from "./RadioConfig";

export interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { name, value: valueProp, defaultValue, onChange, children } = props;

  const isControlled = "value" in props;
  const [value, setValue] = useState<string | undefined>(
    isControlled ? valueProp : defaultValue
  );

  useUpdate(() => {
    if (isControlled) {
      setValue(valueProp);
    }
  }, [valueProp]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!isControlled) {
      setValue(event.target.value);
    }
    if (onChange) {
      onChange(event);
    }
  }

  return (
    <RadioConfig name={name} value={value} onChange={handleChange}>
      {children}
    </RadioConfig>
  );
};

export default RadioGroup;
