import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

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

          <div className="input-block">
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
      <main>
        <ul>
          <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/41749920?s=460&v=4" alt="camfilho github"/>
            <div className="user-info">
              <strong>Carlos AUgusto</strong>
              <span>ReactJS, React NAtive, NOde JS</span>
            </div>
          </header>
          <p>BIO</p>
          <a href="github.com/camfilho">Access Profile on GH</a>
          </li>

          <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/41749920?s=460&v=4" alt="camfilho github"/>
            <div className="user-info">
              <strong>Carlos AUgusto</strong>
              <span>ReactJS, React NAtive, NOde JS</span>
            </div>
          </header>
          <p>BIO</p>
          <a href="github.com/camfilho">Access Profile on GH</a>
          </li>
 
          <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/41749920?s=460&v=4" alt="camfilho github"/>
            <div className="user-info">
              <strong>Carlos AUgusto</strong>
              <span>ReactJS, React NAtive, NOde JS</span>
            </div>
          </header>
          <p>BIO</p>
          <a href="github.com/camfilho">Access Profile on GH</a>
          </li>
               
        </ul>
      </main>
    </div>
  );
}

export default App;
