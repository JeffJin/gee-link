import React from 'react';

function Ranking(props) {

  return (
    <div className="items-container">
      <div className={'title-wrapper'}>
        <div className={'icon'}></div>
        <div className={'title'}>{props.data.title}</div>
        <div className={'tooltip'}></div>
      </div>
      <div className={'headers'}>
        {
          props.data.headers.map((h, index) => (
            <div className={'header-' + index}>
              {h}
            </div>
          ))
        }
      </div>
      {
        props.data.rankingItems.map((rank, index) => (
          <div key={index} className="ranking-item">
            <span className={'col-1'}>{index}.</span>
            <span className={'col-2'}>{rank.desc}</span>
            <span className={'col-3'}>{rank.value}</span>
          </div>
        ))
      }
    </div>
  );
}

export default Ranking;
