import "../css/settings.css";
import { reducer } from "../state/reducer";
import { useReducer } from "react";
import {State} from "../state/reducer"



export default function Settings() {
  const initialState: State = {
    sourcesWanted: ["CNN", "Fox", "New York Times", "CNN", "Fox"],
    sourcesBlocked: ["CNN", "Fox", "New York Times", "CNN", "Fox"],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function displayWantedSources() {
    if (state instanceof Error) return;

    const sources = state.sourcesWanted.map((source, index) => {
      return (
        <div className="filter-map" key={index}>
        {state.sourcesBlocked[index]}
      </div>
      )
    });


    return (
      <>
        {sources}
      </>
    );
  }

  function displaySourcesBlocked() {
    if (state instanceof Error) return;

    const blockedSources = state.sourcesBlocked.map((source, index) => {
      return (
        <div className="block-map" key={index}>
          {state.sourcesBlocked[index]}
        </div>
      );
    })



    return (
      <>
        {blockedSources}
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
            <div className="filter-title">Wanted news sources</div>
            <div className="filter-title">
              <div className="filter-sources">
                {
                  state ? displayWantedSources() : <></>
                }
              </div>
              <input className="" type="text"/>
            </div>
            
          </div>

          <div className="sett-block">
            <div className="block-title">Blocked news sources</div>
              <div className='block-sources'>
                {
                  state ? displaySourcesBlocked() : <></>
                }
              </div>
              <input className="" type="text" />
          </div>
        </div>

      </div>

    </> 
  );
}