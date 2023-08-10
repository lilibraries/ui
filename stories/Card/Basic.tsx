import React from "react";
import { Card } from "@lilib/ui";
import { FiInfo } from "react-icons/fi";

function Example() {
  return (
    <Card
      style={{ width: 500 }}
      icon={<FiInfo />}
      title="Card Title"
      headnote="Headnote"
      headmark="headmark"
      footnote="Footnote"
      footmark="Footmark"
      image="https://images.unsplash.com/photo-1682687218608-5e2522b04673"
    >
      Card Content
    </Card>
  );
}

export default Example;
