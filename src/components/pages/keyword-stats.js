import React from 'react';
import {KeywordStatBoxes} from "../containers/keyword-state-boxes";
import KeywordSearchTrend from "../containers/keyword-search-trend";
import SearchConversion from "../containers/search-conversion";
import Ranking from "../presentation/ranking";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";


function loadKeywordStatsAction(data) {
  return {
    type: 'LOAD_KEYWORD_STATS',
    payload: data,
  };
}

function loadKeywordConversionAction(data) {
  return {
    type: 'LOAD_KEYWORD_CONVERSION',
    payload: data,
  };
}

function loadKeywordSearchTrendAction(data) {
  return {
    type: 'LOAD_KEYWORD_SEARCH_TREND',
    payload: data,
  };
}

function loadSearchedKeywordsRankingAction(data) {
  return {
    type: 'LOAD_SEARCHED_KEYWORDS_RANKING',
    payload: data,
  };
}

function loadMissedKeywordsRankingAction(data) {
  return {
    type: 'LOAD_MISSED_KEYWORDS_RANKING',
    payload: data,
  };
}

const mapStateToKeywordStatsPageProps = (state) => {
  const searchedKeywordsRanking = {
    rankingItems: state.searchedKeywordsRanking,
    headers: ['排名', '关键词', '搜索次数'],
    title: '热搜排行榜 TOP 10',
    route: '/keyword'
  };

  const topMissedKeywordsRanking = {
    rankingItems: state.topMissedKeywordsRanking,
    headers: ['排名', '关键词', '搜索次数'],
    title: '搜索未命中排行榜 TOP 10',
    route: '/missed-keyword'
  };

  return {
    totalSearch: state.keywordStats.totalSearch,
    todaySearch: state.keywordStats.todaySearch,
    averageSearch: state.keywordStats.averageSearch,
    individualSearch: state.keywordStats.individualSearch,
    searchConversion: state.searchConversion,
    keywordSearchTrend: state.keywordSearchTrend,
    searchedKeywordsRanking: searchedKeywordsRanking,
    topMissedKeywordsRanking: topMissedKeywordsRanking
  };
};

const mapDispatchToKeywordStatsProps = (dispatch) => (
  {
    onLoadKeywordStats: (stats) => (
      dispatch(loadKeywordStatsAction(stats))
    ),
    onLoadKeywordConversion: (stats) => (
      dispatch(loadKeywordConversionAction(stats))
    ),
    onLoadKeywordSearchTrend: (stats) => (
      dispatch(loadKeywordSearchTrendAction(stats))
    ),
    onLoadSearchedKeywordsRanking: (stats) => (
      dispatch(loadSearchedKeywordsRankingAction(stats))
    ),
    onLoadMissedKeywordsRanking: (stats) => (
      dispatch(loadMissedKeywordsRankingAction(stats))
    ),
    dispatch: dispatch
  }
);


class KeywordStatsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getKeywordStats();
    this.getKeywordConversion();
    this.getKeywordSearchTrend();
    this.getMissedKeywordsRanking();
    this.getSearchedKeywordsRanking();
  }

  getKeywordStats = () => {
    dataService.getKeywordStats().then(result => {
      this.props.onLoadKeywordStats(result);
    });
  };

  getKeywordConversion = () => {
    dataService.getKeywordConversion().then(result => {
      this.props.onLoadKeywordConversion(result);
    });
  };

  getKeywordSearchTrend = () => {
    dataService.getKeywordSearchTrend().then(result => {
      this.props.onLoadKeywordSearchTrend(result);
    });
  };

  getSearchedKeywordsRanking = () => {
    dataService.getSearchedKeywordsRanking().then(result => {
      this.props.onLoadSearchedKeywordsRanking(result);
    });
  };

  getMissedKeywordsRanking = () => {
    dataService.getMissedKeywordsRanking().then(result => {
      this.props.onLoadMissedKeywordsRanking(result);
    });
  };

  render() {
    return (
      <div className="keyword-stats">
        <div className={'left'}>
          <KeywordStatBoxes></KeywordStatBoxes>
          <SearchConversion data={this.props.searchConversion}/>
          <KeywordSearchTrend data={this.props.keywordSearchTrend}/>
        </div>
        <div className={'right'}>
          <Ranking data={this.props.searchedKeywordsRanking}/>
          <Ranking data={this.props.topMissedKeywordsRanking}/>
        </div>
      </div>
    );
  }
}

const KeywordStats = connect(
  mapStateToKeywordStatsPageProps,
  mapDispatchToKeywordStatsProps
)(KeywordStatsContent);


export default KeywordStats;
