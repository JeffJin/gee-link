import React from 'react';
import {MainChartList} from "../presentation/main-chart-list";
import {UserLocationMap} from "../charts/user-location-map";
import {TotalDataStat} from "../stat-boxes/total-data-stat-box";
import {IndividualUserStat} from "../stat-boxes/individual-user-stat-box";
import {IndividualSearchStat} from "../stat-boxes/individual-search-stat-box";
import {TotalSearchStat} from "../stat-boxes/total-search-stat-box";
import {SearchUserRanking} from "../rankings/search-user-ranking";
import {DataBrowseRanking} from "../rankings/data-browse-ranking";
import {SearchedKeywordsRanking} from "../rankings/searched-keywords-ranking";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import {SearchBox} from "../search/search-box";

class MainPage extends React.Component {
  state = {
    isInProgress: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let progress = '';
    if(this.state.isInProgress) {
      progress = <LinearProgress/>
    }

    return (
      <div>
        {
          progress
        }
        <SearchBox {...this.props} basePath={'main'}/>
        <div className="main-page">
          <div className={'stat-box-container flex-box'}>
            <TotalDataStat/>
            <TotalSearchStat/>
            <IndividualSearchStat/>
            <IndividualUserStat/>
          </div>
          <div className={'chart-container'}>
            <MainChartList />
            <UserLocationMap />
          </div>
          <div className={'ranking-container'}>
            <SearchedKeywordsRanking/>
            <DataBrowseRanking />
            <SearchUserRanking />
          </div>;
        </div>
      </div>
    );
  }
}

export default MainPage;
