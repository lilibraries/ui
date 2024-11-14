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
import Size, { SizeValue } from "../Size";
import CheckIcon from "../icons/CheckIcon";
import MinusIcon from "../icons/MinusIcon";
import isRenderable from "../utils/isRenderable";

export interface CheckboxProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>((props, ref) => {
  const {
    children,
    className,
    size: sizeProp,
    loading,
    loadingIcon,
    loadingDelay,
    disabled,
    indeterminate,
    checked: checkedProp,
    defaultChecked,
    onChange,
    inputRef,
    inputProps,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  const controlled = "checked" in props;
  const [checked, setChecked] = useState(controlled ? !!checkedProp : !!defaultChecked);

  useUpdate(() => {
    if (controlled) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp]);

  const handleChange = usePersist((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled || loading) {
      return;
    }
    if (!controlled) {
      setChecked(event.target.checked);
    }
    if (onChange) {
      onChange(event);
    }
  });

  const classes = cn(
    `${cls}checkbox`,
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
        {...inputProps}
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
              {indeterminate ? <MinusIcon strokeWidth="8" /> : <CheckIcon strokeWidth="8" />}
            </span>
          )}
        </span>
      </Spinner>
      {isRenderable(children) && <span className={`${cls}checkbox-label`}>{children}</span>}
    </label>
  );
});

export default Checkbox;
