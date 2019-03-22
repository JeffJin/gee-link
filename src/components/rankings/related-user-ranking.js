import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadRelatedUserRankingAction(data) {
  return {
    type: CommonAction.LOAD_RELATED_USER_RANKINGS,
    payload: data,
  };
}

class RelatedUserRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getRelatedUserRanking(this.props.dataId).then(data => {
      this.props.onLoadRelatedUserRanking(data);
    });
  };
  //
  render() {
    return (
      <Ranking title={'使用用户'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.relatedUserRanking.map((r, i) => {
      return {
        id: r.ip,
        rank: i + 1,
        desc: r.ip,
        value: r.count
      }
    }),
    headers: ['排名', '关键词', '浏览数'],
    title: '相关数据',
    route: '/user/details'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadRelatedUserRanking: (data) => (
      dispatch(loadRelatedUserRankingAction(data))
    ),
  }
);

export const RelatedUserRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(RelatedUserRankingContent);
