import {SearchAction} from "./actions";

export function searchKeywordReducer(state = null, action) {

  switch (action.type) {

    case SearchAction.LOAD_SEARCH_KEYWORD: {
      return {
        ...state,
        searchKeyword: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}


export function searchResultReducer(state = null, action) {

  switch (action.type) {

    case SearchAction.LOAD_SEARCH_RESULT: {
      return {
        ...state,
        searchResult: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}