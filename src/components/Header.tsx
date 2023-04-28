import { useReducer, useState } from "react";
import { headerReducer } from "../state/reducers";

export const initialHeaderState = {
  displayFeed: true,
} 


export default function Header() {
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);

  return (
    <>
      <div className="header-inner">
        <a onClick={() => dispatch("switch_from_feed")}>
          <div className="header-title">News Feed</div>
        </a>
        <a onClick={() => dispatch("switch_from_settings")}>
          <div className="header-settings">Settings</div>
        </a>
      </div>
    </>
  );
}