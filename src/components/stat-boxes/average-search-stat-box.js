import connect from "react-redux/es/connect/connect";
import React from "react";
import {StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import StateBox from "./stat-box";

function loadStatsAction(data) {
  return {
    type: StatsAction.LOAD_AVERAGE_SEARCH,
    payload: data,
  };
}

class AverageSearchStatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const p1 = dataService.getTotalSearchStats(),
      p2 =dataService.getIndividualUserStats();
    Promise.all([p1, p2]).then(([total, users]) => {
      console.log(total, users);
      this.props.onLoadStats(Math.ceil(total.count / users.count));
    });
  };

  render() {
    return (
      <StateBox data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {value: state.stats.averageSearchStats, label: '人均搜索数'};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadStats: (data) => (
      dispatch(loadStatsAction(data))
    ),
  }
);

export const AverageSearchStat = connect(
  mapStateToProps,
  mapDispatchToProps
)(AverageSearchStatContent);
