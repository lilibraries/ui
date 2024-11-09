import React from "react";
import { Alert, Icon, Text, Description } from "@lilib/ui";
import { FiInfo, FiCheckCircle, FiAlertCircle, FiAlertTriangle } from "react-icons/fi";

function Example() {
  return (
    <>
      <Alert intent="major" closable style={{ marginBottom: 16 }}>
        <Description
          icon={
            <Text as={Icon} intent="major">
              <FiInfo />
            </Text>
          }
        >
          This is a major alert.
        </Description>
      </Alert>
      <Alert intent="minor" closable style={{ marginBottom: 16 }}>
        <Description
          icon={
            <Text as={Icon} intent="minor">
              <FiInfo />
            </Text>
          }
        >
          This is a minor alert.
        </Description>
      </Alert>
      <Alert intent="positive" closable style={{ marginBottom: 16 }}>
        <Description
          icon={
            <Text as={Icon} intent="positive">
              <FiCheckCircle />
            </Text>
          }
        >
          This is a positive alert.
        </Description>
      </Alert>
      <Alert intent="alertive" closable style={{ marginBottom: 16 }}>
        <Description
          icon={
            <Text as={Icon} intent="alertive">
              <FiAlertTriangle />
            </Text>
          }
        >
          This is an alertive alert.
        </Description>
      </Alert>
      <Alert intent="negative" closable style={{ marginBottom: 16 }}>
        <Description
          icon={
            <Text as={Icon} intent="negative">
              <FiAlertCircle />
            </Text>
          }
        >
          This is a negative alert.
        </Description>
      </Alert>
    </>
  );
}

export default Example;
