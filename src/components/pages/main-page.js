import React from 'react';
import {connect} from "react-redux";
import {dataService} from "../../services/data.service";
import {MainRankingLists} from "../containers/main-ranking-list";
import {MainStatBoxes} from "../containers/main-stat-boxes";
import {MainChartList} from "../containers/main-chart-list";
import {MainUserMap} from "../containers/main-user-map";

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

function loadUserMapAction(data) {
  return {
    type: 'LOAD_MAIN_USER_MAP',
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
    onLoadUserMapData: (data) => (
      dispatch(loadUserMapAction(data))
    ),
    dispatch: dispatch
  }
);

class MainPageContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChartHelpShown: false
    };
  }

  componentDidMount() {
    this.getTotalStats();
    this.getRankingLists();
    this.getRealtimeChartData();
    this.getUserMapData();
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

  getUserMapData = () => {
    dataService.getUserLocationMapData().then(data => {
      console.log('data service getUserMapData returned', data);
      this.props.onLoadUserMapData(data);
    });
  };

  render() {
    return (
      <div className="main-page">
        <MainStatBoxes/>
        <div className={'chart-container'}>
          <MainChartList />
          <MainUserMap />
        </div>
        <MainRankingLists/>
      </div>
    );
  }
}

const MainPage = connect(
  mapStateToMainPageProps,
  mapDispatchToMainPageProps
)(MainPageContent);

export default MainPage;
