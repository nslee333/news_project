import "../css/settings.css";
import { reducer } from "../state/reducer";
import { useReducer } from "react";



export default function Settings() {
  const initialState = {
    sourcesWanted: [],
    sourcesBlocked: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
      <div className="sett">
        <div className="sett-title">
          Settings
        </div>
        <div className="sett-feed">
          <div className="feed-title">Customize your feed</div>
          <div className="sett-filter">
            <div className="filter-title">Filter all but 5 news sources</div>
            <div className="filter-title">*Search box that contains the sources wanted</div>
            
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