
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
  mainPageKeywordSearchRankingsReducer,
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
  userBrowseRankingsReducer, userLocationMapDataReducer,
  userSearchRankingsReducer, userSearchTrendReducer
} from "./reducers/user-page-reducers";
import {
  individualSearchChartDataReducer,
  realTimeSearchChartDataReducer,
  realTimeUserChartDataReducer
} from "./reducers/common-reducers";

const reducer = combineReducers({

  realTimeSearchChartData: realTimeSearchChartDataReducer,
  individualSearchChartData: individualSearchChartDataReducer,
  realTimeUserChartData: realTimeUserChartDataReducer,

  // main page reducers
  mainPageStats: mainPageStatsReducer,
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
  userSearchTrend: userSearchTrendReducer,
  userLocationMapData: userLocationMapDataReducer,
  userSearchRankings: userSearchRankingsReducer,
  userBrowseRankings: userBrowseRankingsReducer,

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
