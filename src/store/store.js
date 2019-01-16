import {
  dataBrowseTop10Reducer, dataStatsReducer, dataUsageRankingReducer, dataUsageTrendReducer,
  individualSearchChartDataReducer,
  keywordSearchTop10Reducer, keywordSearchTrendReducer, keywordStatsReducer, missedKeywordsRankingReducer,
  realTimeSearchChartDataReducer,
  realTimeUserChartDataReducer, searchConversionReducer, searchedKeywordsRankingReducer,
  searchUserTop10Reducer,
  totalStatsReducer,
  userLocationMapDataReducer
} from "./reducers/reducers";
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
  // main page reducers
  totalStats: totalStatsReducer,
  realTimeSearchChartData: realTimeSearchChartDataReducer,
  individualSearchChartData: individualSearchChartDataReducer,
  realTimeUserChartData: realTimeUserChartDataReducer,
  userLocationMapData: userLocationMapDataReducer,
  keywordSearchRankings: keywordSearchTop10Reducer,
  dataBrowseRankings: dataBrowseTop10Reducer,
  searchUserRankings: searchUserTop10Reducer,

  //data stat page reducers
  dataStats: dataStatsReducer,
  dataUsageRankings: dataUsageRankingReducer,
  dataUsageTrend: dataUsageTrendReducer,

  //keyword page reducers
  keywordStats: keywordStatsReducer,
  searchedKeywordsRanking: searchedKeywordsRankingReducer,
  keywordSearchTrend: keywordSearchTrendReducer,
  searchConversion: searchConversionReducer,
  topMissedKeywordsRanking: missedKeywordsRankingReducer,

  // search reducers
  search: searchReducer,
  searchResult: searchResultReducer,
  searchResultItemDetails: searchResultItemDetailsReducer
});

const initialStates = {
  totalStats: {},
  dataStats: {},
  realTimeSearchChartData: {},
  individualSearchChartData: {},
  realTimeUserChartData: {},
  userLocationMapData: [],
  keywordSearchRankings: [],
  dataBrowseRankings: [],
  searchUserRankings: [],
  search: {},
  searchResult: {},
  searchResultItemDetails: {},

  // keyword stats page
  keywordStats: {},
  searchedKeywordsRanking: [],
  topMissedKeywordsRanking: [],
  keywordSearchTrend: [],
  searchConversion: [],

};

export const store = createStore(reducer, initialStates);
