import connect from "react-redux/es/connect/connect";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {dataService} from "../../services/data.service";
import {CommonAction} from "../../store/reducers/actions";

function loadIndividualSearchDataAction(data) {
  return {
    type: CommonAction.LOAD_INDIVIDUAL_SEARCH_DATA,
    payload: data,
  };
}

class IndividualSearchChartContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData = () => {
    dataService.getIndividualSearchData().then(data => {
      this.props.onLoadIndividualSearchData(data);
    });
  };

  render() {
    const chartConfig = {
      chart: {
        zoomType: 'x',
        height: '200'
      },
      title: {
        text: '独立搜索数',
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
        name: '独立搜索数',
        data: this.props.data
      }]
    };

    return (
      <div className="indi-search-chart">
        <HighchartsReact
          highcharts={Highcharts}
          options={chartConfig}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.individualSearchChartData};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadIndividualSearchData: (data) => (
      dispatch(loadIndividualSearchDataAction(data))
    ),
  }
);

export const IndividualSearchChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualSearchChartContent);
