import React from 'react';
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";
import DataUsageRatioChart from "../presentation/data-usage-ratio-chart";
import DataSearchRatioChart from "../presentation/data-search-ratio-chart";
import DataUsageTrend from "../containers/data-usage-trend";
import Ranking from "../presentation/ranking";
import {DataPageStatBoxes} from "../containers/data-stat-boxes";


function loadDataPageStatsAction(data) {
  return {
    type: 'LOAD_DATA_PAGE_STATS',
    payload: data,
  };
}

function loadDataUsageRankingAction(data) {
  return {
    type: 'LOAD_DATA_USAGE_RANKINGS',
    payload: data,
  };
}

function loadDataUsageTrendAction(data) {
  return {
    type: 'LOAD_DATA_USAGE_TREND',
    payload: data,
  };
}

function loadDataUsageRecordAction(data) {
  return {
    type: 'LOAD_DATA_USAGE_RECORD',
    payload: data,
  };
}

function loadDataUsageRatioAction(data) {
  return {
    type: 'LOAD_DATA_USAGE_RATIO',
    payload: data,
  };
}

function loadDataSearchRatioAction(data) {
  return {
    type: 'LOAD_DATA_SEARCH_RATIO',
    payload: data,
  };
}



const mapStateToDataStatsPageProps = (state) => {
  const dataUsageRankings = {
    rankingItems: state.dataUsageRankings,
    headers: ['排名', '数据内容', '被使用次数'],
    title: '使用排行榜 TOP 10',
    route: '/user'
  };

  return {
    totalData: state.dataStats.totalData,
    todayBrowse: state.dataStats.todayBrowse,
    individualBrowse: state.dataStats.individualBrowse,
    dataUsageRatio: state.dataStats.dataUsageRatio,
    dataSearchRatio: state.dataStats.dataSearchRatio,
    read: state.dataStats.read,
    liked: state.dataStats.liked,
    forwarded: state.dataStats.forwarded,
    commented: state.dataStats.commented,
    dataUsageRankings: state.dataStats.dataUsageRankings,
    dataUsageTrend: state.dataStats.dataUsageTrend
  };
};

const mapDispatchToDataStatsProps = (dispatch) => (
  {
    onLoadDataPageStats: (results) => (
      dispatch(loadDataPageStatsAction(results))
    ),
    onLoadDataUsageRankings: (results) => (
      dispatch(loadDataUsageRankingAction(results))
    ),
    onLoadDataUsageTrend: (results) => (
      dispatch(loadDataUsageTrendAction(results))
    ),
    onLoadDataUsageRecord: (results) => (
      dispatch(loadDataUsageRecordAction(results))
    ),
    onLoadDataUsageRatio: (results) => (
      dispatch(loadDataUsageRatioAction(results))
    ),
    onLoadDataSearchRatio: (results) => (
      dispatch(loadDataSearchRatioAction(results))
    ),
    dispatch: dispatch
  }
);

class DataStatsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.getDataPageStats();
    this.getDataUsageRecord();
    this.getDataUsageRatio();
    this.getDataSearchRatio();
    this.getDataUsageRanking();
    this.getDataUsageTrend();
  }

  getDataPageStats = () => {
    dataService.getDataPageStats().then(results => {
      this.props.onLoadDataPageStats(results);
    });
  };

  getDataPageStats = () => {
    dataService.getDataPageStats().then(results => {
      this.props.onLoadDataPageStats(results);
    });
  };

  getDataUsageRecord = () => {
    dataService.getDataUsageRecord().then(results => {
      this.props.onLoadDataUsageRecord(results);
    });
  };

  getDataUsageRatio = () => {
    dataService.getDataUsageRatio().then(results => {
      this.props.onLoadDataUsageRatio(results);
    });
  };

  getDataSearchRatio = () => {
    dataService.getDataSearchRatio().then(results => {
      this.props.onLoadDataSearchRatio(results);
    });
  };

  getDataUsageRanking = () => {
    dataService.getDataUsageRankings().then(results => {
      this.props.onLoadDataUsageRankings(results);
    });
  };

  getDataUsageTrend = () => {
    dataService.getDataUsageTrend().then(results => {
      this.props.onLoadDataUsageTrend(results);
    });
  };


  render() {
    return (
      <div className="data-stats">
        <div className={'data-stats-row-1'}>
          <div className={'data-stats-col-1'}>
            <DataPageStatBoxes/>
          </div>
          <div className={'data-stats-col-2'}>
            <DataUsageRatioChart data={this.props.dataUsageRatio}/>
          </div>
          <div className={'data-stats-col-2'}>
            <DataSearchRatioChart data={this.props.dataSearchRatio}/>
          </div>
          <div className={'data-stats-col-3'}>
            <div className={'title'}>数据使用情况</div>
            <div className={'stats'}>
              <div className={'stat'}>
                <div className={'title'}>阅读数</div>
                <div className={'value'}>{this.props.read || 0}</div>
              </div>
              <div className={'stat'}>
                <div className={'title'}>点赞数</div>
                <div className={'value'}>{this.props.liked || 0}</div>
              </div>
              <div className={'stat'}>
                <div className={'title'}>转发数</div>
                <div className={'value'}>{this.props.forwarded || 0}</div>
              </div>
              <div className={'stat'}>
                <div className={'title'}>评论数</div>
                <div className={'value'}>{this.props.commented || 0}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={'data-stats-row-2'}>
          <div className={'data-stats-col-1'}>
            <DataUsageTrend  data={this.props.dataUsageTrend}/>
          </div>
          <div className={'data-stats-col-2'}>
            <Ranking data={this.props.dataUsageRankings}/>
          </div>
        </div>
      </div>
    );
  }
}

const DataStats = connect(
  mapStateToDataStatsPageProps,
  mapDispatchToDataStatsProps
)(DataStatsContent);

export default DataStats;
