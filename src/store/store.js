
import {combineReducers, createStore} from "redux";
import {searchReducer, searchResultsReducer} from "./reducers/search-reducers";
import {
  dataPageSearchRatioReducer,
  dataPageStatsReducer,
  dataPageUsageRankingsReducer, dataPageUsageRatioReducer,
  dataPageUsageRecordReducer, dataPageUsageTrendReducer
} from "./reducers/data-page-reducers";

const reducer = combineReducers({
  // main page reducers
  mainPageStats: mainPageStatsReducer,
  mainPageRealTimeSearchChartData: mainPageRealTimeSearchChartDataReducer,
  mainPageIndividualSearchChartData: mainPageIndividualSearchChartDataReducer,
  mainPageRealTimeUserChartData: mainPageRealTimeUserChartDataReducer,
  mainPageKeywordSearchRankings: mainPageKeywordSearchRankingsReducer,
  mainPageDataBrowseRankings: mainPageDataBrowseRankingsReducer,
  mainPageSearchUserRankings: mainPageSearchUserRankingsReducer,

  //data stat page reducers
  dataPageStats: dataPageStatsReducer,
  dataPageUsageRecord: dataPageUsageRecordReducer,
  dataPageUsageRatio: dataPageUsageRatioReducer,
  dataPageSearchRatio: dataPageSearchRatioReducer,
  dataPageUsageRankings: dataPageUsageRankingsReducer,
  dataPageUsageTrend: dataPageUsageTrendReducer,

  //keyword page reducers
  keywordStats: keywordStatsReducer,
  searchedKeywordsRanking: searchedKeywordsRankingReducer,
  keywordSearchTrend: keywordSearchTrendReducer,
  searchConversion: searchConversionReducer,
  topMissedKeywordsRanking: missedKeywordsRankingReducer,

  // user page reducers
  userPageSearchTrend: userPageSearchTrendReducer,
  userPageLocationMapData: userPageLocationMapDataReducer,
  userPageSearchUserRankings: userPageSearchUserRankingsReducer,
  userPageBrowseUserRankings: userPageBrowseUserRankingsReducer,

  // search reducers
  search: searchReducer,
  searchResults: searchResultsReducer,
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

  //search
  search: {},
  searchResults: [],

  // keyword stats page
  keywordStats: {},
  searchedKeywordsRanking: [],
  topMissedKeywordsRanking: [],
  keywordSearchTrend: [],
  searchConversion: [],

};

export const store = createStore(reducer, initialStates);
