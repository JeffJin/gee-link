import {CommonAction} from "./actions";

export function chartDataReducer(state = {}, action) {
  switch (action.type) {
    case CommonAction.LOAD_REAL_TIME_USER_DATA: {
      return {
        ...state,
        realTimeUserChartData: action.payload,
      };
    }
    case CommonAction.LOAD_INDIVIDUAL_SEARCH_DATA: {
      return {
        ...state,
        individualSearchChartData: action.payload,
      };
    }
    case CommonAction.LOAD_REAL_TIME_SEARCH_DATA: {
      return {
        ...state,
        realTimeSearchChartData: action.payload,
      };
    }
    case CommonAction.LOAD_KEYWORD_SEARCH_CONVERSION: {
      return {
        ...state,
        keywordSearchConversion: action.payload,
      };
    }
    case CommonAction.LOAD_KEYWORD_SEARCH_TREND: {
      return {
        ...state,
        keywordSearchTrend: action.payload,
      };
    }
    case CommonAction.LOAD_USER_SEARCH_TREND: {
      return {
        ...state,
        userSearchTrend: action.payload,
      };
    }
    case CommonAction.LOAD_USER_LOCATION_MAP_DATA: {
      return {
        ...state,
        userLocationMapData: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_USAGE_RATIO: {
      return {
        ...state,
        dataUsageRatio: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_SEARCH_RATIO: {
      return {
        ...state,
        dataSearchRatio: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_USAGE_TREND: {
      return {
        ...state,
        dataUsageTrend: action.payload,
      };
    }
    case CommonAction.LOAD_USER_ACTIVITY_HISTORY: {
      return {
        ...state,
        userActivityHistory: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}