import React from 'react';
import LinearProgress from "@material-ui/core/es/LinearProgress";
import {CategorizedRanking} from "../rankings/categorized-ranking";
import StateBox from "../stat-boxes/stat-box";
import {KeywordSearchTrend} from "../charts/keyword-search-trend";
import {dataService} from "../../services/data.service";
import {RecentSearchUserRanking} from "../rankings/recent-search-user-ranking";
import {DataUsageRanking} from "../rankings/data-usage-ranking";

class KeywordDetails extends React.Component {
  state = {
    isInProgress: false,
    stats: {
      searched: {value: 0},
      searchedUsers: {value: 0},
      targeted: {value: 0},
      average: {value: 0}
    }
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    dataService.getKeywordStats(this.props.keywordId).then((result) => {
      const newStats = Object.assign(this.state.stats,
        {searched: {label: '被搜索次数', value: result.searched}},
        {searchedUsers: {label: '搜索用户数', value: result.searchedUsers}},
        {targeted: {label: '命中记录数', value: result.targeted}},
        {average: {label: '人均搜索次数', value: result.average}},
      );
      this.setState({stats: newStats})
    })
  }

  render() {
    let progress = '';
    if (this.state.isInProgress) {
      progress = <LinearProgress/>
    }

    return (
      <div className="keyword-details">
        {
          progress
        }
        <div className={'row title'}>
          <div>关键词： {this.props.keywordId}</div>
        </div>
        <div className={'row flex-box'}>
          <div className={'flex-2'}>
            <div className={'flex-box stat-box-container'}>
              <StateBox data={this.state.stats.searched}/>
              <StateBox data={this.state.stats.searchedUsers}/>
              {/*<StateBox data={this.state.stats.targeted}/>*/}
              <StateBox data={this.state.stats.average}/>
            </div>
            <div className={'row'}>
              <KeywordSearchTrend keyword={this.props.keywordId}/>
            </div>
          </div>
          <div className={'flex-1'}>
            {/*<CategorizedRanking keyword={this.props.keywordId} label={'命中文章类别分布'}/>*/}
            <RecentSearchUserRanking keyword={this.props.keywordId}/>
          </div>
        </div>
        {/*<div className={'row'}>*/}
          {/*<div className={'ranking-container flex-box'}>*/}
            {/*<div className={'flex-1'}>*/}
              {/*<DataUsageRanking label={'被浏览数据 TOP 10'} keyword={this.props.keywordId}/>*/}
            {/*</div>*/}
            {/*<div className={'flex-1'}>*/}
              {/*<RecentSearchUserRanking keyword={this.props.keywordId}/>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default KeywordDetails;
