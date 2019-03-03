import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";
import {NavLink} from "react-router-dom";

function loadDataAction(data) {
  return {
    type: CommonAction.LOAD_RELATED_KEYWORD_RANKINGS,
    payload: data,
  };
}

class RelatedKeywordRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getRelatedKeywordRanking(this.props.dataId).then(data => {
      this.props.onLoadData(data);
    });
  };
  //
  render() {
    return (
      <Ranking title={'相关关键词'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.relatedKeywordRanking.map((r, i) => {
      return {
        id: r.collkey,
        rank: i + 1,
        desc: r.keyword,
        value: r.count
      }
    }),
    headers: ['排名', '数据内容', '浏览数'],
    title: '相关数据',
    route: '/data/details'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadData: (data) => (
      dispatch(loadDataAction(data))
    ),
  }
);

export const RelatedKeywordRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedKeywordRankingContent);
