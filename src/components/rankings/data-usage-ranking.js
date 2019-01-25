import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "../presentation/ranking";

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
      <Ranking data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.dataUsageRanking};
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
