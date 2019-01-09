import React from 'react';
import MainRealTimeChart from "../presentation/main-real-time-chart";
import RankingList from "../presentation/ranking-list";
import {connect} from "react-redux";
import {dataService} from "../../services/data.service";


function openStatDetails(id) {
  return {
    type: 'OPEN_STAT_DETAILS',
    id: id,
  };
}


function loadTotalStats(stats) {
  return {
    type: 'LOAD_TOTAL_STATS',
    payload: stats,
  };
}

const labelDictionary = {
  totalData: '总数据数',
  totalSearch: '总搜索数',
  individualSearch: '独立搜索数',
  individualUsers: '独立用户数'
};

const StateBoxes = (props) => {
  return <div className={'stat-box-container'}>
      {
        props.stateBoxes.map((box, index) => (
          <div
            key={index}
            className={'stat-box'}
            onClick={() => props.onClick(box.key)}
          >
            <div className={'value'}>{box.value}</div>
            <div className={'desc'}>{box.label}</div>
          </div>
        ))
      }
    </div>;
};

const mapStateToStatBoxProps = (state) => {
  const stateBoxes = [];
  for (let k in state.totalStats) {
    if (state.totalStats.hasOwnProperty(k)) {
      stateBoxes.push({key: k, value: state.totalStats[k], label: labelDictionary[k]})
    }
  }
  return {
    stateBoxes,
  };
};

const mapDispatchToStatBoxProps = (dispatch) => (
  {
    onClick: (id) => (
      dispatch(openStatDetails(id))
    ),
  }
);

const TotalStats = connect(
  mapStateToStatBoxProps,
  mapDispatchToStatBoxProps
)(StateBoxes);

const mapStateToMainPageProps = (state) => {
  return {...state};
};

const mapDispatchToMainPageProps = (dispatch) => (
  {
    onLoadStats: (stats) => (
      dispatch(loadTotalStats(stats))
    ),
    dispatch: dispatch
  }
);

class MainPageContent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getTotalStats();
  }

  getTotalStats = () => {
    dataService.getTotalStats().then(stats => {
      console.log('data service returned', stats);
      this.props.onLoadStats(stats);
    });
  };

  render() {
    return (
      <div className="main">
        <TotalStats/>
        <div className={'chart-container'}>
          <MainRealTimeChart />
          <div>China Map</div>
        </div>
        <div className={'table-container'}>
          <RankingList />
        </div>
      </div>
    );
  }
}

const MainPage = connect(
  mapStateToMainPageProps,
  mapDispatchToMainPageProps
)(MainPageContent);

export default MainPage;
