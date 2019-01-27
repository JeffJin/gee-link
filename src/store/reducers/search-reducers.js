import {CommonAction} from "./actions";

export function searchKeywordReducer(state = null, action) {
  return state;
}


export function searchResultsReducer(state = null, action) {

  switch (action.type) {

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