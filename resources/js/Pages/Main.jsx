import "../../css/app.css";
import "../../css/header.css";
import "../../css/footer.css";
import "../../css/main.css";
import "../../css/post.css";
import "../../css/settings.css"

import Posts from "../Components/Posts";
import Settings from "../Components/Settings";
import Header, { initialHeaderState } from "../Components/Header";
import Footer from "../Components/Footer";
import { useReducer, useEffect, useState } from "react";
import { headerReducer } from "../state/reducers";


function Display(state, data) {

  const displaySettings = state.displaySettings;

  if (displaySettings === undefined || state instanceof Error) {
    return (
    <>Loading...</>
  );

  } else if (displaySettings === true) {
    return (
       <div className="sett-inner"><Settings /></div>
    );

  } else {
    return (
      <div className="main-inner"><Posts  {...data}/></div>
    )
  }
}


function Main(data) {
  
  
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);


  return (
    <div className="app">
      <div className="header">
        <Header dispatch={dispatch}/>
      </div>

      <div className="main">
        <Display {...state} {...data} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
