import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Github User</label>
            <input
              name="github_username"
              id="github_username"
              type="text"
              required
            />
          </div>
          <div id="input-block">
            <label htmlFor="techs">Stacks</label>
            <input name="techs" id="techs" type="text" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" type="text" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" type="text" required />
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
