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
    dataService.getAverageSearchStats().then(data => {
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
  return {data: state.averageSearchStats};
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
