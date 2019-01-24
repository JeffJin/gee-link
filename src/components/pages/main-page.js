import React from 'react';
import {connect} from "react-redux";
import {dataService} from "../../services/data.service";
import {MainRankingLists} from "../containers/main-ranking-list";
import {MainStatBoxes} from "../containers/main-stat-boxes";
import {MainChartList} from "../containers/main-chart-list";
import {UserLocationMap} from "../common/user-location-map";
import {CommonAction, StatsAction} from "../../store/reducers/actions";

function loadTotalStatsAction(stats) {
  return {
    type: StatsAction.LOAD_TOTAL_SEARCH,
    payload: stats,
  };
}

function loadSearchUserRankingsAction(data) {
  return {
    type: CommonAction.LOAD_SEARCH_USER_RANKINGS,
    payload: data,
  };
}

function loadDataBrowseRankingsAction(data) {
  return {
    type: CommonAction.LOAD_DATA_BROWSE_RANKINGS,
    payload: data,
  };
}

function loadKeywordSearchRankingsAction(data) {
  return {
    type: CommonAction.LOAD_SEARCHED_KEYWORD_RANKINGS,
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
  }

  getTotalStats = () => {
    dataService.getMainPageStats().then(stats => {
      console.log('data service getTotalStats returned', stats);
      this.props.onLoadSearchUserRankings(stats);
    });
  };

  render() {
    return (
      <div className="main-page">
        <MainStatBoxes/>
        <div className={'chart-container'}>
          <MainChartList />
          <UserLocationMap />
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
