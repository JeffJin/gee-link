import React from 'react';
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";
import DataUsageRatioChart from "../presentation/data-usage-ratio-chart";
import DataSearchRatioChart from "../presentation/data-search-ratio-chart";
import DataUsageTrend from "../containers/data-usage-trend";
import Ranking from "../presentation/ranking";


function loadDataStatsAction(data) {
  return {
    type: 'LOAD_DATA_STATS',
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

const mapStateToDataStatsPageProps = (state) => {
  const dataUsageRankings = {
    rankingItems: state.dataUsageRankings,
    headers: ['排名', '数据内容', '被使用次数'],
    title: '使用排行榜 TOP 10',
    route: '/user'
  };

  return {
    totalData: state.dataStats.totalData,
    todaySearch: state.dataStats.todaySearch,
    individualSearch: state.dataStats.individualSearch,
    dataUsageRatio: state.dataStats.dataUsageRatio,
    dataSearchRatio: state.dataStats.dataSearchRatio,
    read: state.dataStats.read,
    liked: state.dataStats.liked,
    forwarded: state.dataStats.forwarded,
    commented: state.dataStats.commented,
    dataUsageRankings: dataUsageRankings,
    dataUsageTrend: state.dataUsageTrend
  };
};

const mapDispatchToDataStatsProps = (dispatch) => (
  {
    onLoadDataStats: (stats) => (
      dispatch(loadDataStatsAction(stats))
    ),
    onLoadDataUsageRankings: (stats) => (
      dispatch(loadDataUsageRankingAction(stats))
    ),
    onLoadDataUsageTrend: (stats) => (
      dispatch(loadDataUsageTrendAction(stats))
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
    this.getDataStats();
    this.getDataUsageRanking();
    this.getDataUsageTrend();
  }

  getDataStats = () => {
    dataService.getDataStats().then(stats => {
      this.props.onLoadDataStats(stats);
    });
  };

  getDataUsageRanking = () => {
    dataService.getDataUsageRankings().then(stats => {
      this.props.onLoadDataUsageRankings(stats);
    });
  };
  getDataUsageTrend = () => {
    dataService.getDataUsageTrend().then(stats => {
      this.props.onLoadDataUsageTrend(stats);
    });
  };

  render() {
    return (
      <div className="data-stats">
        <div className={'data-stats-row-1'}>
          <div className={'data-stats-col-1'}>
            <div className={'box box-1'}>
              <div className={'value'}>{this.props.totalData || 0}</div>
              <div className={'desc'}>总数据条数</div>
            </div>
            <div className={'box box-2'}>
              <div className={'value'}>{this.props.todaySearch || 0}</div>
              <div className={'desc'}>今日被浏览数据数</div>
            </div>
            <div className={'box box-3'}>
              <div className={'value'}>{this.props.individualSearch || 0}</div>
              <div className={'desc'}>独立浏览次数</div>
            </div>
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
