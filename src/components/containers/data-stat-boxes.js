import connect from "react-redux/es/connect/connect";
import React from "react";
import StateBox from "../charts/stat-box";

const labelDictionary = {
  totalData: '总数据条数',
  todayBrowse: '今日被浏览数据数',
  individualBrowse: '独立浏览次数'
};

function openStatDetails(id) {
  return {
    type: 'OPEN_STAT_DETAILS',
    id: id,
  };
}

const DataPageStatBoxContents = (props) => {
  return <div className={'stat-box-container flex-box flex-vertical'}>
    {
      props.stateBoxes.filter(b => !!labelDictionary[b.key]).map((box, index) => (
        <StateBox key={index} onClick={() => props.onClick(box.key)} data={box}/>
      ))
    }
  </div>;
};

const mapStateToStatBoxProps = (state) => {
  const stateBoxes = [];
  for (let k in state.dataStats) {
    if (state.dataStats.hasOwnProperty(k)) {
      stateBoxes.push({key: k, value: state.dataStats[k], label: labelDictionary[k]})
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

export const DataPageStatBoxes = connect(
  mapStateToStatBoxProps,
  mapDispatchToStatBoxProps
)(DataPageStatBoxContents);
