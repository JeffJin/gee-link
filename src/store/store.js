import {combineReducers, createStore} from "redux";
import {searchKeywordReducer, searchResultReducer} from "./reducers/search-reducers";
import {statsReducer} from "./reducers/stats-reducers";
import {dataUsageRecordReducer} from "./reducers/data-reducers";
import {chartDataReducer } from "./reducers/chart-reducers";
import {rankingDataReducer} from "./reducers/ranking-reducers";
import {progressReducer} from "./reducers/progress-reducer";

const reducer = combineReducers({
  isInProgress: progressReducer,

  // chart data reducers
  chartData: chartDataReducer,

  // ranking reducers
  ranking: rankingDataReducer,

  //
  // stats reducers
  stats: statsReducer,

  //
  //data stat page reducers
  dataUsageRecord: dataUsageRecordReducer,

  // search reducers
  searchResult: searchResultReducer
});

const initialStates = {
  isInProgress: false,
  // stats
  ranking: {
    searchedKeywordsRanking: [],
    dataBrowseRanking: [],
    dataUsageRanking: [],
    searchUserRanking: [],
    browseUserRanking: [],
    missedKeywordRanking: [],
  },
  stats: {
    totalDataStats: 0,
    totalSearchStats: 0,
    todaySearchStats: 0,
    todayBrowsedStats: 0,
    averageSearchStats: 0,
    individualSearchStats: 0,
    individualUserStats: 0,
    individuallyBrowsedStats: 0,
  },
  chartData: {
    individualSearchChartData: [],
    realTimeUserChartData: [],
    realTimeSearchChartData: [],
    userLocationMapData: [],
    keywordSearchConversion: [],
    keywordSearchTrend: [],
    userSearchTrend: {},
    dataUsageRatio: [],
    dataSearchRatio: [],
    dataUsageTrend: [],
  },
  dataUsageRecord: {},
  searchResult: {
    resultList: [],
    facetResult: {},
    numFound: 0
  }
};

export const store = createStore(reducer, initialStates);
