import React from 'react';
import RealTimeSearchChart from "../presentation/real-time-search-chart";
import {connect} from "react-redux";
import {dataService} from "../../services/data.service";
import UserLocationMap from "../presentation/user-location-map";
import {RankingLists} from "../containers/ranking-list";
import {TotalStats} from "../containers/state-boxes";
import IndividualSearchChart from "../presentation/individual-search-chart";
import RealTimeUserChart from "../presentation/realtime-user-chart";

function loadTotalStatsAction(stats) {
  return {
    type: 'LOAD_TOTAL_STATS',
    payload: stats,
  };
}

function loadRankingsAction(data) {
  return {
    type: 'LOAD_MAIN_RANKINGS',
    payload: data,
  };
}

function loadChartDataAction(data) {
  return {
    type: 'LOAD_MAIN_CHART_DATA',
    payload: data,
  };
}

const mapStateToMainPageProps = (state) => {
  return {...state};
};

const mapDispatchToMainPageProps = (dispatch) => (
  {
    onLoadStats: (stats) => (
      dispatch(loadTotalStatsAction(stats))
    ),
    onLoadRankings: (rankings) => (
      dispatch(loadRankingsAction(rankings))
    ),
    onLoadChartData: (data) => (
      dispatch(loadChartDataAction(data))
    ),
    dispatch: dispatch
  }
);

class MainPageContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getTotalStats();
    // this.getRankingLists();
    this.getRealtimeChartData();
  }

  getTotalStats = () => {
    dataService.getTotalStats().then(stats => {
      console.log('data service getTotalStats returned', stats);
      this.props.onLoadStats(stats);
    });
  };

  getRankingLists = () => {
    dataService.getRankingLists().then(list => {
      console.log('data service getRankingLists returned', list);
      this.props.onLoadRankings(list);
    });
  };

  getRealtimeChartData = () => {
    dataService.getRealtimeChartData().then(list => {
      console.log('data service getRealtimeChartData returned', list);
      this.props.onLoadChartData(list);
    });
  };

  render() {
    return (
      <div className="main">
        <TotalStats/>
        <div className={'chart-container'}>
          <div className={'map'}>
            <div className={'chart-header'}>
              <div className={'char-header-block'}></div>
              <div className={'title'}>实时搜索</div>
            </div>
            <RealTimeSearchChart />
            <IndividualSearchChart />
            <RealTimeUserChart />
          </div>
          <div className={'map'}>
            <UserLocationMap />
          </div>
        </div>
        <RankingLists/>
      </div>
    );
  }
}

const MainPage = connect(
  mapStateToMainPageProps,
  mapDispatchToMainPageProps
)(MainPageContent);

export default MainPage;
