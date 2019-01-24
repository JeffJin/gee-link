import {combineReducers, createStore} from "redux";
import {searchReducer, searchResultsReducer} from "./reducers/search-reducers";
import {statsReducer} from "./reducers/stats-reducers";
import {dataUsageRecordReducer} from "./reducers/data-reducers";
import {chartDataReducer, rankingDataReducer} from "./reducers/common-reducers";

const reducer = combineReducers({

  // chart data reducers
  individualSearchChartData: chartDataReducer,
  realTimeUserChartData: chartDataReducer,
  realTimeSearchChartData: chartDataReducer,
  keywordSearchConversion: chartDataReducer,
  keywordSearchTrend: chartDataReducer,
  userSearchTrend: chartDataReducer,
  userLocationMapData: chartDataReducer,
  dataUsageRatio: chartDataReducer,
  dataSearchRatio: chartDataReducer,
  dataUsageTrend: chartDataReducer,

  
  // ranking reducers
  dataBrowseRanking: rankingDataReducer,
  dataUsageRanking: rankingDataReducer,
  searchedKeywordsRanking: rankingDataReducer,
  searchUserRanking: rankingDataReducer,
  browseUserRanking: rankingDataReducer,
  missedKeywordRanking: rankingDataReducer,

  // stats reducers
  totalDataStats: statsReducer,
  totalSearchStats: statsReducer,
  todaySearchStats: statsReducer,
  todayBrowsedStats: statsReducer,
  averageSearchStats: statsReducer,
  individualSearchStats: statsReducer,
  individualUserStats: statsReducer,
  individuallyBrowsedStats: statsReducer,

  //data stat page reducers
  dataUsageRecord: dataUsageRecordReducer,

  // search reducers
  search: searchReducer,
  searchResults: searchResultsReducer,
});

const initialStates = {
  // stats
  totalDataStats: [],
  totalSearchStats: [],
  todaySearchStats: [],
  todayBrowsedStats: [],
  averageSearchStats: [],
  individualSearchStats: [],
  individualUserStats: [],
  individuallyBrowsedStats: [],

  // ranking
  dataBrowseRanking: [],
  searchedKeywordsRanking: [],
  searchUserRanking: [],
  browseUserRanking: [],
  missedKeywordRanking: [],
  dataUsageRanking: [],

  // charts


  //search
  search: {},
  searchResults: [],

};

export const store = createStore(reducer, initialStates);
