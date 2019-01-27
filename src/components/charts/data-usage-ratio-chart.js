import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {CommonAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";

function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_DATA_USAGE_RATIO,
    payload: data,
  };
}

class DataUsageRatioContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData = () => {
    dataService.getDataUsageRatio().then(data => {
      this.props.onLoadData(data);
    });
  };

  render() {
    const config = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: '数据使用占比',
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
        name: '数据使用占比',
        colorByPoint: true,
        data: this.props.data
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
}

const mapStateToProps = (state) => {
  return {data: state.chartData.dataUsageRatio};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadData: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const DataUsageRatio = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataUsageRatioContent);
