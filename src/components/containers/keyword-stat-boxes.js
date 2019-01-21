import connect from "react-redux/es/connect/connect";
import React from "react";
import StateBox from "../common/stat-box";

const labelDictionary = {
  totalSearch: '总搜索数',
  todaySearch: '今日数据数',
  averageSearch: '人均搜索数',
  individualSearch: '独立搜索数'
};

function openStatDetails(id) {
  return {
    type: 'OPEN_STAT_DETAILS',
    id: id,
  };
}

const KeywordStatBoxContents = (props) => {
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
  for (let k in state.keywordStats) {
    if (state.keywordStats.hasOwnProperty(k)) {
      stateBoxes.push({key: k, value: state.keywordStats[k], label: labelDictionary[k]})
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

export const KeywordStatBoxes = connect(
  mapStateToStatBoxProps,
  mapDispatchToStatBoxProps
)(KeywordStatBoxContents);
