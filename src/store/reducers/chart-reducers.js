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
    case CommonAction.LOAD_DATA_SEARCH_USAGE_TREND: {
      return {
        ...state,
        dataSearchUsageTrend: action.payload,
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

export function chartConfigReducer(state = {}, action) {
  switch (action.type) {
    case CommonAction.LOAD_REAL_TIME_USER_CONFIG: {
      return {
        ...state,
        realTimeUserConfig: action.payload,
      };
    }
    case CommonAction.LOAD_INDIVIDUAL_SEARCH_CONFIG: {
      return {
        ...state,
        individualSearchConfig: action.payload,
      };
    }
    case CommonAction.LOAD_REAL_TIME_SEARCH_CONFIG: {
      return {
        ...state,
        realTimeSearchConfig: action.payload,
      };
    }
    case CommonAction.LOAD_KEYWORD_SEARCH_CONVERSION_CONFIG: {
      return {
        ...state,
        keywordSearchConversionConfig: action.payload,
      };
    }
    case CommonAction.LOAD_KEYWORD_SEARCH_TREND_CONFIG: {
      return {
        ...state,
        keywordSearchTrendConfig: action.payload,
      };
    }
    case CommonAction.LOAD_USER_SEARCH_TREND_CONFIG: {
      return {
        ...state,
        userSearchTrendConfig: action.payload,
      };
    }
    case CommonAction.LOAD_USER_LOCATION_MAP_CONFIG: {
      return {
        ...state,
        userLocationMapConfig: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_USAGE_RATIO_CONFIG: {
      return {
        ...state,
        dataUsageRatioConfig: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_SEARCH_RATIO_CONFIG: {
      return {
        ...state,
        dataSearchRatioConfig: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_USAGE_TREND_CONFIG: {
      return {
        ...state,
        dataUsageTrendConfig: action.payload,
      };
    }
    case CommonAction.LOAD_DATA_SEARCH_USAGE_TREND_CONFIG: {
      return {
        ...state,
        dataUsageTrendConfig: action.payload,
      };
    }
    case CommonAction.LOAD_USER_ACTIVITY_HISTORY_CONFIG: {
      return {
        ...state,
        userActivityHistoryConfig: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}