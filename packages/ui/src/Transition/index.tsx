import { Children, ForwardRefExoticComponent, ReactElement, cloneElement, forwardRef, useEffect, useRef } from "react";
import cn from "classnames";
import warning from "warning";
import isNumber from "lodash/isNumber";
import isObject from "lodash/isObject";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import { composeRefs } from "@lilib/utils";
import { useMount, useSafeState, useTimeout, useUpdate } from "@lilib/hooks";
import Prefix from "../Prefix";
import isPositiveNumber from "../utils/isPositiveNumber";

const ENTER = "enter";
const ENTERING = "entering";
const ENTERED = "entered";
const EXIT = "exit";
const EXITING = "exiting";
const EXITED = "exited";
const STATES = [ENTER, ENTERING, ENTERED, EXIT, EXITING, EXITED] as const;

export type TransitionState =
  | typeof ENTER
  | typeof ENTERING
  | typeof ENTERED
  | typeof EXIT
  | typeof EXITING
  | typeof EXITED;

export interface TransitionDurations {
  [ENTERING]: number;
  [EXITING]: number;
}

export interface TransitionClasses {
  [ENTER]?: string | boolean;
  [ENTERING]?: string | boolean;
  [ENTERED]?: string | boolean;
  [EXIT]?: string | boolean;
  [EXITING]?: string | boolean;
  [EXITED]?: string | boolean;
}

export interface TransitionProps {
  children: ReactElement | ((state: TransitionState) => ReactElement);
  durations: number | TransitionDurations;
  classes?: boolean | string | TransitionClasses;
  in?: boolean;
  enterDelay?: number;
  exitDelay?: number;
  firstMount?: boolean;
  firstAppear?: boolean;
  keepMounted?: boolean;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
}

export interface TransitionComponent extends ForwardRefExoticComponent<TransitionProps> {
  ENTER: typeof ENTER;
  ENTERING: typeof ENTERING;
  ENTERED: typeof ENTERED;
  EXIT: typeof EXIT;
  EXITING: typeof EXITING;
  EXITED: typeof EXITED;
}

const Transition = forwardRef<any, TransitionProps>((props, ref) => {
  const {
    children,
    durations,
    classes,
    in: inProp,
    enterDelay,
    exitDelay,
    firstMount,
    firstAppear,
    keepMounted,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    ...rest
  } = props;

  const delayOnEnter = isPositiveNumber(enterDelay);
  const delayOnExit = isPositiveNumber(exitDelay);
  const enteringDuration = isNumber(durations) ? durations : durations[ENTERING];
  const exitingDuration = isNumber(durations) ? durations : durations[EXITING];

  warning(
    isNumber(enteringDuration) && enteringDuration > 0 && isNumber(exitingDuration) && exitingDuration > 0,
    "The `durations` prop of Transition component must be a positive number or an object contains entering and exiting durations whose are positive numbers."
  );

  const { cls } = Prefix.useConfig();
  const domRef = useRef<HTMLElement>();
  const enteredRef = useRef(false);
  const renderedRef = useRef(false);

  const [state, setState] = useSafeState<TransitionState>(() => {
    if (inProp) {
      if (firstAppear) {
        if (delayOnEnter) {
          return EXITED;
        } else {
          return ENTER;
        }
      } else {
        return ENTERED;
      }
    } else {
      return EXITED;
    }
  });

  const classesMapping: {
    [key in TransitionState]?: string;
  } = {};

  if (classes) {
    STATES.forEach((state) => {
      if (classes === true) {
        classesMapping[state] = `${cls}transition-${state}`;
      } else if (isString(classes)) {
        classesMapping[state] = `${classes}-${state}`;
      } else if (isObject(classes)) {
        if (isString(classes[state])) {
          classesMapping[state] = classes[state];
        } else if (classes[state]) {
          classesMapping[state] = `${cls}transition-${state}`;
        }
      }
    });
  }

  function changeState(state: TransitionState) {
    if (domRef.current) {
      if (state === ENTERING || state === EXITING) {
        domRef.current && domRef.current.offsetWidth; // eslint-disable-line
      }
    }
    setState(state);

    switch (state) {
      case ENTER:
        onEnter?.();
        break;
      case ENTERING:
        onEntering?.();
        break;
      case ENTERED:
        onEntered?.();
        break;
      case EXIT:
        onExit?.();
        break;
      case EXITING:
        onExiting?.();
        break;
      case EXITED:
        onExited?.();
        break;
      default:
        break;
    }
  }

  const [startEnterTimer, cancelEnterTimer] = useTimeout(() => {
    changeState(ENTER);
  }, enterDelay);

  const [startExitTimer, cancelExitTimer] = useTimeout(() => {
    changeState(EXIT);
  }, exitDelay);

  const [startEnteredTimer, cancelEnteredTimer] = useTimeout(() => {
    if (state === ENTER || state === ENTERING) {
      changeState(ENTERED);
    }
  }, enteringDuration);

  const [startExitedTimer, cancelExitedTimer] = useTimeout(() => {
    if (state === EXIT || state === EXITING) {
      changeState(EXITED);
    }
  }, exitingDuration);

  useMount(() => {
    if (inProp && firstAppear && delayOnEnter) {
      startEnterTimer();
    } else if (state === ENTER) {
      changeState(ENTERING);
    }
  });

  useUpdate(() => {
    cancelEnterTimer();
    cancelExitTimer();

    if (inProp) {
      if (state !== ENTER && state !== ENTERING && state !== ENTERED) {
        cancelExitedTimer();
        if (delayOnEnter) {
          startEnterTimer();
        } else {
          changeState(ENTER);
        }
      }
    } else {
      if (state !== EXIT && state !== EXITING && state !== EXITED) {
        cancelEnteredTimer();
        if (delayOnExit) {
          startExitTimer();
        } else {
          changeState(EXIT);
        }
      }
    }
  }, [!!inProp]);

  useUpdate(() => {
    cancelEnterTimer();
    cancelExitTimer();
    cancelEnteredTimer();
    cancelExitedTimer();

    if (state === ENTER) {
      changeState(ENTERING);
    } else if (state === EXIT) {
      changeState(EXITING);
    } else if (state === ENTERING) {
      startEnteredTimer();
    } else if (state === EXITING) {
      startExitedTimer();
    }
  }, [state]);

  useEffect(
    () => {
      if (state !== EXITED) {
        enteredRef.current = true;
        renderedRef.current = true;
      } else {
        if (!keepMounted) {
          enteredRef.current = false;
        }
      }
    },
    [state] // eslint-disable-line
  );

  let renderable = false;
  if (state !== EXITED) {
    renderable = true;
  } else if (firstMount && !renderedRef.current) {
    renderable = true;
  } else if (keepMounted && enteredRef.current) {
    renderable = true;
  }

  if (!renderable) {
    return null;
  }

  const element = isFunction(children) ? children(state) : children;

  return cloneElement(Children.only(element), {
    ...rest,
    ref: composeRefs((element as any).ref, domRef, ref),
    className: cn(element.props.className, classesMapping[state]),
  });
}) as TransitionComponent;

Transition.ENTER = ENTER;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXIT = EXIT;
Transition.EXITING = EXITING;
Transition.EXITED = EXITED;

export default Transition;
