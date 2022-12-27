import React, {
  Ref,
  useState,
  forwardRef,
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import cn from "classnames";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Size, { SizeValue } from "../Size";
import CheckIcon from "../icons/CheckIcon";
import MinusIcon from "../icons/MinusIcon";
import isRenderableNode from "../utils/isRenderableNode";
import { useUpdate } from "@lilib/hooks";

export interface CheckboxProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  loading?: boolean;
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
    disabled,
    indeterminate,
    checked: checkedProp,
    defaultChecked,
    onChange,
    inputRef,
    inputProps,
    ...rest
  } = props;

  const prefix = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);
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

  const classes = cn(
    `${prefix}checkbox`,
    {
      [`${prefix}${size}`]: size,
      [`${prefix}loading`]: loading,
      [`${prefix}checked`]: checked,
      [`${prefix}disabled`]: disabled,
    },
    className
  );

  useUpdate(() => {
    if (isControlled) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp]);

  return (
    <label {...rest} ref={ref} className={classes}>
      <Spinner spinning={loading} className={`${prefix}checkbox-indicator`}>
        <input
          {...inputProps}
          ref={inputRef}
          type="checkbox"
          checked={checked}
          disabled={disabled || loading}
          onChange={handleChange}
          className={cn(`${prefix}checkbox-base`, inputProps?.className)}
        />
        {checked && (
          <span className={`${prefix}checkbox-icon`}>
            {indeterminate ? (
              <MinusIcon strokeWidth="8" />
            ) : (
              <CheckIcon strokeWidth="8" />
            )}
          </span>
        )}
      </Spinner>
      {isRenderableNode(children) && (
        <span className={`${prefix}checkbox-label`}>{children}</span>
      )}
    </label>
  );
});

export default Checkbox;
