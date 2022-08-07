import React, {
  Ref,
  forwardRef,
  ChangeEvent,
  ChangeEventHandler,
  InputHTMLAttributes,
  LabelHTMLAttributes,
} from "react";
import cn from "classnames";
import { isFunction, useControllableState } from "@lilib/hooks";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Size, { SizeValue } from "../Size";
import CheckIcon from "../_icons/CheckIcon";
import MinusIcon from "../_icons/MinusIcon";
import isRenderableNode from "../_utils/isRenderableNode";

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

  const [checked, setChecked] = useControllableState(
    defaultChecked,
    checkedProp
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (disabled || loading) {
      return;
    }
    setChecked(event.target.checked);
    if (isFunction(onChange)) {
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
