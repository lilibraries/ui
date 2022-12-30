import React from "react";

function Forms() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Url:
        <input type="url" placeholder="Enter url" />
      </label>
      <br />
      <br />

      <label>
        Text:
        <input type="text" placeholder="Enter text" />
      </label>
      <br />
      <br />

      <label>
        Email:
        <input type="email" placeholder="Enter email" />
      </label>
      <br />
      <br />

      <label>
        Search:
        <input type="search" placeholder="Search" />
      </label>
      <br />
      <br />

      <label>
        Number:
        <input type="number" placeholder="Enter number" />
      </label>
      <br />
      <br />

      <label>
        Password:
        <input type="password" placeholder="Enter password" />
      </label>
      <br />
      <br />

      <label>
        Telephone:
        <input type="tel" placeholder="Enter telephone" />
      </label>
      <br />
      <br />

      <label>
        Range:
        <input type="range" />
      </label>
      <br />
      <br />

      <label>
        File select:
        <input type="file" />
      </label>
      <br />
      <br />

      <label>
        Color:
        <input type="color" />
      </label>
      <br />
      <br />

      <label>
        Time:
        <input type="time" />
      </label>
      <br />
      <br />

      <label>
        Date:
        <input type="date" />
      </label>
      <br />
      <br />

      <label>
        Week:
        <input type="week" />
      </label>
      <br />
      <br />

      <label>
        Month:
        <input type="month" />
      </label>
      <br />
      <br />

      <label>
        Datetime:
        <input type="datetime-local" />
      </label>
      <br />
      <br />

      <label>
        Select:
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </label>
      <br />
      <br />

      <label>
        Textarea:
        <textarea placeholder="Enter text"></textarea>
      </label>
      <br />
      <br />

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
      <br />

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
      <br />

      <fieldset>
        <legend>Legend</legend>
        <input />
      </fieldset>
      <br />

      <div>
        <input type="button" value="Input" /> <button>Button</button>{" "}
        <button type="submit">Submit</button>{" "}
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default Forms;
