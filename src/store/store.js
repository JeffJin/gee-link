
import {combineReducers, createStore} from "redux";
import {searchReducer, searchResultsReducer} from "./reducers/search-reducers";
import {
  dataPageSearchRatioReducer,
  dataPageStatsReducer,
  dataPageUsageRankingsReducer,
  dataPageUsageRatioReducer,
  dataPageUsageRecordReducer,
  dataPageUsageTrendReducer
} from "./reducers/data-page-reducers";
import {
  mainPageDataBrowseRankingsReducer,
  mainPageIndividualSearchChartDataReducer,
  mainPageKeywordSearchRankingsReducer,
  mainPageRealTimeSearchChartDataReducer,
  mainPageRealTimeUserChartDataReducer,
  mainPageSearchUserRankingsReducer,
  mainPageStatsReducer
} from "./reducers/main-page-reducers";
import {
  keywordPageMissedKeywordsRankingReducer,
  keywordPageSearchConversionReducer,
  keywordPageSearchedKeywordsRankingReducer,
  keywordPageSearchTrendReducer,
  keywordPageStatsReducer
} from "./reducers/keyword-page-reducers";
import {
  userPageBrowseUserRankingsReducer,
  userPageLocationMapDataReducer, userPageSearchTrendReducer,
  userPageSearchUserRankingsReducer
} from "./reducers/user-page-reducers";

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
  dataPageUsageRatio: dataPageUsageRatioReducer,
  dataPageSearchRatio: dataPageSearchRatioReducer,
  dataPageUsageRecord: dataPageUsageRecordReducer,
  dataPageUsageTrend: dataPageUsageTrendReducer,
  dataPageUsageRankings: dataPageUsageRankingsReducer,

  //keyword page reducers
  keywordPageStats: keywordPageStatsReducer,
  keywordPageSearchedKeywordsRanking: keywordPageSearchedKeywordsRankingReducer,
  keywordPageSearchTrend: keywordPageSearchTrendReducer,
  keywordPageSearchConversion: keywordPageSearchConversionReducer,
  keywordPageTopMissedKeywordsRanking: keywordPageMissedKeywordsRankingReducer,

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
  //main page
  mainPageStats: {},
  mainPageRealTimeSearchChartData: {},
  mainPageIndividualSearchChartData: {},
  mainPageRealTimeUserChartData: {},
  mainPageKeywordSearchRankings: [],
  mainPageDataBrowseRankings: [],
  mainPageSearchUserRankings: [],

  //data page
  dataPageStats: [],
  dataPageUsageRecord: [],
  dataPageUsageRatio: [],
  dataPageSearchRatio: [],
  dataPageUsageRankings: [],
  dataPageUsageTrend: [],

  //keyword stats page
  keywordPageStats: {},
  keywordPageSearchedKeywordsRanking: [],
  keywordPageSearchTrend: [],
  keywordPageSearchConversion: [],
  keywordPageTopMissedKeywordsRanking: [],

  //user page
  userPageSearchTrend: [],
  userPageLocationMapData: [],
  userPageSearchUserRankings: [],
  userPageBrowseUserRankings: [],

  //search
  search: {},
  searchResults: [],

};

export const store = createStore(reducer, initialStates);
