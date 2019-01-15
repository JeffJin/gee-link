import Ranking from "../presentation/ranking";
import connect from "react-redux/es/connect/connect";
import React from "react";

const RankingListContent = (props) => {
  return <div className={'ranking-container'}>
    <div className={'ranking'}><Ranking data={props.keywordSearchTop10}/></div>
    <div className={'ranking'}><Ranking data={props.dataBrowseTop10} /></div>
    <div className={'ranking'}><Ranking data={props.searchUserTop10} /></div>
  </div>;
};

const mapStateToRankingListProps = (state) => {
  const keywordSearchTop10 = {
    rankingItems: state.keywordSearchRankings.slice(0, 10),
    headers: ['排名', '关键词', '被搜索次数'],
    title: '关键词搜索 TOP 10',
    route: '/keyword'
  };

  const dataBrowseTop10 = {
    rankingItems: state.dataBrowseRankings.slice(0, 10),
    headers: ['排名', '标题内容', '被浏览次数'],
    title: '数据浏览 TOP 10',
    route: '/data'
  };

  const searchUserTop10 = {
    rankingItems: state.searchUserRankings.slice(0, 10),
    headers: ['排名', '用户ID', '搜索次数'],
    title: '搜索用户 TOP 10',
    route: '/user'
  };

  return {
    keywordSearchTop10,
    dataBrowseTop10,
    searchUserTop10
  };
};

const mapDispatchToRankingListProps = (dispatch) => (
  {
    dispatch: dispatch
  }
);

export const RankingLists = connect(
  mapStateToRankingListProps,
  mapDispatchToRankingListProps
)(RankingListContent);
