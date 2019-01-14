import connect from "react-redux/es/connect/connect";
import React from "react";

const labelDictionary = {
  totalData: '总数据数',
  totalSearch: '总搜索数',
  individualSearch: '独立搜索数',
  individualUsers: '独立用户数'
};

function openStatDetails(id) {
  return {
    type: 'OPEN_STAT_DETAILS',
    id: id,
  };
}

const MainStateBoxes = (props) => {
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

export const MainTotalStats = connect(
  mapStateToStatBoxProps,
  mapDispatchToStatBoxProps
)(MainStateBoxes);
