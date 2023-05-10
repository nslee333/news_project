import { SettingsAction, SettingsState } from "../types/types";


export function settingsReducer(state: any, action: any ) {
  switch (action.type) {

    case "add_to_sources_wanted":

      return {
        sourcesWanted: [...state.sourcesWanted, action.source],
        sourcesBlocked: [...state.sourcesBlocked],
      }

    case "remove_from_sources_wanted":

      for (
        let count = 0; 
        count <= state.sourcesWanted.length; 
        count++
        ) {
          if (state.sourcesWanted[count] === action.source) {
          state.sourcesWanted.splice(count, 1);
        }
      }

      return {
        sourcesWanted: [...state.sourcesWanted],
        sourcesBlocked: [...state.sourcesBlocked],
      }

    case "add_to_blocked_sources":

      return {
        sourcesWanted: [...state.sourcesWanted],
        sourcesBlocked: [...state.sourcesBlocked, action.source],
      }

    case "remove_from_blocked_sources":
      if (!action.source) break;

        for (let count = 0; count <= state.sourcesBlocked.length; count++) {
        if (state.sourcesBlocked[count] === action.source) {
          state.sourcesBlocked.splice(count, 1);
        }
        }

      return {
        sourcesWanted: [...state.sourcesWanted],
        sourcesBlocked: [...state.sourcesBlocked],
      }

    default: 
      return new Error("Unknown action.")
    }
}


export function headerReducer(state: any, action: any) {
  switch (action.type) {
    case "switch_from_feed":
        return {
          displaySettings: false
        }

    case "switch_from_settings":
      return {
        displaySettings: true
      }
    default: 
      return new Error("Unknown action.")
  }
}