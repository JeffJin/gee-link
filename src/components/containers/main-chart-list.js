import React from "react";
import IndividualSearchChart from "../presentation/individual-search-chart";
import RealTimeUserChart from "../presentation/realtime-user-chart";
import {RealTimeSearchChart} from "../common/real-time-search-chart";

export const MainChartList = (props) => {
  let isChartHelpShown = false;

  const showChartHelp = () => {

  };

  const hideChartHelp = () => {

  };

  return <div className={'map'}>
    <div className={'chart-header'}>
      <div className={'chart-header-block'}></div>
      <div className={'title'}>实时搜索</div>
      <div className={`help${isChartHelpShown ? ' active' : ''}`} onClick={showChartHelp}>
        <span className={'icon'}></span>
        <div className={'content'}>
          <b>说明</b>
          <p>1、实时搜索数：统计的是关键词被实时搜索次数趋势图</p>
          <p>2、独立搜索数：统计的是独立ip实时搜索关键词的次数趋势图</p>
          <p>3、实时用户数：统计的是实时搜索关键词的用户数</p>
          <p>4、横轴：时间</p>
          <p>5、纵轴：数量</p>
        </div>
      </div>
    </div>
    <div className={'main-chart-list'}>
      <RealTimeSearchChart/>
      <IndividualSearchChart/>
      <RealTimeUserChart/>
    </div>
  </div>  ;
};


