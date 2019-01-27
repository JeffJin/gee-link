import connect from "react-redux/es/connect/connect";
import React from "react";
import { StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import StateBox from "./stat-box";

function loadStatsAction(data) {
  return {
    type: StatsAction.LOAD_TOTAL_DATA,
    payload: data,
  };
}

class TotalDataStatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    dataService.getTotalDataStats().then(data => {
      this.props.onLoadStats(data.value);
    });
  };

  render() {
    return (
      <StateBox data={this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {value: state.stats.totalDataStats, label: '总数据条数'};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadStats: (data) => (
      dispatch(loadStatsAction(data))
    ),
  }
);

export const TotalDataStat = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalDataStatContent);
