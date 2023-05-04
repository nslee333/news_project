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
import { useReducer, useEffect } from "react";
import { headerReducer } from "./state/reducers";

function Display() {
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);

  if (state === undefined || state instanceof Error) {
    return (
    <>Loading...</>
  );

  } else if (state.displaySettings) {
    return (
       <div className="sett-inner">{Settings()}</div>
    );

  } else {
    return (
      <div className="main-inner">{Posts()}</div>
    )
  }
}

// & App won't update when sett / feed is clicked.
// * How can I make the App update?
// * Am I using useReducer correctly?


function App() {
const [state, dispatch] = useReducer(headerReducer, initialHeaderState);
if (state instanceof Error) return (<></>);
console.log(state?.displaySettings, "HFHF")


// useEffect(() => {
// }, [state?.displaySettings])







  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>

      <div className="main">
        {Display()}
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
