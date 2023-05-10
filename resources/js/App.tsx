import "./css/app.css";
import "./css/header.css";
import "./css/footer.css";
import "./css/main.css";
import "./css/post.css";
import "./css/settings.css"

import Posts from "./components/Posts";
import Settings from "./components/Settings";
import Header, { initialHeaderState } from "./components/Header";
import Footer from "./Components/Footer";
import { useReducer, useEffect, useState } from "react";
import { headerReducer } from "../../temp/src/state/reducers";


export type stateProps = {
  displaySettings: boolean; 
}

function Display(state: stateProps) {

  const displaySettings = state.displaySettings;

  if (displaySettings === undefined || state instanceof Error) {
    return (
    <>Loading...</>
  );

  } else if (displaySettings === true) {
    return (
       <div className="sett-inner">{Settings()}</div>
    );

  } else {
    return (
      <div className="main-inner">{Posts()}</div>
    )
  }
}


function App() {
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);

  if (state instanceof Error) return (<></>);

  return (
    <div className="app">
      <div className="header">
        <Header dispatch={dispatch}/>
      </div>

      <div className="main">
        <Display {...state}/>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
