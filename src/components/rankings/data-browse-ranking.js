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
    rankingService.getDataBrowseRanking().then(data => {
      this.props.onLoadDataBrowseRanking(data);
    });
  };

  render() {
    return (
      <Ranking data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.dataBrowseRanking};
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
