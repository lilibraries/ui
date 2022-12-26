import React, {
  Ref,
  useState,
  ReactNode,
  forwardRef,
  ChangeEvent,
  ChangeEventHandler,
  LabelHTMLAttributes,
  InputHTMLAttributes,
} from "react";
import cn from "classnames";
import { useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Size, { SizeValue } from "../Size";
import isRenderableNode from "../_utils/isRenderableNode";

export interface SwitchProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  icon?: ReactNode;
  checkedLabel?: ReactNode;
  uncheckedLabel?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    icon: iconProp,
    checkedLabel,
    uncheckedLabel,
    loading,
    disabled,
    checked: checkedProp,
    defaultChecked,
    onChange,
    inputRef,
    inputProps,
    ...rest
  } = props;

  const prefix = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  let icon: ReactNode;
  if (isRenderableNode(iconProp)) {
    icon = iconProp;
  } else {
    icon = children;
  }

  const isControlled = "checked" in props;
  const [checked, setChecked] = useState(!!checkedProp || !!defaultChecked);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (disabled || loading) {
      return;
    }
    if (!isControlled) {
      setChecked(event.target.checked);
    }
    if (onChange) {
      onChange(event);
    }
  }

  useUpdate(() => {
    if (isControlled) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp]);

  const classes = cn(
    `${prefix}switch`,
    {
      [`${prefix}${size}`]: size,
      [`${prefix}checked`]: checked,
      [`${prefix}loading`]: loading,
      [`${prefix}disabled`]: disabled,
    },
    className
  );

  return (
    <label {...rest} ref={ref} className={classes}>
      <input
        {...inputProps}
        ref={inputRef}
        type="checkbox"
        checked={checked}
        disabled={disabled || loading}
        onChange={handleChange}
        className={cn(`${prefix}switch-base`, inputProps?.className)}
      />
      {isRenderableNode(checkedLabel) && (
        <span className={`${prefix}switch-checked-label`}>{checkedLabel}</span>
      )}
      {isRenderableNode(uncheckedLabel) && (
        <span className={`${prefix}switch-unchecked-label`}>
          {uncheckedLabel}
        </span>
      )}
      <span className={`${prefix}switch-slider`}>
        <Spinner contained spinning={loading}>
          {icon}
        </Spinner>
      </span>
    </label>
  );
});

export default Switch;
