import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "../presentation/ranking";

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
      <Ranking data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.missedKeywordRanking};
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
