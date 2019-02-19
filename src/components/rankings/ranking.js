import React from 'react';
import {NavLink} from "react-router-dom";
import moment from "moment";

export default class Ranking extends React.Component {
  state = {
    selectedTimeRange: 'month',
    startTime: moment().subtract(1, 'days').format('YYYYMMDD') + '-000001',
    endTime: moment().format('YYYYMMDD-hhmmss'),
    unitType: 'day',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

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

    this.updateConfigs();
  };

  updateConfigs() {

  }

  render() {
    return <div className="ranking">
      <div className={'ranking-header'}>
        <div className={'ranking-header-block'}></div>
        <div className={'title'}>{this.props.title}</div>
        <div className={'tooltip'}></div>
        <div className={'select'}>
          <select id={'timeSelect'} onChange={this.changeTime} value={this.state.selectedTimeRange} disabled>
            <option value="day">近24小时</option>
            <option value="week">近一周</option>
            <option value="month">近一个月</option>
            <option value="year">近一年</option>
          </select>
        </div>
      </div>
      <div className={'headers'}>
        {
          this.props.data.headers.map((h, index) => (
            <div key={index} className={'header-' + index}>
              {h}
            </div>
          ))
        }
      </div>
      <div className={'ranking-items'}>
        {
          this.props.data.rankingItems.map((item, index) => (
            <div key={index} className="ranking-item">
              <div className={'ranking-col-0'}>{item.rank}.</div>
              <div className={'ranking-col-1'}><NavLink to={`${this.props.data.route}/${item.id}`} className='nav'>{item.desc}</NavLink></div>
              <div className={'ranking-col-2'}>{item.value}</div>
            </div>
          ))
        }
      </div>
    </div>
  }
}