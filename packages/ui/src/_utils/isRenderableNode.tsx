import { ReactChild, ReactFragment, ReactNode, ReactPortal } from "react";

export type ReactRenderableNode = ReactChild | ReactFragment | ReactPortal;

function isRenderableNode(node: ReactNode): node is ReactRenderableNode {
  return node != null && typeof node !== "boolean";
}

export default isRenderableNode;
