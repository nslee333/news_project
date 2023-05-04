import { useReducer, useState } from "react";
import { headerReducer } from "../state/reducers";
import { stateProps } from "../App";

export const initialHeaderState = {
  displaySettings: false,
}

const action_feed = {
  type: "switch_from_feed"
}
const action_sett = {
  type: "switch_from_settings"
}

type dispatchObj = {
  dispatch: Function
}

export default function Header(props: dispatchObj) {

  return (
    <>
      <div className="header-inner">
        <a onClick={() => props.dispatch(action_feed)}>
          <div className="header-title">News Feed</div>
        </a>
        <a onClick={() => props.dispatch(action_sett)}>
          <div className="header-settings">Settings</div>
        </a>
      </div>
    </>
  );
}