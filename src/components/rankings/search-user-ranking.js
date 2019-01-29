import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadSearchUserRankingAction(data) {
  return {
    type: CommonAction.LOAD_SEARCH_USER_RANKINGS,
    payload: data,
  };
}

class SearchUserRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getSearchUserRanking().then(data => {
      this.props.onLoadSearchUserRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'搜索用户 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.searchUserRanking.map((r, i) => {
      return {
        id: r.ip,
        rank: i + 1,
        desc: r.ip,
        value: r.count
      }
    }),
    headers: ['排名', '用户ID', '搜索次数'],
    title: '搜索用户 TOP 10',
    route: '/user'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadSearchUserRanking: (data) => (
      dispatch(loadSearchUserRankingAction(data))
    ),
  }
);

export const SearchUserRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchUserRankingContent);
