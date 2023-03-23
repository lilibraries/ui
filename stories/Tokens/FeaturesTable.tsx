import React, { FC } from "react";
import Monospace from "../components/Monospace";

const FeaturesTable: FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>SCSS</th>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>$cls-prefix</Monospace>
          </td>
          <td>
            <Monospace>"li-"</Monospace>
          </td>
          <td>CSS class name prefix</td>
        </tr>
        <tr>
          <td>
            <Monospace>$var-prefix</Monospace>
          </td>
          <td>
            <Monospace>"li-"</Monospace>
          </td>
          <td>CSS variable name prefix</td>
        </tr>
        <tr>
          <td>
            <Monospace>$enable-variables</Monospace>
          </td>
          <td>
            <Monospace>true</Monospace>
          </td>
          <td>Enable CSS variables</td>
        </tr>
        <tr>
          <td>
            <Monospace>$enable-fallbacks</Monospace>
          </td>
          <td>
            <Monospace>true</Monospace>
          </td>
          <td>Enable CSS variable fallbacks</td>
        </tr>
        <tr>
          <td>
            <Monospace>$colors</Monospace>
          </td>
          <td>
            <Monospace>
              <div>(</div>
              <div style={{ paddingLeft: "2em" }}>"red",</div>
              <div style={{ paddingLeft: "2em" }}>"magenta",</div>
              <div style={{ paddingLeft: "2em" }}>"purple",</div>
              <div style={{ paddingLeft: "2em" }}>"indigo",</div>
              <div style={{ paddingLeft: "2em" }}>"navy",</div>
              <div style={{ paddingLeft: "2em" }}>"blue",</div>
              <div style={{ paddingLeft: "2em" }}>"cyan",</div>
              <div style={{ paddingLeft: "2em" }}>"teal",</div>
              <div style={{ paddingLeft: "2em" }}>"green",</div>
              <div style={{ paddingLeft: "2em" }}>"lime",</div>
              <div style={{ paddingLeft: "2em" }}>"yellow",</div>
              <div style={{ paddingLeft: "2em" }}>"orange",</div>
              <div style={{ paddingLeft: "2em" }}>"brown",</div>
              <div style={{ paddingLeft: "2em" }}>"gray"</div>
              <div>)</div>
            </Monospace>
          </td>
          <td>Color list</td>
        </tr>
        <tr>
          <td>
            <Monospace>$intents</Monospace>
          </td>
          <td>
            <Monospace>
              <div>(</div>
              <div style={{ paddingLeft: "2em" }}>"major",</div>
              <div style={{ paddingLeft: "2em" }}>"minor",</div>
              <div style={{ paddingLeft: "2em" }}>"positive",</div>
              <div style={{ paddingLeft: "2em" }}>"alertive",</div>
              <div style={{ paddingLeft: "2em" }}>"negative",</div>
              <div>)</div>
            </Monospace>
          </td>
          <td>Intent list</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FeaturesTable;
