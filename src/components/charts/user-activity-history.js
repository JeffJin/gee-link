import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import connect from "react-redux/es/connect/connect";
import { StrGraph } from 'calendar-graph';

function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_USER_ACTIVITY_HISTORY,
    payload: data,
  };
}

class UserActivityHistoryContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getChartData(this.props.uid);
  }

  getChartData = (uid) => {
    dataService.getUserActivityHistory(uid).then(data => {
      this.props.onLoadData(data);
    });
  };

  render() {
    const data = [
      { date: '2016-01-01', count: 1 },
      { date: '2016-01-03', count: 4 },
      { date: '2016-01-06', count: 2 },
      { date: '2016-01-07', count: 12 },
      { date: '2016-01-08', count: 23 },
      { date: '2016-02-11', count: 32 },
      { date: '2016-02-12', count: 2 },
      { date: '2016-02-22', count: 12 },
      { date: '2016-03-23', count: 62 },
      { date: '2016-03-24', count: 26 },
    ];


    const strGraph = new StrGraph(data, {
      startDate: new Date('2016-01-01'),
      endDate: new Date('2016-12-01'),
      colorFun: (v) => {
        return '#d6e685';
      },
      onClick: v => {},
      size: 12,
      space: 1,
      padX: 20,
      padY: 20,
      styleOptions: {
        textColor: '#959494',
        fontSize: '12px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }
    });
    return (
      <div className={'user-activity-history'}>
        <div className={'box-header'}>
          <div className={'box-header-block'}></div>
          <div className={'title'}>用户行为轨迹图</div>
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
        {
          <div dangerouslySetInnerHTML = {{__html:strGraph.render()}}></div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.chartData.userActivityHistory};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadData: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const UserActivityHistory = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserActivityHistoryContent);
