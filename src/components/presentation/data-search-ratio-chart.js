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
      text: '数据搜索占比',
      style: {
        color: '#cc6633',
      }
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
      data: props.data
    }]
  };
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
