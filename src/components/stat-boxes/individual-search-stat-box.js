import connect from "react-redux/es/connect/connect";
import React from "react";
import {StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import StateBox from "./stat-box";

function loadStatsAction(data) {
  return {
    type: StatsAction.LOAD_INDIVIDUAL_SEARCH,
    payload: data,
  };
}

class IndividualSearchStatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    dataService.getIndividualSearchStats().then(data => {
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
  return {data: state.individualSearchStats};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadStats: (data) => (
      dispatch(loadStatsAction(data))
    ),
  }
);

export const IndividualSearchStat = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualSearchStatContent);
