export function totalStatsReducer(state = [], action) {
  // console.log('totalStatsReducer', state, action);

  switch (action.type) {
    case 'LOAD_TOTAL_STATS': {
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
  console.log('userLocationMapDataReducer', state, action);

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
  // console.log('keywordSearchTop10Reducer', state, action);

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
  // console.log('dataBrowseTop10Reducer', state, action);

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
  // console.log('searchUserTop10Reducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_RANKINGS': {
      return action.payload.searchUserRankings;
    }
    default: {
      return state;
    }
  }
}