import React from 'react';
import {SearchUserRanking} from "../rankings/search-user-ranking";
import {DataBrowseRanking} from "../rankings/data-browse-ranking";
import {SearchedKeywordsRanking} from "../rankings/searched-keywords-ranking";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import {CategorizedRanking} from "../rankings/categorized-ranking";
import StateBox from "../stat-boxes/stat-box";
import {KeywordSearchTrend} from "../charts/keyword-search-trend";
import {dataService} from "../../services/data.service";
import {RelatedDataRanking} from "../rankings/related-data-ranking";
import {RecentSearchUserRanking} from "../rankings/recent-search-user-ranking";

class UserDetails extends React.Component {
  state = {
    isInProgress: false,
    stats: {
      searched: {label: '被搜索次数', value: 0},
      searchedUsers: {label: '搜索用户数', value: 0},
      targeted: {label: '命中记录数', value: 0},
      average: {label: '人均搜索次数', value: 0}
    }
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    dataService.getKeywordStats(this.props.keywordId).then((result) => {
      const newStats = Object.assign(this.state.stats,
        {searched: {value: result.searched}},
        {searchedUsers: {value: result.searched}},
        {targeted: {value: result.targeted}},
        {average: {value: result.average}},
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
        <div className={'row'}>
          <div>用户ID： {this.props.userId}</div>
        </div>
        <div className={'row flex-box'}>
          <div className={'flex-2'}>
            <div className={'row stat-box-container'}>
              <StateBox data={this.state.stats.searched}/>
              <StateBox data={this.state.stats.searchedUsers}/>
              <StateBox data={this.state.stats.targeted}/>
              <StateBox data={this.state.stats.average}/>
            </div>
            <div className={'row'}>
              <KeywordSearchTrend keyword={this.props.keywordId}/>
            </div>
          </div>
          <div className={'flex-1'}>
            <CategorizedRanking/>
          </div>
        </div>
        <div className={'row'}>
          <div className={'ranking-container'}>
            <DataBrowseRanking/>
            <RelatedDataRanking/>
            <RecentSearchUserRanking/>
          </div>
          ;
        </div>
      </div>
    );
  }
}

export default UserDetails;
