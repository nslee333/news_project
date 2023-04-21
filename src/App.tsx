import "./css/app.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";
import "./css/post.css";
import "./css/settings.css"

import Posts from "./components/Posts";
import Settings from "./components/Settings";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
// & Need redux here to move state between App and Header.

  return (
    <div className="app">
      <div className="header">
        {Header()}
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
        {Footer()}
      </div>
    </div>
  );
}

export default App;
