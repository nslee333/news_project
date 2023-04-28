import { useReducer, useState } from "react";
import { headerReducer } from "../state/reducers";

export const initialHeaderState = {
  displaySettings: false,
}

const action_feed = {
  type: "switch_from_feed"
}
const action_sett = {
  type: "switch_from_settings"
}


export default function Header() {
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);

  return (
    <>
      <div className="header-inner">
        <a onClick={() => dispatch(action_feed)}>
          <div className="header-title">News Feed</div>
        </a>
        <a onClick={() => dispatch(action_sett)}>
          <div className="header-settings">Settings</div>
        </a>
      </div>
    </>
  );
}