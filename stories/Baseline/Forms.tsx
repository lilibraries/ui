import React from "react";

function Forms() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>
        <label>
          Url:
          <input type="url" placeholder="Enter url" />
        </label>
      </p>

      <p>
        <label>
          Text:
          <input type="text" placeholder="Enter text" />
        </label>
      </p>

      <p>
        <label>
          Email:
          <input type="email" placeholder="Enter email" />
        </label>
      </p>

      <p>
        <label>
          Search:
          <input type="search" placeholder="Search" />
        </label>
      </p>

      <p>
        <label>
          Number:
          <input type="number" placeholder="Enter number" />
        </label>
      </p>

      <p>
        <label>
          Password:
          <input type="password" placeholder="Enter password" />
        </label>
      </p>

      <p>
        <label>
          Telephone:
          <input type="tel" placeholder="Enter telephone" />
        </label>
      </p>

      <p>
        <label>
          Range:
          <input type="range" />
        </label>
      </p>

      <p>
        <label>
          File select:
          <input type="file" />
        </label>
      </p>

      <p>
        <label>
          Color:
          <input type="color" />
        </label>
      </p>

      <p>
        <label>
          Time:
          <input type="time" />
        </label>
      </p>

      <p>
        <label>
          Date:
          <input type="date" />
        </label>
      </p>

      <p>
        <label>
          Week:
          <input type="week" />
        </label>
      </p>

      <p>
        <label>
          Month:
          <input type="month" />
        </label>
      </p>

      <p>
        <label>
          Datetime:
          <input type="datetime-local" />
        </label>
      </p>

      <p>
        <label>
          Select:
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </label>
      </p>

      <p>
        <label>
          Textarea:
          <textarea placeholder="Enter text"></textarea>
        </label>
      </p>

      <p>
        <label>
          <input type="radio" name="radio" /> Radio 1
        </label>{" "}
        <label>
          <input type="radio" name="radio" /> Radio 2
        </label>{" "}
        <label>
          <input type="radio" name="radio" /> Radio 3
        </label>
      </p>

      <p>
        <label>
          <input type="checkbox" /> Checkbox 1
        </label>{" "}
        <label>
          <input type="checkbox" /> Checkbox 2
        </label>{" "}
        <label>
          <input type="checkbox" /> Checkbox 3
        </label>
      </p>

      <fieldset>
        <legend>Legend</legend>
        <input />
      </fieldset>
      <br />

      <p>
        <input type="button" value="Input" /> <button>Button</button> <button type="submit">Submit</button>{" "}
        <button type="reset">Reset</button>
      </p>
    </form>
  );
}

export default Forms;
