import {NavLink} from "react-router-dom";
import renderHTML from "react-render-html";
import moment from "moment";
import React from "react";

export function ResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`/details/${props.data.umekey}`} className='nav'>
          {renderHTML(props.data.title)}
        </NavLink>
      </div>
      <div className={'row attr flex-box'}>
        <div className={'flex-1'}>作者： {props.data.author}</div>
        <div className={'flex-1'}>时间： {props.data.year}</div>
        <div className={'flex-1'}>score： {props.data.score}</div>
        <div className={'flex-3'}></div>
      </div>
      <div className={'row summary'}>
        <p>{renderHTML(props.data.summary)}</p>
      </div>
    </div>);
}

export function KeywordResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`/keyword/details/${props.data.collkey}`} className='nav'>
          {props.data.logType} - {props.data.ip}
        </NavLink>
      </div>
      <div className={'row attr flex-box'}>
        <div className={'flex-1'}>类型： {props.data.logType}</div>
        <div className={'flex-2'}>时间： {moment(props.data.time).format('MMM DD, YYYY')}</div>
        <div className={'flex-3'}></div>
      </div>
      <div className={'row summary'}>
        <p>IP： {props.data.ip}</p>
        <p>关键词： {props.data.keyword}</p>
        <p>API： {props.data.api}</p>
      </div>
    </div>);
}

export function IpinfoResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`/keyword/details/${props.data.collkey}`} className='nav'>
          {props.data.logType} - {props.data.ip}
        </NavLink>
      </div>
      <div className={'row attr flex-box'}>
        <div className={'flex-1'}>类型： {props.data.logType}</div>
        <div className={'flex-2'}>时间： {moment(props.data.time).format('MMM DD, YYYY')}</div>
        <div className={'flex-3'}></div>
      </div>
      <div className={'row summary'}>
        <p>IP： {props.data.ip}</p>
        <p>API： {props.data.api}</p>
        <p>用户信息： {props.data.ipinfo.country} {props.data.ipinfo.country} {props.data.ipinfo.country}</p>
      </div>
    </div>);
}