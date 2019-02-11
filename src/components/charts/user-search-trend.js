import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {CommonAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";
import moment from "moment";


function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_USER_SEARCH_TREND,
    payload: data,
  };
}

class UserSearchTrendContent extends React.Component {
  state = {
    selectedTimeRange: 'day',
    startTime: moment().subtract(1, 'days').format('YYYYMMDD') + '-000001',
    endTime: moment().format('YYYYMMDD-hhmmss'),
    unitType: 'hour',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData(this.props.uid);
  }

  getChartData = (uid) => {
    dataService.getUserSearchTrend(this.state.startTime, this.state.endTime, this.state.unitType).then(data => {
      this.props.onLoadData(data);
    });
  };

  changeTime = (evt) => {
    const today = moment();
    this.setState({selectedTimeRange: evt.target.value});
    this.setState({selectedEndTime: today.format('YYYYMMDD-hhmmss')});

    switch(evt.target.value) {
      case 'day':
        const yesterday = today.subtract(1, 'days');
        this.setState({selectedStartTime: moment(yesterday).format('YYYYMMDD-hhmmss')});
        this.setState({unitType: 'hour'});
        break;
      case 'week':
        const weekAgo = today.subtract(1, 'weeks');
        this.setState({selectedStartTime: moment(weekAgo).format('YYYYMMDD-hhmmss')});
        this.setState({unitType: 'day'});
        break;
      case 'month':
        const monthAgo = today.subtract(1, 'months');
        this.setState({selectedStartTime: moment(monthAgo).format('YYYYMMDD-hhmmss')});
        this.setState({unitType: 'day'});
        break;
      case 'year':
        const yearAgo = today.subtract(1, 'years');
        this.setState({selectedStartTime: moment(yearAgo).format('YYYYMMDD-hhmmss')});
        this.setState({unitType: 'month'});
        break;
      default:
        return '';
    }

    this.getChartData();
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
            <select id={'timeSelect'} onChange={this.changeTime} value={this.state.selectedTimeRange}>
              <option value="day">近24小时</option>
              <option value="week">近一周</option>
              <option value="month">近一个月</option>
              <option value="year">近一年</option>
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
