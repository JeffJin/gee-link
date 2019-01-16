export function totalStatsReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_TOTAL_STATS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function dataStatsReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_DATA_STATS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function realTimeUserChartDataReducer(state = [], action) {
  // console.log('realTimeUserChartDataReducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_CHART_DATA': {
      return action.payload.realTimeSearchChartData;
    }
    default: {
      return state;
    }
  }
}

export function individualSearchChartDataReducer(state = [], action) {
  // console.log('individualSearchChartDataReducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_CHART_DATA': {
      return action.payload.individualSearchChartData;
    }
    default: {
      return state;
    }
  }
}

export function realTimeSearchChartDataReducer(state = [], action) {
  // console.log('realTimeSearchChartDataReducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_CHART_DATA': {
      return action.payload.realTimeUserChartData;
    }
    default: {
      return state;
    }
  }
}

export function userLocationMapDataReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MAIN_USER_MAP': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordSearchTop10Reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MAIN_RANKINGS': {
      return action.payload.keywordSearchRankings;
    }
    default: {
      return state;
    }
  }
}

export function dataBrowseTop10Reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MAIN_RANKINGS': {
      return action.payload.dataBrowseRankings;
    }
    default: {
      return state;
    }
  }
}

export function searchUserTop10Reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MAIN_RANKINGS': {
      return action.payload.searchUserRankings;
    }
    default: {
      return state;
    }
  }
}

export function dataUsageRankingReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA_USAGE_RANKINGS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function dataUsageTrendReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_DATA_USAGE_TREND': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

// ************Keyword Stats Page
export function keywordSearchTrendReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_KEYWORD_SEARCH_TREND': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function searchConversionReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_KEYWORD_CONVERSION': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function keywordStatsReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_KEYWORD_STATS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function missedKeywordsRankingReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MISSED_KEYWORDS_RANKING': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function searchedKeywordsRankingReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_SEARCHED_KEYWORDS_RANKING': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}