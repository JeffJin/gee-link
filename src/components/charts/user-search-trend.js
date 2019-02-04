import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {CommonAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";


function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_USER_SEARCH_TREND,
    payload: data,
  };
}

class UserSearchTrendContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData(this.props.uid);
  }

  getChartData = (uid) => {
    dataService.getUserSearchTrend(uid).then(data => {
      this.props.onLoadData(data);
    });
  };

  render() {
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
        categories: this.props.data.times,
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
      series: this.props.data.data
    };

    return (
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
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.chartData.userSearchTrend};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadData: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const UserSearchTrend = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearchTrendContent);
