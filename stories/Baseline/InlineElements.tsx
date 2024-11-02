import React from "react";

function InlineElements() {
  return (
    <>
      <p>
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/lilibraries/ui">
          Link
        </a>
      </p>
      <p>
        <small>Small</small> · Text<sub>Sub</sub> · Text<sup>Sup</sup>
      </p>
      <p>
        <b>Bring Attention</b> · <em>Emphasis</em> · <strong>Strong</strong>
      </p>
      <p></p>
      <p>
        <mark>Mark Text</mark> · <ins>Inserted Text</ins> · <del>Deleted Text</del>
      </p>
      <p>
        <code>Inline Code</code> · <kbd>Keyboard</kbd> · <var>Varaible</var> · <samp>Sample</samp> ·{" "}
        <output>Output</output>
      </p>
      <p>
        <i>Idiomatic</i> · <u>Unarticulated</u> · <s>Strikethrough</s> · <time>Time 23:59</time> · <cite>Citation</cite>{" "}
        · <dfn>Defination</dfn> · <q>Quote</q> · <abbr title="Abbreviation">Abbreviation</abbr>
      </p>
    </>
  );
}

export default InlineElements;
