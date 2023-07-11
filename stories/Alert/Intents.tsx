import React from "react";
import { Alert } from "@lilib/ui";
import {
  FiInfo,
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
} from "react-icons/fi";

function Example() {
  return (
    <>
      <Alert
        icon={<FiInfo />}
        intent="major"
        closable
        style={{ marginBottom: 16 }}
      >
        This is a major alert.
      </Alert>
      <Alert
        icon={<FiInfo />}
        intent="minor"
        closable
        style={{ marginBottom: 16 }}
      >
        This is a minor alert.
      </Alert>
      <Alert
        icon={<FiCheckCircle />}
        intent="positive"
        closable
        style={{ marginBottom: 16 }}
      >
        This is a positive alert.
      </Alert>
      <Alert
        icon={<FiAlertTriangle />}
        intent="alertive"
        closable
        style={{ marginBottom: 16 }}
      >
        This is an alertive alert.
      </Alert>
      <Alert icon={<FiAlertCircle />} intent="negative" closable>
        This is a negative alert.
      </Alert>
    </>
  );
}

export default Example;
