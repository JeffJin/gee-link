import {StatsAction} from "./actions";


export function statsReducer(state = {}, action) {
  switch (action.type) {
    case StatsAction.LOAD_TOTAL_DATA: {
      return {
        ...state,
        totalDataStats: action.payload,
      };
    }
    case StatsAction.LOAD_TOTAL_SEARCH: {
      return {
        ...state,
        totalSearchStats: action.payload,
      };
    }
    case StatsAction.LOAD_TODAY_SEARCH: {
      return {
        ...state,
        todaySearchStats: action.payload,
      };
    }
    case StatsAction.LOAD_TODAY_BROWSED: {
      return {
        ...state,
        todayBrowsedStats: action.payload,
      };
    }
    case StatsAction.LOAD_AVERAGE_SEARCH: {
      return {
        ...state,
        averageSearchStats: action.payload,
      };
    }
    case StatsAction.LOAD_INDIVIDUAL_SEARCH: {
      return {
        ...state,
        individualSearchStats: action.payload,
      };
    }
    case StatsAction.LOAD_INDIVIDUAL_USER: {
      return {
        ...state,
        individualUserStats: action.payload,
      };
    }
    case StatsAction.LOAD_INDIVIDUALLY_BROWSED: {
      return {
        ...state,
        individuallyBrowsedStats: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}