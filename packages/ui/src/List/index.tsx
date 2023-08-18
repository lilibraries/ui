import {
  RefAttributes,
  PropsWithoutRef,
  ForwardRefExoticComponent,
} from "react";
import ListItem from "./ListItem";
import ListImpl, { ListProps } from "./List";

export * from "./List";
export * from "./ListItem";

export interface ListComponent
  extends ForwardRefExoticComponent<
    PropsWithoutRef<ListProps> & RefAttributes<HTMLDivElement>
  > {
  Item: typeof ListItem;
}

const List = ListImpl as ListComponent;
List.Item = ListItem;

export default List;
