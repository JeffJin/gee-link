import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

function SearchConversion(props) {
  const config = {
    chart: {
      type: 'bar'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -45,
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: '<b>{point.y:.1f} millions</b>'
    },
    series: [{
      name: 'Population',
      data: props.data,
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  };
  return (
    <div className={'search-conversion'}>
      <div className={'box-header'}>
        <div className={'box-header-block'}></div>
        <div className={'title'}>搜索-点击转化率</div>
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
        options={config}
      />
    </div>
  );
}

export default SearchConversion;