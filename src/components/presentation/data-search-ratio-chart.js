import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function DataSearchRatioChart(props) {
  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: '数据搜索占比'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      name: '数据搜索占比',
      colorByPoint: true,
      data: [{
        name: '被搜出来',
        y: 31.41,
        sliced: true,
        selected: true
      }, {
        name: '未被搜出',
        color: '#ed7d31',
        y: 68.59
      }]
    }]
  }
  return (
    <div className="data-search-ratio-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
      />
    </div>
  );
}

export default DataSearchRatioChart;
