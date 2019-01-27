import {CommonAction} from "./actions";

export function rankingDataReducer(state = {}, action) {
  switch (action.type) {
    // main page
    case CommonAction.LOAD_DATA_BROWSE_RANKINGS: {
      return {
        ...state,
        dataBrowseRanking: action.payload,
      };
    }
    // data
    case CommonAction.LOAD_DATA_USAGE_RANKINGS: {
      return {
        ...state,
        dataUsageRanking: action.payload,
      };
    }
    // main page, keyword
    case CommonAction.LOAD_SEARCHED_KEYWORD_RANKINGS: {
      return {
        ...state,
        searchedKeywordsRanking: action.payload,
      };
    }
    // user page, main
    case CommonAction.LOAD_SEARCH_USER_RANKINGS: {
      return {
        ...state,
        searchUserRanking: action.payload,
      };
    }
    // user page
    case CommonAction.LOAD_BROWSE_USER_RANKINGS: {
      return {
        ...state,
        browseUserRanking: action.payload,
      };
    }
    // keyword
    case CommonAction.LOAD_MISSED_KEYWORD_RANKING: {
      return {
        ...state,
        missedKeywordRanking: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}