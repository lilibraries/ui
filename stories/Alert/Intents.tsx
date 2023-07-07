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
      <Alert intent="major" icon={<FiInfo />} style={{ marginBottom: 16 }}>
        This is a major alert.
      </Alert>
      <Alert intent="minor" icon={<FiInfo />} style={{ marginBottom: 16 }}>
        This is a minor alert.
      </Alert>
      <Alert
        intent="positive"
        icon={<FiCheckCircle />}
        style={{ marginBottom: 16 }}
      >
        This is a positive alert.
      </Alert>
      <Alert
        intent="alertive"
        icon={<FiAlertTriangle />}
        style={{ marginBottom: 16 }}
      >
        This is a alertive alert.
      </Alert>
      <Alert
        intent="negative"
        icon={<FiAlertCircle />}
        style={{ marginBottom: 16 }}
      >
        This is a negative alert.
      </Alert>
    </>
  );
}

export default Example;
