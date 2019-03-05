import React from 'react';
import {SearchedKeywordsRanking} from "../rankings/searched-keywords-ranking";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import StateBox from "../stat-boxes/stat-box";
import {dataService} from "../../services/data.service";
import {UserSearchTrend} from "../charts/user-search-trend";
import {NavLink} from "react-router-dom";
import moment from "moment";
import {UserActivityHistory} from "../charts/user-activity-history";
import {userService} from "../../services/user.service";
import {DataBrowseRanking} from "../rankings/data-browse-ranking";

class UserDetails extends React.Component {
  state = {
    isInProgress: false,
    lastUpdated: '',
    stats: {
      searched: {value: 0},
      read: {value: 0},
      liked: {value: 0},
      forwarded: {value: 0},
      reviewed: {value: 0},
      complained: {value: 0}
    },
    recentBrowsed: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    userService.getUserDetailedStats(this.props.userIp).then((result) => {
      const newStats = Object.assign(this.state.stats,
        {searched: {label: '搜索次数', value: result.searched}},
        {read: {label: '阅读次数', value: result.read}},
        {liked: {label: '点赞次数', value: result.liked}},
        {forwarded: {label: '转发次数', value: result.forwarded}},
        {reviewed: {label: '评论次数', value: result.reviewed}},
        {complained: {label: '举报次数', value: result.complained}},
      );
      this.setState({stats: newStats});
      this.setState({lastUpdated: moment(result.lastUpdated).toString()});
    });

    userService.getRecentBrowsed(this.props.userIp).then((result) => {
      this.setState({recentBrowsed: result})
    });
  }

  render() {
    let progress = '';
    if (this.state.isInProgress) {
      progress = <LinearProgress/>
    }

    return (
      <div className="user-details">
        {
          progress
        }
        <div className={'flex-box'}>
          <div className={'flex-2'}>
            <div className={'row'}>
              <div className={'flex-1 stats'}>
                <div className={'row flex-box'}>
                  <div className={'uid flex-1'}>用户 IP： {this.props.userIp}</div>
                  {/*<div className={'uip flex-1'}>用户 IP： {this.state.userIp}</div>*/}
                </div>
                <div className={'row time'}>最近操作时间：{this.state.lastUpdated}</div>
                <div className={'row state-box-container flex-box'}>
                  <StateBox data={this.state.stats.searched}/>
                  <StateBox data={this.state.stats.read}/>
                  <StateBox data={this.state.stats.liked}/>
                  <StateBox data={this.state.stats.forwarded}/>
                  <StateBox data={this.state.stats.reviewed}/>
                  <StateBox data={this.state.stats.complained}/>
                </div>
              </div>
            </div>
            <div className={'row'}>
              <UserSearchTrend ip={this.props.userIp}/>
            </div>
            <div className={'row'}>
              {/*<UserActivityHistory uid={this.props.userIp}/>*/}
            </div>
          </div>
          <div className={'flex-1'}>
            <div className={'row recent-browsed'}>
              <div className="flex-vertical">
                <DataBrowseRanking ip={this.props.userIp} label={'最近浏览的数据'}/>
              </div>
            </div>
            <div className={'row recent-searched'}>
              <SearchedKeywordsRanking ip={this.props.userIp} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
