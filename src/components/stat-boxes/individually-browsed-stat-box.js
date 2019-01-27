import connect from "react-redux/es/connect/connect";
import React from "react";
import {StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import StateBox from "./stat-box";

function loadStatsAction(data) {
  return {
    type: StatsAction.LOAD_INDIVIDUALLY_BROWSED,
    payload: data,
  };
}

class IndividuallyBrowsedStatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    dataService.getIndividuallyBrowsedStats().then(data => {
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
  return {value: state.stats.individuallyBrowsedStats, label: '独立浏览次数'};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadStats: (data) => (
      dispatch(loadStatsAction(data))
    ),
  }
);

export const IndividuallyBrowsedStat = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividuallyBrowsedStatContent);
