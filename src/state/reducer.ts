type Action = {
  type: string
}

type State = {
  sourcesWanted: string[],
  sourcesBlocked: string[],
}


export function reducer(state: State, action: Action, source: string): State {
  switch (action.type) {
    
    case "add_to_sources_wanted":
     return {
      sourcesWanted: [...state.sourcesWanted, source],
      sourcesBlocked: [...state.sourcesBlocked],
     }

    case "remove_from_sources_wanted":
      for (let count = 0; count <= state.sourcesWanted.length; count++) {
        if (state.sourcesWanted[count] === source) {
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
        sourcesBlocked: [...state.sourcesBlocked, source],
       }

    case "remove_from_blocked_sources":
       for (let count = 0; count <= state.sourcesBlocked.length; count++) {
        if (state.sourcesBlocked[count] === source) {
          state.sourcesBlocked.splice(count, 1);
        }
       }

      return {
        sourcesWanted: [...state.sourcesWanted],
        sourcesBlocked: [...state.sourcesBlocked, source],
      }

    default:
      return {
        sourcesWanted: [...state.sourcesWanted],
        sourcesBlocked: [...state.sourcesBlocked],
      }
  }

}