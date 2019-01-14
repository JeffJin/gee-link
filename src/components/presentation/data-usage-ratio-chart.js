import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function DataUsageRatioChart(props) {
  const config = {
    chart: {
      plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
      text: '数据使用占比'
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
      name: '数据使用占比',
      colorByPoint: true,
      data: [{
        name: '使用',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: '未使用',
        color: '#ed7d31',
        y: 38.59
      }]
    }]
  };
  return (
    <div className="data-usage-ratio-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
      />
    </div>
  );
}

export default DataUsageRatioChart;
