import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";
import {NavLink} from "react-router-dom";

function loadRelatedDataRankingAction(data) {
  return {
    type: CommonAction.LOAD_RELATED_DATA_RANKINGS,
    payload: data,
  };
}

class RelatedDataRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getRelatedDataRanking().then(data => {
      this.props.onLoadRelatedDataRanking(data);
    });
  };
  //
  render() {
    return (
      <Ranking title={'相关数据'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.relatedDataRanking.map((r, i) => {
      return {
        id: r.keyword,
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
    onLoadRelatedDataRanking: (data) => (
      dispatch(loadRelatedDataRankingAction(data))
    ),
  }
);

export const RelatedDataRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedDataRankingContent);
