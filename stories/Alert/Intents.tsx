import React from "react";
import { Alert, AlertProps } from "@lilib/ui";
import {
  FiInfo,
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
} from "react-icons/fi";

function Intents(props: AlertProps) {
  return (
    <>
      <Alert
        {...props}
        intent="major"
        icon={<FiInfo />}
        style={{ marginBottom: 16 }}
      >
        This is a major alert.
      </Alert>
      <Alert
        {...props}
        intent="minor"
        icon={<FiInfo />}
        style={{ marginBottom: 16 }}
      >
        This is a minor alert.
      </Alert>
      <Alert
        {...props}
        intent="positive"
        icon={<FiCheckCircle />}
        style={{ marginBottom: 16 }}
      >
        This is a positive alert.
      </Alert>
      <Alert
        {...props}
        intent="alertive"
        icon={<FiAlertTriangle />}
        style={{ marginBottom: 16 }}
      >
        This is a alertive alert.
      </Alert>
      <Alert
        {...props}
        intent="negative"
        icon={<FiAlertCircle />}
        style={{ marginBottom: 16 }}
      >
        This is a negative alert.
      </Alert>
    </>
  );
}

export default Intents;
