import React from 'react';
import {NavLink} from "react-router-dom";

function Ranking(props) {

  return (
    <div className="ranking">
      <div className={'ranking-header'}>
        <div className={'ranking-header-block'}></div>
        <div className={'title'}>{props.title}</div>
        <div className={'tooltip'}></div>
        <div className={'select'}>
          <select>
            <option>近24小时</option>
            <option>近一周</option>
            <option>近一个月</option>
            <option>近一年</option>
          </select>
        </div>
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
            <div className={'ranking-col-0'}>{item.rank}.</div>
            <div className={'ranking-col-1'}><NavLink to={`${props.data.route}/${item.id}`} className='nav'>{item.desc}</NavLink></div>
            <div className={'ranking-col-2'}>{item.value}</div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Ranking;
