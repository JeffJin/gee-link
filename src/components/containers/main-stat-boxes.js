import connect from "react-redux/es/connect/connect";
import React from "react";
import StateBox from "../common/stat-box";

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

const MainStatBoxContents = (props) => {
  return <div className={'stat-box-container flex-box'}>
    {
      props.stateBoxes.filter(b => !!labelDictionary[b.key]).map((box, index) => (
        <StateBox key={index} onClick={() => props.onClick(box.key)} data={box}/>
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

export const MainStatBoxes = connect(
  mapStateToStatBoxProps,
  mapDispatchToStatBoxProps
)(MainStatBoxContents);
