import { ReactNode } from "react";
import isBoolean from "lodash/isBoolean";
import isEmptyArray from "./isEmptyArray";

function isRenderableNode(
  node: ReactNode
): node is Exclude<ReactNode, null | undefined | boolean> {
  return node != null && !isBoolean(node) && !isEmptyArray(node);
}

export default isRenderableNode;
