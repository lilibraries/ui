import React, { FC, HTMLAttributes, ReactNode } from "react";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  head?: ReactNode[];
  body?: ReactNode[][];
}

const Table: FC<TableProps> = (props) => {
  const { head, body, ...rest } = props;

  let headNodes: ReactNode[] = [];
  let bodyNodes: ReactNode[] = [];

  if (Array.isArray(head)) {
    headNodes = head.map((item, index) => {
      return <th key={index}>{item}</th>;
    });
  }
  if (Array.isArray(body)) {
    bodyNodes = body.map((row, index) => {
      return (
        <tr key={index}>
          {row.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tr>
      );
    });
  }

  return (
    <table {...rest}>
      <thead>
        <tr>{headNodes}</tr>
      </thead>
      <tbody>{bodyNodes}</tbody>
    </table>
  );
};

export default Table;
