import "./css/app.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";
import "./css/post.css";
import "./css/settings.css"

import Posts from "./components/Posts";
import Settings from "./components/Settings";
import Header, { initialHeaderState } from "./components/Header";
import Footer from "./components/Footer";
import { useReducer } from "react";
import { headerReducer } from "./state/reducers";


function App() {
const [state, dispatch] = useReducer(headerReducer, initialHeaderState);
if (state === undefined) return <>Loading...</>;

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <div className="main">
        {state.displayFeed ? (
          <div className="sett-inner">
            {Settings()}
          </div>
        ) : (
          <div className="main-inner">{Posts()}</div>
        )}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
