import React from 'react';
import {IndividualSearchStat} from "../stat-boxes/individual-search-stat-box";
import {AverageSearchStat} from "../stat-boxes/average-search-stat-box";
import {TodaySearchStat} from "../stat-boxes/today-search-stat-box";
import {TotalDataStat} from "../stat-boxes/total-data-stat-box";
import {KeywordSearchTrend} from "../charts/keyword-search-trend";
import {SearchConversion} from "../charts/search-conversion";
import {MissedKeywordsRanking} from "../rankings/missed-keywords-ranking";
import {SearchedKeywordsRanking} from "../rankings/searched-keywords-ranking";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import {SearchBox} from "../search/search-box";

class KeywordStats extends React.Component {
  state = {
    isInProgress: false
  };

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
        <SearchBox {...this.props}/>
        <div className="keyword-stats flex-box">
          <div className={'left flex-5'}>
            <div className={'stat-box-container flex-box'}>
              <TotalDataStat />
              <TodaySearchStat />
              <AverageSearchStat />
              <IndividualSearchStat />
            </div>
            <SearchConversion />
            <KeywordSearchTrend />
          </div>
          <div className={'right flex-2'}>
            <SearchedKeywordsRanking/>
            <MissedKeywordsRanking/>
          </div>
        </div>
      </div>
    );
  }
}

export default KeywordStats;
