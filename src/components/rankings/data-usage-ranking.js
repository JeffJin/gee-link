import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadDataUsageRankingAction(data) {
  return {
    type: CommonAction.LOAD_DATA_USAGE_RANKINGS,
    payload: data,
  };
}

class DataUsageRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getDataUsageRankings().then(data => {
      this.props.onLoadDataUsageRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'使用排行榜 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.dataUsageRanking,
    headers: ['排名', '标题内容', '被浏览次数'],
    title: '数据浏览 TOP 10',
    route: '/data'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadDataUsageRanking: (data) => (
      dispatch(loadDataUsageRankingAction(data))
    ),
  }
);

export const DataUsageRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataUsageRankingContent);
