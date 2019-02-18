import connect from "react-redux/es/connect/connect";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class RealTimeUserChartContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const chartConfig = {
      chart: {
        zoomType: 'x',
        height: '200'
      },
      title: {
        text: '实时用户数',
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
        name: '实时用户数',
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
    data: state.chartData.realTimeUserChartData,
    startTime: state.chartConfig.realTimeUserConfig && state.chartConfig.realTimeUserConfig.startTime,
    endTime: state.chartConfig.realTimeUserConfig && state.chartConfig.realTimeUserConfig.endTime,
    unitType: state.chartConfig.realTimeUserConfig && state.chartConfig.realTimeUserConfig.unitType,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch
  }
);

export const RealTimeUserChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(RealTimeUserChartContent);
