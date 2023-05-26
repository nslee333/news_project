import "../../css/settings.css";
import { settingsReducer } from "../state/reducers";
import { useReducer } from "react";


export default function Settings() {
  const initialState = {
    sourcesWanted: [],
    sourcesBlocked: [],
  };

  const [state, dispatch] = useReducer(settingsReducer, initialState);

  function displayWantedSources() {
    if (state instanceof Error) return;

    const sources = state?.sourcesWanted.map((source, index) => {
      return (
        <div className="filter-map" key={index}>
        {state.sourcesWanted[index]}
          <button className="filter-btn" onClick={() => dispatch(
            {
              type: "remove_from_sources_wanted",
              source: state.sourcesWanted[index]
            })}
          >Delete</button>
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

    const blockedSources = state?.sourcesBlocked.map((source, index) => {
      return (
        <div className="block-map" key={index}>
          {state.sourcesBlocked[index]}
          <button className="block-btn" onClick={() => dispatch(
            {
              type: "remove_from_blocked_sources",
              source: state.sourcesBlocked[index]
            }
          )}>Delete</button>
        </div>
      );
    })



    return (
      <>
        {blockedSources}
      </>
    );
  }


  function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit call")
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
            <div className="filter-div">
              <div className="filter-sources">
                {
                  state ? displayWantedSources() : <></>
                }
              </div>
              <div className="filter-input">
                <form className="filter-input" onSubmit={e => onSubmit(e)}>
                  <input className="" type="text"/>
                  <button className="filter-save">Save</button>
                </form>
              </div>
            </div>
          </div>

          <div className="sett-block">
            <div className="block-title">Blocked news sources</div>
              <div className='block-sources'>
                {
                  state ? displaySourcesBlocked() : <></>
                }
              </div>
              <div className="block-input">
                <form className="block-input" onSubmit={e => onSubmit(e)}>
                  <input type="text" />
                  <button className="block-save">Save</button>
                </form>
              </div>
          </div>
        </div>
      </div>

    </> 
  );
}