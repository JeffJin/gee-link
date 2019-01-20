import React from "react";

function StateBox(props) {
  return <div className={'stat-box flex-1'}>
          <div className={'value'}>{props.data.value}</div>
          <div className={'desc'}>{props.data.label}</div>
        </div>;
}

export default StateBox;
