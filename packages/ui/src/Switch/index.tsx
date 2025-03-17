import React, {
  Ref,
  ReactNode,
  forwardRef,
  ChangeEvent,
  ChangeEventHandler,
  LabelHTMLAttributes,
  InputHTMLAttributes,
} from "react";
import cn from "classnames";
import { usePersist, useUpdate, useSafeState } from "@lilib/hooks";
import Prefix from "../Prefix";
import Spinner from "../Spinner";
import Size, { SizeValue } from "../Size";
import isRenderable from "../utils/isRenderable";

export interface SwitchProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  size?: SizeValue;
  icon?: ReactNode;
  checkedLabel?: ReactNode;
  uncheckedLabel?: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: ReactNode;
  loadingDelay?: number;
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
    checked: checkedProp,
    defaultChecked,
    disabled,
    loading,
    loadingIcon,
    loadingDelay,
    onChange,
    inputRef,
    inputProps,
    ...rest
  } = props;

  const { cls } = Prefix.useConfig();
  const size = Size.useConfig(sizeProp);

  let icon: ReactNode;
  if (isRenderable(iconProp)) {
    icon = iconProp;
  } else {
    icon = children;
  }

  const controlled = "checked" in props;
  const [checked, setChecked] = useSafeState(controlled ? !!checkedProp : !!defaultChecked);

  useUpdate(() => {
    if (controlled) {
      setChecked(!!checkedProp);
    }
  }, [checkedProp]);

  const handleChange = usePersist((event: ChangeEvent<HTMLInputElement>) => {
    if (!controlled) {
      setChecked(event.target.checked);
    }
    onChange?.(event);
  });

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
        {isRenderable(checkedLabel) && <span className={`${cls}switch-checked-label`}>{checkedLabel}</span>}
        {isRenderable(uncheckedLabel) && <span className={`${cls}switch-unchecked-label`}>{uncheckedLabel}</span>}
        <span className={`${cls}switch-slider`}>
          <Spinner contented spinning={loading} icon={loadingIcon} delay={loadingDelay}>
            {icon}
          </Spinner>
        </span>
      </span>
    </label>
  );
});

export default Switch;
