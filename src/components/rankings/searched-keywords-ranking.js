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
    this.getData(this.props.ip || '');
  }

  getData = (ip) => {
    rankingService.getSearchedKeywordsRanking(ip).then(data => {
      this.props.onLoadSearchedKeywordsRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={'关键词搜索 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      rankingItems: state.ranking.searchedKeywordsRanking.map((r, i) => {
        return {
          id: r.keyword,
          rank: i + 1,
          desc: r.keyword,
          value: r.count
        }
      }),
      headers: ['排名', '关键词', '被搜索次数'],
      title: '关键词搜索 TOP 10',
      route: '/keyword/details'
    };
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
