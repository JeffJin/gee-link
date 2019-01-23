import {MainPageAction} from "./actions";

export function mainPageStatsReducer(state = {}, action) {
  switch (action.type) {
    case MainPageAction.LOAD_STATS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function mainPageDataBrowseRankingsReducer(state = [], action) {
  switch (action.type) {
    case MainPageAction.LOAD_DATA_BROWSE_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function mainPageKeywordSearchRankingsReducer(state = [], action) {
  switch (action.type) {
    case MainPageAction.LOAD_KEYWORD_SEARCH_RANKINGS: {
      return action.payload.keywordSearchRankings;
    }
    default: {
      return state;
    }
  }
}


export function mainPageSearchUserRankingsReducer(state = [], action) {
  switch (action.type) {
    case MainPageAction.LOAD_SEARCH_USER_RANKINGS: {
      return action.payload.searchUserRankings;
    }
    default: {
      return state;
    }
  }
}