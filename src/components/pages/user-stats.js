import React from 'react';
import Ranking from "../presentation/ranking";
import {chinaMap} from "../../data/china-map";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function UserStats(props) {
  const mapData = [
    ['cn-3664', 0],
    ['cn-gd', 1],
    ['cn-sh', 2],
    ['cn-zj', 3],
    ['cn-ha', 4],
    ['cn-xz', 5],
    ['cn-yn', 6],
    ['cn-ah', 7],
    ['cn-hu', 8],
    ['cn-sa', 9],
    ['cn-cq', 10],
    ['cn-gz', 11],
    ['cn-hn', 12],
    ['cn-sc', 13],
    ['cn-sx', 14],
    ['cn-he', 15],
    ['cn-jx', 16],
    ['cn-nm', 17],
    ['cn-gx', 18],
    ['cn-hl', 19],
    ['cn-fj', 20],
    ['cn-bj', 21],
    ['cn-hb', 22],
    ['cn-ln', 23],
    ['cn-sd', 24],
    ['cn-tj', 25],
    ['cn-js', 26],
    ['cn-qh', 27],
    ['cn-gs', 28],
    ['cn-xj', 29],
    ['cn-jl', 30],
    ['cn-nx', 31]
  ];
  const mapOptions = {
    title: {
      text: ''
    },
    colorAxis: {
      min: 0,
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },
    series: [{
      mapData: chinaMap,
      name: 'China',
      data: mapData,
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }]
  };

  const chartOptions = {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: '搜索关键词',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

    }, {
      name: '使用数据',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

    }]
  };

  const searchUserRanking = {
    rankingItems: [
      {id: 1, rank: 1, desc: '223345746745', value: 999},
      {id: 2, rank: 2, desc: '666645746745', value: 777},
      {id: 3, rank: 3, desc: '845645746745', value: 666},
      {id: 4, rank: 4, desc: '905645746745', value: 664},
      {id: 5, rank: 5, desc: '115645746745', value: 444},
      {id: 6, rank: 6, desc: '225645746745', value: 77},
      {id: 7, rank: 7, desc: '335645746745', value: 76},
      {id: 8, rank: 8, desc: '345645746745', value: 44},
      {id: 9, rank: 9, desc: '665645746745', value: 33},
      {id: 10, rank: 10, desc: '885645746745', value: 32},
    ],
    headers: ['排名', 'UID', '搜索次数'],
    title: '搜索用户 TOP 10',
    route: '/missed-keyword'
  };

  const browseUserRanking = {
    rankingItems: [
      {id: 1, rank: 1, desc: '223345746745', value: 999},
      {id: 2, rank: 2, desc: '666645746745', value: 777},
      {id: 3, rank: 3, desc: '845645746745', value: 666},
      {id: 4, rank: 4, desc: '905645746745', value: 664},
      {id: 5, rank: 5, desc: '115645746745', value: 444},
      {id: 6, rank: 6, desc: '225645746745', value: 77},
      {id: 7, rank: 7, desc: '335645746745', value: 76},
      {id: 8, rank: 8, desc: '345645746745', value: 44},
      {id: 9, rank: 9, desc: '665645746745', value: 33},
      {id: 10, rank: 10, desc: '885645746745', value: 32},
    ],
    headers: ['排名', 'UID', '阅读数'],
    title: '浏览用户 TOP 10',
    route: '/missed-keyword'
  };

  return (
    <div className="user-stats">
      <div className={'left'}>
        <div className={'user-search-trend'}>
          <div className={'box-header'}>
            <div className={'box-header-block'}></div>
            <div className={'title'}>用户搜索/使用趋势图</div>
            <div className={'tooltip'}></div>
            <div className={'select'}>
              <select>
                <option>近24小时</option>
                <option>近一周</option>
                <option>近一个月</option>
                <option>近一年</option>
              </select>
            </div>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
        </div>
        <div className={'main-user-map'}>
          <div className={'box-header'}>
            <div className={'box-header-block'}></div>
            <div className={'title'}>用户地理位置分布图</div>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'mapChart'}
            options={mapOptions}
          />
        </div>
      </div>
      <div className={'right'}>
        <Ranking data={searchUserRanking}/>
        <Ranking data={browseUserRanking}/>
      </div>
    </div>
  );
}

export default UserStats;
