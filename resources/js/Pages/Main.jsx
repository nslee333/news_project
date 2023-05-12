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


function Display(state, props) {
  // console.log(props, "dis");

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
      <div className="main-inner"><Posts props={props} /></div>
    )
  }
}


function Main(props) {
  // console.log(props, "main");
  // & getting props here but no news_api response included
  
  
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);


  return (
    <div className="app">
      <div className="header">
        <Header dispatch={dispatch}/>
      </div>

      <div className="main">
        <Display {...state} props={props} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
