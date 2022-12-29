import React from "react";

const code = `import React from "react";
import { Baseline } from "@lilib/ui";

function App() {
  return <Baseline />;
}
// Or
function App() {
  return <Baseline>...</Baseline>;
}`;

function PreformattedText() {
  return <pre>{code}</pre>;
}

export default PreformattedText;
