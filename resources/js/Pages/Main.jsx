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


function Display({ state, data }) {

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
      <div className="main-inner"><Posts props={data} /></div>
    )
  }
}


function Main(props) {  
  console.log(props);
  
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);

  return (
    <div className="app">
      <div className="header">
        <Header dispatch={dispatch}/>
      </div>

      <div className="main">
        <Display state={state} data={props.props} />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Main;
