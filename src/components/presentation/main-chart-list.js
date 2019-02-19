import React from "react";
import {RealTimeUserChart} from "../charts/real-time-user-chart";
import {IndividualSearchChart} from "../charts/individual-search-chart";
import {RealTimeSearchChart} from "../charts/real-time-search-chart";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import moment from "moment";
import {CommonAction} from "../../store/reducers/actions";
import connect from "react-redux/es/connect/connect";
import {dataService} from "../../services/data.service";
import {utils} from "../../services/utils";

export class MainChartListContent extends React.Component {
  state = {
    isInProgress: false,
    isChartHelpShown: false,
    selectedTimeRange: 'month'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const today = moment();
    const endTime = today.format('YYYYMMDD-hhmmss');
    let startTime = moment().subtract(1, 'days').format('YYYYMMDD') + '-000001';
    this.updateCharts(startTime, endTime, 'hour');
  }

  showChartHelp() {

  }

  changeTime = (evt) => {
    this.setState({selectedTimeRange: evt.target.value});
    const timeConfig = utils.getSelectedTimeRange(evt.target.value);
    this.props.dispatch({
      type: CommonAction.LOAD_REAL_TIME_SEARCH_CONFIG,
      payload: timeConfig
    });

    this.updateCharts(timeConfig.startTime, timeConfig.endTime, this.state.selectedTimeRange);
  };

  updateCharts(startTime, endTime, unitType) {
    dataService.getRealTimeSearchData(startTime, endTime, unitType).then(data => {
      console.log('real time search data', data);
      this.props.dispatch({
        type: CommonAction.LOAD_REAL_TIME_SEARCH_DATA,
        payload: data
      });
    });

    dataService.getIndividualSearchData(startTime, endTime, unitType).then(data => {
      this.props.dispatch({
        type: CommonAction.LOAD_INDIVIDUAL_SEARCH_DATA,
        payload: data
      });
    });

    dataService.getRealTimeUserData(startTime, endTime, unitType).then(data => {
      this.props.dispatch({
        type: CommonAction.LOAD_REAL_TIME_USER_DATA,
        payload: data
      });
    });
  }

  render() {
    let progress = '';
    if (this.state.isInProgress) {
      progress = <LinearProgress/>
    }

    return (
      <div className={'chart'}>
        <div className={'chart-header'}>
          <div className={'chart-header-block'}></div>
          <div className={'title'}>实时搜索</div>
          <div className={`help${this.state.isChartHelpShown ? ' active' : ''}`} onClick={this.showChartHelp}>
            <span className={'icon'}></span>
            <div className={'content'}>
              <b>说明</b>
              <p>1、实时搜索数：统计的是关键词被实时搜索次数趋势图</p>
              <p>2、独立搜索数：统计的是独立ip实时搜索关键词的次数趋势图</p>
              <p>3、实时用户数：统计的是实时搜索关键词的用户数</p>
              <p>4、横轴：时间</p>
              <p>5、纵轴：数量</p>
            </div>
          </div>
          <div className={'box-header'}>
            <div className={'select'}>
              <select id={'timeSelect'} onChange={this.changeTime} value={this.state.selectedTimeRange}>
                <option value="day">近24小时</option>
                <option value="week">近一周</option>
                <option value="month">近一个月</option>
                <option value="year">近一年</option>
              </select>
            </div>
          </div>
        </div>
        <div className={'main-chart-list'}>
          <RealTimeSearchChart />
          <IndividualSearchChart />
          <RealTimeUserChart />
        </div>
      </div>
    )
  };
}



const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch
  }
);

export const MainChartList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainChartListContent);


