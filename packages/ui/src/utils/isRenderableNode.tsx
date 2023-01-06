import { ReactNode } from "react";
import isBoolean from "lodash/isBoolean";

function isRenderableNode(
  node: ReactNode
): node is Exclude<ReactNode, null | undefined | boolean> {
  return node != null && !isBoolean(node);
}

export default isRenderableNode;
