import { useReducer, useState } from "react";
import { reducer } from "../state/reducers";

export default function Header() {
  const [settClick, setSettClick] = useState(false);

  return (
    <>
      <div className="header-inner">
        <a onClick={() => setSettClick(!settClick)}>
          <div className="header-title">News Feed</div>
        </a>
        <a onClick={() => setSettClick(!settClick)}>
          <div className="header-settings">Settings</div>
        </a>
      </div>
    </>
  );
}