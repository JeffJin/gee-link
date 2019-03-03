import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction} from "../../store/reducers/actions";
import {rankingService} from "../../services/ranking.service";
import Ranking from "./ranking";
import moment from "moment";

function loadDataUsageRankingAction(data) {
  return {
    type: CommonAction.LOAD_DATA_USAGE_RANKINGS,
    payload: data,
  };
}

class DataUsageRankingContent extends React.Component {
  state = {
    selectedTimeRange: 'year',
    startTime: moment().subtract(1, 'days').format('YYYYMMDD') + '-000001',
    endTime: moment().format('YYYYMMDD-hhmmss'),
    unitType: 'hour',
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData(this.state.selectedTimeRange);
  }

  getData = (timeRange) => {
    rankingService.getDataUsageRanking(timeRange, this.props.keyword || '').then(data => {
      this.props.onLoadDataUsageRanking(data);
    });
  };

  render() {
    return (
      <Ranking title={this.props.label || '使用排行榜 TOP 10'} data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rankingItems: state.ranking.dataUsageRanking.map((r, i) => {
      return {
        id: r.collkey,
        rank: i + 1,
        desc: r.subject,
        value: r.count
      }
    }),
    headers: ['排名', '标题内容', '被浏览次数'],
    title: '使用排行榜 TOP 10',
    route: '/data/details'
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
