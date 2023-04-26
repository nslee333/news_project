import "../css/settings.css";
import { reducer } from "../state/reducer";
import { useReducer } from "react";
import {State} from "../state/reducer"



export default function Settings() {
  const initialState: State = {
    sourcesWanted: [],
    sourcesBlocked: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function displayWantedSources() {
    if (state instanceof Error) return;

    const sources = state.sourcesWanted.map((source, index) => {
      return (
        <div>
          {state.sourcesWanted[index]}
        </div>
      )
    });


    return (
      <>
        <div>
          {sources}
        </div>
      </>
    );
  }


  return (
    <>
      <div className="sett">
        <div className="sett-title">
          Settings
        </div>
        <div className="sett-feed">
          <div className="feed-title">Customize your feed</div>
          <div className="sett-filter">
            <div className="filter-title">Restrict feed to wanted news sources</div>
            <div className="filter-title">
              {
                state ? displayWantedSources() : <></>
              }
              <input className=""/>
            </div>
            
          </div>

          <div className="sett-block">
            <div className="block-title">Blocked news sources</div>
            <div className="block-title">Search that contains the blocked news sources.</div>
        
          </div>
        </div>

      </div>

    </> 
  );
}