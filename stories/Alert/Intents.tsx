import React from "react";
import { Alert, Info, Text } from "@lilib/ui";
import {
  FiInfo,
  FiCheckCircle,
  FiAlertCircle,
  FiAlertTriangle,
} from "react-icons/fi";

function Example() {
  return (
    <>
      <Alert intent="major" closable style={{ marginBottom: 16 }}>
        <Info
          indicator={
            <Text intent="major">
              <FiInfo />
            </Text>
          }
        >
          This is a major alert.
        </Info>
      </Alert>
      <Alert intent="minor" closable style={{ marginBottom: 16 }}>
        <Info
          indicator={
            <Text intent="minor">
              <FiInfo />
            </Text>
          }
        >
          This is a minor alert.
        </Info>
      </Alert>
      <Alert intent="positive" closable style={{ marginBottom: 16 }}>
        <Info
          indicator={
            <Text intent="positive">
              <FiCheckCircle />
            </Text>
          }
        >
          This is a positive alert.
        </Info>
      </Alert>
      <Alert intent="alertive" closable style={{ marginBottom: 16 }}>
        <Info
          indicator={
            <Text intent="alertive">
              <FiAlertTriangle />
            </Text>
          }
        >
          This is an alertive alert.
        </Info>
      </Alert>
      <Alert intent="negative" closable style={{ marginBottom: 16 }}>
        <Info
          indicator={
            <Text intent="negative">
              <FiAlertCircle />
            </Text>
          }
        >
          This is a negative alert.
        </Info>
      </Alert>
    </>
  );
}

export default Example;
