import React, {
  Ref,
  useState,
  ReactNode,
  forwardRef,
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import cn from "classnames";
import { usePersist, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Direction from "../Direction";
import Size, { SizeValue } from "../Size";
import DotIcon from "../icons/DotIcon";
import isRenderableNode from "../utils/isRenderableNode";
import RadioConfig from "./RadioConfig";

export interface RadioProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  name?: string;
  value?: string;
  size?: SizeValue;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Radio = forwardRef<HTMLLabelElement, RadioProps>((props, ref) => {
  const {
    children,
    className,
    name: nameProp,
    value,
    size: sizeProp,
    loading,
    loadingIcon,
    loadingDelay,
    disabled,
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

  const {
    name,
    value: configValue,
    onChange: onConfigChange,
  } = RadioConfig.useConfig({
    name: nameProp,
  });

  const [checked, setChecked] = useState(
    configValue !== undefined && value !== undefined
      ? configValue === value
      : "checked" in props
      ? !!checkedProp
      : !!defaultChecked
  );

  useUpdate(() => {
    if (configValue !== undefined && value !== undefined) {
      setChecked(configValue === value);
    } else if (checkedProp != null) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp, configValue, value]);

  const handleChange = usePersist((event: ChangeEvent<HTMLInputElement>) => {
    if ((configValue == null || value == null) && checkedProp == null) {
      setChecked(event.target.checked);
    }
    if (onChange) {
      onChange(event);
    }
    if (onConfigChange) {
      onConfigChange(event);
    }
  });

  const classes = cn(
    `${cls}checkbox`,
    {
      [`${cls}${size}`]: size,
      [`${cls}loading`]: loading,
      [`${cls}checked`]: checked,
      [`${cls}disabled`]: disabled,
      [`${cls}rtl`]: isRTL,
    },
    className
  );

  return (
    <label {...rest} ref={ref} className={classes}>
      <input
        {...inputProps}
        name={name}
        ref={inputRef}
        type="checkbox"
        checked={checked}
        disabled={disabled || loading}
        onChange={handleChange}
        className={cn(`${cls}checkbox-input`, inputProps?.className)}
      />
      <Spinner spinning={loading} icon={loadingIcon} delay={loadingDelay}>
        <span className={`${cls}checkbox-indicator`}>
          {checked && (
            <span className={`${cls}checkbox-icon`}>
              <DotIcon />
            </span>
          )}
        </span>
      </Spinner>
      {isRenderableNode(children) && (
        <span className={`${cls}checkbox-label`}>{children}</span>
      )}
    </label>
  );
});

export default Radio;