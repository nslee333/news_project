import "./css/app.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";
import "./css/post.css";
import "./css/settings.css"

import Posts from "./components/Posts";
import Settings from "./components/Settings";
import { useState } from "react";


function App() {
  const [settClick, setSettClick] = useState(false);

  return (
    <div className="app">
      <div className="header">
        <div className="header-inner">
          <div className="header-title">News Feed</div>
          <a onClick={() => setSettClick(!settClick)}>
            <div className="header-settings">Settings</div>
          </a>
        </div>
      </div>

      <div className="main">
        {!settClick ? (
          <div className="sett-inner">
            {Settings()}
          </div>
        ) : (
          <div className="main-inner">{Posts()}</div>
        )}
      </div>

      <div className="footer">
        <div className="footer-inner"></div>
      </div>
    </div>
  );
}

export default App;
