import React, {
  Ref,
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
import { warning } from "@lilib/utils";
import { usePersist, useUpdate, useSafeState } from "@lilib/hooks";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import DotIcon from "../icons/DotIcon";
import isRenderableNode from "../utils/isRenderableNode";
import RadioGroup from "./RadioGroup";
import RadioConfig, { RadioElement } from "./RadioConfig";

export * from "./RadioGroup";
export * from "./RadioConfig";

export interface RadioProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  disabled?: boolean;
  value?: any;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<RadioElement>;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export interface RadioComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<RadioProps> & RefAttributes<HTMLLabelElement>
  > {
  Group: typeof RadioGroup;
}

const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    children,
    className,
    value,
    size: sizeProp,
    loading: loadingProp,
    loadingIcon: loadingIconProp,
    loadingDelay: loadingDelayProp,
    disabled: disabledProp,
    checked: checkedProp,
    defaultChecked,
    onChange,
    inputRef,
    inputProps,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
  const isRTL = Direction.useConfig() === "rtl";

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

  if (process.env.NODE_ENV !== "production") {
    warning(
      !!groupControlled && value === undefined,
      "You should set a non-undefined value for Radio under Radio.Group.",
      { scope: "Radio" }
    );
  }

  const isValueControlled = groupControlled && value !== undefined;
  const isCheckedControlled = checkedProp != null;

  const [checked, setChecked] = useSafeState(() => {
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
    if (onChange) {
      onChange(radioEvent);
    }
    if (onGroupChange) {
      onGroupChange(radioEvent);
    }
  });

  const classes = cn(
    `${cls}radio`,
    {
      [`${cls}rtl`]: isRTL,
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
        {...inputProps}
        ref={inputRef}
        type="radio"
        name={name}
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
      {isRenderableNode(children) && (
        <span className={`${cls}radio-label`}>{children}</span>
      )}
    </label>
  );
}) as RadioComponent;

Radio.Group = RadioGroup;

export default Radio;
