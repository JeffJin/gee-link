import {UserPageAction} from "./actions";

export function userPageBrowseUserRankingsReducer(state = [], action) {
  switch (action.type) {
    case UserPageAction.LOAD_BROWSE_USER_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function userPageSearchUserRankingsReducer(state = [], action) {
  switch (action.type) {
    case UserPageAction.LOAD_SEARCH_USER_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function userPageLocationMapDataReducer(state = [], action) {
  switch (action.type) {
    case UserPageAction.LOAD_LOCATION_MAP_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function userPageSearchTrendReducer(state = [], action) {
  switch (action.type) {
    case UserPageAction.LOAD_SEARCH_TREND: {
      return action.payload.searchUserRankings;
    }
    default: {
      return state;
    }
  }
}
