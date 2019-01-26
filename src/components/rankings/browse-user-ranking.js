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
      <Ranking data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.browseUserRanking};
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
