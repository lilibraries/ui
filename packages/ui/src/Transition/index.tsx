import {
  FC,
  useRef,
  useState,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import cn from "classnames";
import isObject from "lodash/isObject";
import isNumber from "lodash/isNumber";
import isString from "lodash/isString";
import isFunction from "lodash/isFunction";
import { composeRefs } from "@lilib/utils";
import { useMount, useUpdate, useTimeout } from "@lilib/hooks";
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
export interface TransitionClassNames {
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
  in?: boolean;
  enterDelay?: number;
  exitDelay?: number;
  appearOnEnter?: boolean;
  unmountOnExit?: boolean;
  classNames?: boolean | string | TransitionClassNames;
  onEnter?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
}

const Transition: FC<TransitionProps> & {
  ENTER: typeof ENTER;
  ENTERING: typeof ENTERING;
  ENTERED: typeof ENTERED;
  EXIT: typeof EXIT;
  EXITING: typeof EXITING;
  EXITED: typeof EXITED;
} = (props) => {
  const {
    children,
    durations,
    in: inProp,
    enterDelay,
    exitDelay,
    appearOnEnter,
    unmountOnExit,
    classNames,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
  } = props;

  const shouldDelayOnEnter = isPositiveNumber(enterDelay);
  const shouldDelayOnExit = isPositiveNumber(exitDelay);
  const enteringDuration = isNumber(durations)
    ? durations
    : durations[ENTERING];
  const exitingDuration = isNumber(durations) ? durations : durations[EXITING];

  const prefix = Prefix.useConfig();
  const domRef = useRef<HTMLElement>();

  const [state, setState] = useState<TransitionState>(() => {
    if (inProp) {
      if (appearOnEnter) {
        if (shouldDelayOnEnter) {
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

  const classNamesMapping: { [key in TransitionState]?: string } = {};
  if (classNames) {
    STATES.forEach((s) => {
      if (classNames === true) {
        classNamesMapping[s] = `${prefix}transition-${s}`;
      } else if (isString(classNames)) {
        classNamesMapping[s] = `${classNames}-${s}`;
      } else if (isObject(classNames)) {
        if (isString(classNames[s])) {
          classNamesMapping[s] = classNames[s] as string;
        } else if (classNames[s]) {
          classNamesMapping[s] = `${prefix}transition-${s}`;
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

    if (state === ENTER && isFunction(onEnter)) {
      onEnter();
    } else if (state === ENTERING && isFunction(onEntering)) {
      onEntering();
    } else if (state === ENTERED && isFunction(onEntered)) {
      onEntered();
    } else if (state === EXIT && isFunction(onExit)) {
      onExit();
    } else if (state === EXITING && isFunction(onExiting)) {
      onExiting();
    } else if (state === EXITED && isFunction(onExited)) {
      onExited();
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
    if (inProp && shouldDelayOnEnter && appearOnEnter) {
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
        if (shouldDelayOnEnter) {
          startEnterTimer();
        } else {
          changeState(ENTER);
        }
      }
    } else {
      if (state !== EXIT && state !== EXITING && state !== EXITED) {
        cancelEnteredTimer();
        if (shouldDelayOnExit) {
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

  if (state === EXITED && unmountOnExit) {
    return null;
  }

  const element: any = isFunction(children) ? children(state) : children;

  return cloneElement(Children.only(element), {
    ref: composeRefs(element.ref, domRef),
    className: cn(element.props.className, classNamesMapping[state]),
  });
};

Transition.ENTER = ENTER;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXIT = EXIT;
Transition.EXITING = EXITING;
Transition.EXITED = EXITED;

export default Transition;
