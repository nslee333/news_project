import { settingsReducer, headerReducer } from "../state/reducers";

const initialState = {
  sourcesWanted: ["Wall street journal"],
  sourcesBlocked: ["CNN"],
};

test("Settings reducer correctly adds to wanted sources", () => {
  const action = {
    type: "add_to_sources_wanted",
    source: "wall street",
  };

  const state = settingsReducer(initialState, action);

  const expectedState = {
    sourcesWanted: ["Wall street journal", "wall street"],
    sourcesBlocked: ["CNN"],
  };

  expect(state).toEqual(expectedState);
});

test("Settings reducer correctly removes from source", () => {
  const addAction = {
    type: "add_to_sources_wanted",
    source: "wall street",
  };

  const stateAfterAdd = settingsReducer(initialState, addAction);

  const removeAction = {
    type: "remove_from_sources_wanted",
    source: "wall street",
  };

  const stateAfterRemove = settingsReducer(stateAfterAdd, removeAction);

  expect(stateAfterRemove).toEqual(initialState);
});

test("Settings reducer adds to blocked sources", () => {
  const action = {
    type: "add_to_blocked_sources",
    source: "fox news",
  };

  const state = settingsReducer(initialState, action);

  const expectedState = {
    sourcesWanted: ["Wall street journal"],
    sourcesBlocked: ["CNN", "fox news"],
  };

  expect(state).toEqual(expectedState);
});

test("Settings reducer removes from blocked sources", () => {
  const addAction = {
    type: "add_to_blocked_sources",
    source: "fox news",
  };

  const stateAfterAdd = settingsReducer(initialState, addAction);

  const removeAction = {
    type: "remove_from_blocked_sources",
    source: "fox news",
  };

  const stateAfterRemove = settingsReducer(stateAfterAdd, removeAction);

  expect(stateAfterRemove).toEqual(initialState);
});
