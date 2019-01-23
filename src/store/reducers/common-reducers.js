import {CommonAction} from "./actions";

export function realTimeUserChartDataReducer(state = [], action) {
  // console.log('mainPageRealTimeUserChartDataReducer', state, action);

  switch (action.type) {
    case CommonAction.LOAD_REAL_TIME_USER_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function individualSearchChartDataReducer(state = [], action) {
  // console.log('mainPageIndividualSearchChartDataReducer', state, action);

  switch (action.type) {
    case CommonAction.LOAD_INDIVIDUAL_SEARCH_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export function realTimeSearchChartDataReducer(state = [], action) {

  switch (action.type) {
    case CommonAction.LOAD_REAL_TIME_SEARCH_DATA: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}