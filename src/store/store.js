import {
  dataBrowseTop10Reducer,
  individualSearchChartDataReducer,
  keywordSearchTop10Reducer,
  realTimeSearchChartDataReducer,
  realTimeUserChartDataReducer,
  searchUserTop10Reducer,
  totalStatsReducer,
  userLocationMapDataReducer
} from "./reducers/main-page.reducers";
import {combineReducers, createStore} from "redux";

function searchReducer(state = [], action) {
  return state;
}

function searchResultReducer(state = [], action) {
  return state;
}

function searchResultItemDetailsReducer(state = [], action) {
  return state;
}

const reducer = combineReducers({
  totalStats: totalStatsReducer,
  realTimeSearchChartData: realTimeSearchChartDataReducer,
  individualSearchChartData: individualSearchChartDataReducer,
  realTimeUserChartData: realTimeUserChartDataReducer,
  userLocationMapData: userLocationMapDataReducer,
  keywordSearchRankings: keywordSearchTop10Reducer,
  dataBrowseRankings: dataBrowseTop10Reducer,
  searchUserRankings: searchUserTop10Reducer,
  search: searchReducer,
  searchResult: searchResultReducer,
  searchResultItemDetails: searchResultItemDetailsReducer
});

const initialStates = {
  totalStats: [],
  realTimeSearchChartData: {},
  individualSearchChartData: {},
  realTimeUserChartData: {},
  userLocationMapData: [],
  keywordSearchRankings: [],
  dataBrowseRankings: [],
  searchUserRankings: [],
  search: {},
  searchResult: {},
  searchResultItemDetails: {}
};

export const store = createStore(reducer, initialStates);
