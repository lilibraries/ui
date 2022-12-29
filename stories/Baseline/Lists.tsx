import React from "react";

function Lists() {
  return (
    <>
      <ul>
        <li>first item</li>
        <li>second item</li>
        <ol>
          <li>first item</li>
          <li>second item</li>
          <li>third item</li>
        </ol>
        <li>third item</li>
      </ul>
      <ol>
        <li>first item</li>
        <li>second item</li>
        <ul>
          <li>first item</li>
          <li>second item</li>
          <li>third item</li>
        </ul>
        <li>third item</li>
      </ol>
    </>
  );
}

export default Lists;
