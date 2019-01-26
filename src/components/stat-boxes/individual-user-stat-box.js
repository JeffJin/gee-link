import connect from "react-redux/es/connect/connect";
import React from "react";
import {StatsAction} from "../../store/reducers/actions";
import {dataService} from "../../services/data.service";
import StateBox from "./stat-box";

function loadStatsAction(data) {
  return {
    type: StatsAction.LOAD_INDIVIDUAL_USER,
    payload: data,
  };
}

class IndividualUserStatContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    dataService.getIndividualUserStats().then(data => {
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
  return {data: state.individualUserStats};
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatch: dispatch,
    onLoadStats: (data) => (
      dispatch(loadStatsAction(data))
    ),
  }
);

export const IndividualUserStat = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualUserStatContent);
