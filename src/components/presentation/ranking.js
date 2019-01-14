import React from 'react';
import {NavLink} from "react-router-dom";

function Ranking(props) {

  return (
    <div className="items-container">
      <div className={'ranking-header'}>
        <div className={'ranking-header-block'}></div>
        <div className={'title'}>{props.data.title}</div>
        <div className={'tooltip'}></div>
      </div>
      <div className={'headers'}>
        {
          props.data.headers.map((h, index) => (
            <div key={index} className={'header-' + index}>
              {h}
            </div>
          ))
        }
      </div>
      <div className={'ranking-items'}>
      {
        props.data.rankingItems.map((item, index) => (
          <div key={index} className="ranking-item">
            <div className={'col-0'}>{item.rank}.</div>
            <div className={'col-1'}><NavLink to={`${props.data.route}/${item.id}`} className='nav'>{item.desc}</NavLink></div>
            <div className={'col-2'}>{item.value}</div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Ranking;
