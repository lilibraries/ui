import React, {
  Ref,
  useState,
  ReactNode,
  forwardRef,
  ChangeEvent,
  RefAttributes,
  PropsWithoutRef,
  ChangeEventHandler,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ForwardRefExoticComponent,
} from "react";
import cn from "classnames";
import warning from "warning";
import { usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Size, { SizeValue } from "../Size";
import DotIcon from "../icons/DotIcon";
import isRenderable from "../utils/isRenderable";
import RadioGroup from "./RadioGroup";
import RadioConfig, { RadioElement } from "./RadioConfig";

export * from "./RadioGroup";
export * from "./RadioConfig";

export interface RadioProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  onChange?: ChangeEventHandler<RadioElement>;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export interface RadioComponent
  extends ForwardRefExoticComponent<PropsWithoutRef<RadioProps> & RefAttributes<HTMLLabelElement>> {
  Group: typeof RadioGroup;
}

const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    value,
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    loading: loadingProp,
    loadingIcon: loadingIconProp,
    loadingDelay: loadingDelayProp,
    onChange,
    inputRef,
    inputProps,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  const { icon: loadingIcon, delay: loadingDelay } = Spinner.Config.useConfig({
    icon: loadingIconProp,
    delay: loadingDelayProp,
  });

  const {
    name,
    value: groupValue,
    loading,
    disabled,
    controlled: groupControlled,
    onChange: onGroupChange,
  } = RadioConfig.useConfig({
    loading: loadingProp,
    disabled: disabledProp,
  });

  warning(!groupControlled || value !== undefined, "You should set a non-undefined value for Radio in Radio.Group.");

  const isValueControlled = groupControlled && value !== undefined;
  const isCheckedControlled = "checked" in props;

  const [checked, setChecked] = useState(() => {
    if (isValueControlled) {
      return groupValue === value;
    } else if (isCheckedControlled) {
      return !!checkedProp;
    } else {
      return !!defaultChecked;
    }
  });

  useUpdate(() => {
    if (isValueControlled) {
      setChecked(groupValue === value);
    } else if (isCheckedControlled) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp, groupValue, value]);

  const handleChange = usePersist((event: ChangeEvent<HTMLInputElement>) => {
    if (!isValueControlled && !isCheckedControlled) {
      setChecked(event.target.checked);
    }
    const radioEvent: ChangeEvent<RadioElement> = {
      ...event,
      target: { ...event.target, value },
    };
    onChange?.(radioEvent);
    onGroupChange?.(radioEvent);
  });

  const classes = cn(
    `${cls}radio`,
    {
      [`${cls}${size}`]: size,
      [`${cls}loading`]: loading,
      [`${cls}checked`]: checked,
      [`${cls}disabled`]: disabled,
    },
    className
  );

  return (
    <label {...rest} ref={ref} className={classes}>
      <input
        name={name}
        {...inputProps}
        ref={inputRef}
        type="radio"
        value={String(value)}
        checked={checked}
        disabled={disabled || loading}
        onChange={handleChange}
        className={cn(`${cls}radio-input`, inputProps?.className)}
      />
      <Spinner spinning={loading} icon={loadingIcon} delay={loadingDelay}>
        <span className={`${cls}radio-indicator`}>
          {checked && (
            <span className={`${cls}radio-icon`}>
              <DotIcon />
            </span>
          )}
        </span>
      </Spinner>
      {isRenderable(children) && <span className={`${cls}radio-label`}>{children}</span>}
    </label>
  );
}) as RadioComponent;

Radio.Group = RadioGroup;

export default Radio;
