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
    } // categorized
    case CommonAction.LOAD_CATEGORIZED_RANKINGS: {
      return {
        ...state,
        categorizedRanking: action.payload,
      };
    }// related data
    case CommonAction.LOAD_RELATED_DATA_RANKINGS: {
      return {
        ...state,
        relatedDataRanking: action.payload,
      };
    }// related data
    case CommonAction.LOAD_RELATED_USER_RANKINGS: {
      return {
        ...state,
        relatedUserRanking: action.payload,
      };
    }// related data
    case CommonAction.LOAD_RELATED_KEYWORD_RANKINGS: {
      return {
        ...state,
        relatedKeywordRanking: action.payload,
      };
    }// related data
    case CommonAction.LOAD_RECENT_SEARCH_USER_RANKINGS: {
      return {
        ...state,
        recentSearchUserRanking: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}