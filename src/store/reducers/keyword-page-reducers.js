import {KeywordPageAction, MainPageAction} from "./actions";

export function keywordPageSearchTrendReducer(state = [], action) {
  switch (action.type) {
    case KeywordPageAction.LOAD_KEYWORD_SEARCH_TREND: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordPageSearchConversionReducer(state = [], action) {
  switch (action.type) {
    case KeywordPageAction.LOAD_SEARCH_CONVERSION: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordPageStatsReducer(state = {}, action) {
  switch (action.type) {
    case KeywordPageAction.LOAD_STATS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordPageMissedKeywordsRankingReducer(state = [], action) {
  switch (action.type) {
    case KeywordPageAction.LOAD_MISSED_KEYWORD_RANKING: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordPageSearchedKeywordsRankingReducer(state = [], action) {
  switch (action.type) {
    case KeywordPageAction.LOAD_SEARCHED_KEYWORD_RANKINGS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}