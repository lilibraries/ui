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
import isRenderableNode from "../utils/isRenderableNode";

export interface SwitchProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  icon?: ReactNode;
  checkedLabel?: ReactNode;
  uncheckedLabel?: ReactNode;
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

const Switch = forwardRef<HTMLLabelElement, SwitchProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    icon: iconProp,
    checkedLabel,
    uncheckedLabel,
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

  let icon: ReactNode;
  if (isRenderableNode(iconProp)) {
    icon = iconProp;
  } else {
    icon = children;
  }

  const isControlled = "checked" in props;
  const [checked, setChecked] = useState(!!checkedProp || !!defaultChecked);

  useUpdate(() => {
    if (isControlled) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp]);

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

  const classes = cn(
    `${cls}switch`,
    {
      [`${cls}${size}`]: size,
      [`${cls}checked`]: checked,
      [`${cls}loading`]: loading,
      [`${cls}disabled`]: disabled,
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
        className={cn(`${cls}switch-input`, inputProps?.className)}
      />
      <span className={`${cls}switch-track`}>
        {isRenderableNode(checkedLabel) && (
          <span className={`${cls}switch-checked-label`}>{checkedLabel}</span>
        )}
        {isRenderableNode(uncheckedLabel) && (
          <span className={`${cls}switch-unchecked-label`}>
            {uncheckedLabel}
          </span>
        )}
        <span className={`${cls}switch-slider`}>
          <Spinner
            contained
            spinning={loading}
            icon={loadingIcon}
            delay={loadingDelay}
          >
            {icon}
          </Spinner>
        </span>
      </span>
    </label>
  );
});

export default Switch;
