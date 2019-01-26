import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";

function loadSearchedKeywordsRankingAction(data) {
  return {
    type: CommonAction.LOAD_SEARCHED_KEYWORD_RANKINGS,
    payload: data,
  };
}

class SearchedKeywordsRankingContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    rankingService.getSearchedKeywordsRanking().then(data => {
      this.props.onLoadSearchedKeywordsRanking(data);
    });
  };

  render() {
    return (
      <Ranking data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.searchedKeywordsRanking};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadSearchedKeywordsRanking: (data) => (
      dispatch(loadSearchedKeywordsRankingAction(data))
    ),
  }
);

export const SearchedKeywordsRanking = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchedKeywordsRankingContent);
