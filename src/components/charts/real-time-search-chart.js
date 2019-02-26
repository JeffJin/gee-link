import connect from "react-redux/es/connect/connect";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class RealTimeSearchChartContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const chartConfig = {
      credits: {
        enabled: false
      },
      chart: {
        zoomType: 'x',
        height: '200'
      },
      title: {
        text: '实时搜索数',
        style: {
          color: '#cc6633',
        }
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        min: 0,
        startOnTick: false,
        title: {
          text: '搜索数'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: '实时搜索数',
        data: this.props.data
      }]
    };

    return (
      <div className="real-time-search-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartConfig}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.chartData.realTimeSearchChartData,
    startTime: state.chartConfig.realTimeSearchConfig && state.chartConfig.realTimeSearchConfig.startTime,
    endTime: state.chartConfig.realTimeSearchConfig && state.chartConfig.realTimeSearchConfig.endTime,
    unitType: state.chartConfig.realTimeSearchConfig && state.chartConfig.realTimeSearchConfig.unitType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
};

export const RealTimeSearchChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(RealTimeSearchChartContent);
