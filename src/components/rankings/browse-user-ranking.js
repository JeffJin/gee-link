import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadBrowseUserRankingAction(data) {
  return {
    type: CommonAction.LOAD_BROWSE_USER_RANKINGS,
    payload: data,
  };
}

class BrowseUserRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getBrowseUserRanking().then(data => {
      this.props.onLoadBrowseUserRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'浏览用户 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    rankingItems: state.ranking.browseUserRanking.map((r, i) => {
      return {
        id: r.keyword,
        rank: i + 1,
        desc: r.keyword,
        value: r.count
      }
    }),
    headers: ['排名', 'UID', '搜索次数'],
    title: '搜索用户 TOP 10',
    route: '/missed-keyword'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadBrowseUserRanking: (data) => (
      dispatch(loadBrowseUserRankingAction(data))
    ),
  }
);

export const BrowseUserRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseUserRankingContent);
