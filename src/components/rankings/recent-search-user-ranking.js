import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadRecentSearchUserRankingAction(data) {
  return {
    type: CommonAction.LOAD_RECENT_SEARCH_USER_RANKINGS,
    payload: data,
  };
}

class RecentSearchUserRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData(this.props.keyword);
  }

  getData = (keyword) => {
    rankingService.getRecentSearchUserRanking(keyword).then(data => {
      this.props.onLoadRecentSearchUserRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'最近搜索用户'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.recentSearchUserRanking.map((r, i) => {
      return {
        id: r.ip,
        rank: i + 1,
        desc: r.ip,
        value: r.count
      }
    }),
    headers: ['排名', '用户ID', '时间'],
    title: '最近搜索用户',
    route: '/user'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadRecentSearchUserRanking: (data) => (
      dispatch(loadRecentSearchUserRankingAction(data))
    ),
  }
);

export const RecentSearchUserRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentSearchUserRankingContent);
