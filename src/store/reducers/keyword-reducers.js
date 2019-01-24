import {KeywordAction, StatsAction} from "./actions";

export function keywordSearchTrendReducer(state = [], action) {
  switch (action.type) {
    case KeywordAction.LOAD_KEYWORD_SEARCH_TREND: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordSearchConversionReducer(state = [], action) {
  switch (action.type) {
    case KeywordAction.LOAD_SEARCH_CONVERSION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordMissedKeywordsRankingReducer(state = [], action) {
  switch (action.type) {
    case KeywordAction.LOAD_MISSED_KEYWORD_RANKING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordSearchedKeywordsRankingReducer(state = [], action) {
  switch (action.type) {
    case KeywordAction.LOAD_SEARCHED_KEYWORD_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}