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

export function mainPageRealTimeUserChartDataReducer(state = [], action) {
  // console.log('mainPageRealTimeUserChartDataReducer', state, action);

  switch (action.type) {
    case MainPageAction.LOAD_REAL_TIME_USER_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function mainPageIndividualSearchChartDataReducer(state = [], action) {
  // console.log('mainPageIndividualSearchChartDataReducer', state, action);

  switch (action.type) {
    case MainPageAction.LOAD_INDIVIDUAL_SEARCH_DATA: {
      return action.payload.individualSearchChartData;
    }
    default: {
      return state;
    }
  }
}

export function mainPageRealTimeSearchChartDataReducer(state = [], action) {

  switch (action.type) {
    case MainPageAction.LOAD_REAL_TIME_SEARCH_DATA: {
      return action.payload.realTimeUserChartData;
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