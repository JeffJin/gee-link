import connect from "react-redux/es/connect/connect";
import React from "react";
import {CommonAction, StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import StateBox from "./stat-box";

function loadStatsAction(data) {
  return {
    type: StatsAction.LOAD_TOTAL_SEARCH,
    payload: data,
  };
}

class TotalSearchStatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    dataService.getTotalSearchStats().then(data => {
      this.props.onLoadStats(data);
    });
  };

  render() {
    return (
      <StateBox data={this.props.data}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {data: state.totalSearchStats};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadStats: (data) => (
      dispatch(loadStatsAction(data.value))
    ),
  }
);

export const TotalSearchStat = connect(
  mapStateToProps,
  mapDispatchToProps
)(TotalSearchStatContent);
