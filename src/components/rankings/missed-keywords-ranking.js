import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadMissedKeywordsRankingAction(data) {
  return {
    type: CommonAction.LOAD_MISSED_KEYWORD_RANKING,
    payload: data,
  };
}

class MissedKeywordsRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getMissedKeywordsRanking().then(data => {
      this.props.onLoadMissedKeywordsRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'搜索未命中排行榜 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.missedKeywordRanking.map((r, i) => {
      return {
        id: r.keyword,
        rank: i + 1,
        desc: r.keyword,
        value: r.count
      }
    }),
    headers: ['排名', '关键词', '搜索次数'],
    title: '搜索未命中排行榜 TOP 10'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadMissedKeywordsRanking: (data) => (
      dispatch(loadMissedKeywordsRankingAction(data))
    ),
  }
);

export const MissedKeywordsRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(MissedKeywordsRankingContent);
