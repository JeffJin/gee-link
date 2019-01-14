import React from 'react';
import DataUsageRatioChart from "../presentation/data-usage-ratio-chart";
import DataSearchRatioChart from "../presentation/data-search-ratio-chart";

function KeywordStats(props) {
  return (
    <div className="keyword-stats">
      <div className={'row-1'}>
        <div className={'col-1'}>
          <div className={'box box-1'}>
            <div className={'value'}>{props.totalData}1</div>
            <div className={'desc'}>总数据条数</div>
          </div>
          <div className={'box box-2'}>
            <div className={'value'}>{props.todaySearch}2</div>
            <div className={'desc'}>今日被浏览数据数</div>
          </div>
          <div className={'box box-3'}>
            <div className={'value'}>{props.individualSearch}3</div>
            <div className={'desc'}>独立浏览次数</div>
          </div>
        </div>
        <div className={'col-2'}>
          <DataUsageRatioChart />
        </div>
        <div className={'col-2'}>
          <DataSearchRatioChart />
        </div>
        <div className={'col-3'}>

        </div>
      </div>
      <div className={'row-2'}>
        <div className={'col-1'}>

        </div>
        <div className={'col-2'}>

        </div>
      </div>
    </div>
  );
}

export default KeywordStats;
