import React from "react";
import { Alert, Icon, Info, Text } from "@lilib/ui";
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
          icon={
            <Text as={Icon} intent="major">
              <FiInfo />
            </Text>
          }
        >
          This is a major alert.
        </Info>
      </Alert>
      <Alert intent="minor" closable style={{ marginBottom: 16 }}>
        <Info
          icon={
            <Text as={Icon} intent="minor">
              <FiInfo />
            </Text>
          }
        >
          This is a minor alert.
        </Info>
      </Alert>
      <Alert intent="positive" closable style={{ marginBottom: 16 }}>
        <Info
          icon={
            <Text as={Icon} intent="positive">
              <FiCheckCircle />
            </Text>
          }
        >
          This is a positive alert.
        </Info>
      </Alert>
      <Alert intent="alertive" closable style={{ marginBottom: 16 }}>
        <Info
          icon={
            <Text as={Icon} intent="alertive">
              <FiAlertTriangle />
            </Text>
          }
        >
          This is an alertive alert.
        </Info>
      </Alert>
      <Alert intent="negative" closable style={{ marginBottom: 16 }}>
        <Info
          icon={
            <Text as={Icon} intent="negative">
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
