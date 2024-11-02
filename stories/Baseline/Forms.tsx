import React from "react";
import { Flexbox } from "@lilib/ui";

function Forms() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Flexbox direction="column" gap="4x" align="flex-start">
        <label>
          Url:
          <input type="url" placeholder="Enter url" />
        </label>

        <label>
          Text:
          <input type="text" placeholder="Enter text" />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Enter email" />
        </label>

        <label>
          Search:
          <input type="search" placeholder="Search" />
        </label>

        <label>
          Number:
          <input type="number" placeholder="Enter number" />
        </label>

        <label>
          Password:
          <input type="password" placeholder="Enter password" />
        </label>

        <label>
          Telephone:
          <input type="tel" placeholder="Enter telephone" />
        </label>

        <label>
          Range:
          <input type="range" />
        </label>

        <label>
          File select:
          <input type="file" />
        </label>

        <label>
          Color:
          <input type="color" />
        </label>

        <label>
          Time:
          <input type="time" />
        </label>

        <label>
          Date:
          <input type="date" />
        </label>

        <label>
          Week:
          <input type="week" />
        </label>

        <label>
          Month:
          <input type="month" />
        </label>

        <label>
          Datetime:
          <input type="datetime-local" />
        </label>

        <label>
          Select:
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </label>

        <label>
          Textarea:
          <textarea placeholder="Enter text"></textarea>
        </label>

        <div>
          <label>
            <input type="radio" name="radio" /> Radio 1
          </label>{" "}
          <label>
            <input type="radio" name="radio" /> Radio 2
          </label>{" "}
          <label>
            <input type="radio" name="radio" /> Radio 3
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" /> Checkbox 1
          </label>{" "}
          <label>
            <input type="checkbox" /> Checkbox 2
          </label>{" "}
          <label>
            <input type="checkbox" /> Checkbox 3
          </label>
        </div>

        <fieldset>
          <legend>Legend</legend>
          <input />
        </fieldset>

        <div>
          <input type="button" value="Input" /> <button>Button</button> <button type="submit">Submit</button>{" "}
          <button type="reset">Reset</button>
        </div>
      </Flexbox>
    </form>
  );
}

export default Forms;
