import React from 'react';
import {connect} from "react-redux";
import {dataService} from "../../services/data.service";
import {MainRankingLists} from "../containers/main-ranking-list";
import {MainStatBoxes} from "../containers/main-stat-boxes";
import {MainChartList} from "../containers/main-chart-list";
import {MainUserMap} from "../containers/main-user-map";
import {MainPageAction} from "../../store/reducers/actions";

function loadTotalStatsAction(stats) {
  return {
    type: MainPageAction.LOAD_STATS,
    payload: stats,
  };
}

function loadSearchUserRankingsAction(data) {
  return {
    type: MainPageAction.LOAD_SEARCH_USER_RANKINGS,
    payload: data,
  };
}

function loadDataBrowseRankingsAction(data) {
  return {
    type: MainPageAction.LOAD_DATA_BROWSE_RANKINGS,
    payload: data,
  };
}

function loadKeywordSearchRankingsAction(data) {
  return {
    type: MainPageAction.LOAD_KEYWORD_SEARCH_RANKINGS,
    payload: data,
  };
}

function loadReaTimeUserDataAction(data) {
  return {
    type: MainPageAction.LOAD_REAL_TIME_USER_DATA,
    payload: data,
  };
}

function loadIndividualSearchDataAction(data) {
  return {
    type: MainPageAction.LOAD_INDIVIDUAL_SEARCH_DATA,
    payload: data,
  };
}

function loadUserMapAction(data) {
  return {
    type: MainPageAction.LOAD_USER_LOCATION_MAP_DATA,
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
    onLoadSearchUserRankings: (rankings) => (
      dispatch(loadSearchUserRankingsAction(rankings))
    ),
    onLoadDataBrowseRankings: (rankings) => (
      dispatch(loadDataBrowseRankingsAction(rankings))
    ),
    onLoadKeywordSearchRankings: (rankings) => (
      dispatch(loadKeywordSearchRankingsAction(rankings))
    ),
    // charts
    onLoadReaTimeUserData: (data) => (
      dispatch(loadReaTimeUserDataAction(data))
    ),
    onLoadIndividualSearchData: (data) => (
      dispatch(loadIndividualSearchDataAction(data))
    ),
    // map
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
