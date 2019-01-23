import {UserAction} from "./actions";

export function userBrowseRankingsReducer(state = [], action) {
  switch (action.type) {
    case UserAction.LOAD_BROWSE_USER_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function userSearchRankingsReducer(state = [], action) {
  switch (action.type) {
    case UserAction.LOAD_SEARCH_USER_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function userLocationMapDataReducer(state = [], action) {
  switch (action.type) {
    case UserAction.LOAD_LOCATION_MAP_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function userSearchTrendReducer(state = [], action) {
  switch (action.type) {
    case UserAction.LOAD_SEARCH_TREND: {
      return action.payload.searchUserRankings;
    }
    default: {
      return state;
    }
  }
}
