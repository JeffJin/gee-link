import React from 'react';
import {DataUsageRecord} from "../stat-boxes/data-usage-record";
import {DataSearchRatio} from "../charts/data-search-ratio-chart";
import {DataUsageRatio} from "../charts/data-usage-ratio-chart";
import {IndividuallyBrowsedStat} from "../stat-boxes/individually-browsed-stat-box";
import {TodayBrowsedStat} from "../stat-boxes/today-browsed-stat-box";
import {TotalDataStat} from "../stat-boxes/total-data-stat-box";
import {DataUsageRanking} from "../rankings/data-usage-ranking";
import {DataUsageTrend} from "../charts/data-usage-trend";

class DataStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="data-stats">
        <div className={'data-stats-row-1'}>
          <div className={'data-stats-col-1'}>
            <TotalDataStat />
            <TodayBrowsedStat />
            <IndividuallyBrowsedStat />
          </div>
          <div className={'data-stats-col-2'}>
            <DataUsageRatio />
          </div>
          <div className={'data-stats-col-2'}>
            <DataSearchRatio />
          </div>
          <div className={'data-stats-col-3'}>
            <DataUsageRecord />
          </div>
        </div>
        <div className={'data-stats-row-2'}>
          <div className={'data-stats-col-1'}>
            <DataUsageTrend />
          </div>
          <div className={'data-stats-col-2'}>
            <DataUsageRanking/>
          </div>
        </div>
      </div>
    );
  }
}

export default DataStats;
