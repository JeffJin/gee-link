export function totalStatsReducer(state = [], action) {
  console.log('totalStatsReducer', state, action);

  switch (action.type) {
    case 'LOAD_TOTAL_STATS': {
      return action.payload;
    }
    default: {
      console.log('totalStatsReducer returning default');

      return state;
    }
  }
}

export function realTimeUserChartDataReducer(state = [], action) {
  console.log('realTimeUserChartDataReducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_CHART_DATA': {
      return state.realTimeSearchChartData;
    }
    default: {
      console.log('realTimeUserChartDataReducer returning default');

      return state;
    }
  }
}

export function individualSearchChartDataReducer(state = [], action) {
  console.log('individualSearchChartDataReducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_CHART_DATA': {
      return state.individualSearchChartData;
    }
    default: {
      console.log('individualSearchChartDataReducer returning default');

      return state;
    }
  }
}

export function realTimeSearchChartDataReducer(state = [], action) {
  console.log('realTimeSearchChartDataReducer', state, action);

  switch (action.type) {
    case 'LOAD_MAIN_CHART_DATA': {
      return state.realTimeUserChartData;
    }
    default: {
      console.log('realTimeSearchChartDataReducer returning default');

      return state;
    }
  }
}

export function userLocationMapDataReducer(state = [], action) {
  console.log('userLocationMapDataReducer', state, action);

  switch (action.type) {
    case 'SEARCH': {
      return state;
    }
    default: {
      console.log('userLocationMapDataReducer returning default');

      return state;
    }
  }
}

export function keywordSearchTop10Reducer(state = [], action) {
  console.log('keywordSearchTop10Reducer', state, action);

  switch (action.type) {
    case 'SEARCH': {
      return state;
    }
    default: {
      console.log('keywordSearchTop10Reducer returning default');

      return state;
    }
  }
}

export function dataBrowseTop10Reducer(state = [], action) {
  console.log('dataBrowseTop10Reducer', state, action);

  switch (action.type) {
    case 'SEARCH': {
      return state;
    }
    default: {
      console.log('dataBrowseTop10Reducer returning default');

      return state;
    }
  }
}

export function searchUserTop10Reducer(state = [], action) {
  console.log('searchUserTop10Reducer', state, action);

  switch (action.type) {
    case 'SEARCH': {
      return state;
    }
    default: {
      console.log('searchUserTop10Reducer returning default');

      return state;
    }
  }
}