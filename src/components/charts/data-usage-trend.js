import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import {CommonAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";
import moment from "moment";


function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_DATA_USAGE_TREND,
    payload: data,
  };
}

class DataUsageTrendContent extends React.Component {
  state = {
    selectedTimeRange: 'year',
    startTime: moment().subtract(1, 'years').format('YYYYMMDD') + '-000001',
    endTime: moment().format('YYYYMMDD-hhmmss'),
    unitType: 'day',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData = () => {
    dataService.getDataUsageTrend(this.state.startTime, this.state.endTime, this.state.unitType).then(data => {
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
    const config = {
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
        data: this.props.data,
        dataLabels: {
          enabled: true,
          rotation: -90,
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
      <div className={'data-usage-trend'}>
        <div className={'box-header'}>
          <div className={'box-header-block'}></div>
          <div className={'title'}>数据使用趋势图</div>
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
          options={config}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.chartData.dataUsageTrend};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadData: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const DataUsageTrend = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataUsageTrendContent);