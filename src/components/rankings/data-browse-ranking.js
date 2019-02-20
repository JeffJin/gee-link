import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadDataBrowseRankingAction(data) {
  return {
    type: CommonAction.LOAD_DATA_BROWSE_RANKINGS,
    payload: data,
  };
}

class DataBrowseRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getDataBrowseRanking('month').then(data => {
      this.props.onLoadDataBrowseRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'数据浏览 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.dataBrowseRanking.map((r, i) => {
      return {
        id: r.collkey,
        rank: i + 1,
        desc: r.subject,
        value: r.count
      }
    }),
    headers: ['排名', '数据内容', '被使用次数'],
    title: '使用排行榜 TOP 10',
    route: '/user'
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadDataBrowseRanking: (data) => (
      dispatch(loadDataBrowseRankingAction(data))
    ),
  }
);

export const DataBrowseRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(DataBrowseRankingContent);
