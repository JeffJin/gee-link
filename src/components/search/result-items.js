import {NavLink} from "react-router-dom";
import renderHTML from "react-render-html";
import moment from "moment";
import React from "react";

export function ResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`${process.env.PUBLIC_URL}/data/details/${props.data.collkey}`} className='nav'>
          {renderHTML(props.data.title)}
        </NavLink>
      </div>
      <div className={'row attr flex-box'}>
        <div className={'flex-1'}>作者： {props.data.author || ''}</div>
        <div className={'flex-1'}>时间： {props.data.year || ''}</div>
        <div className={'flex-1'}>score： {props.data.score || ''}</div>
        <div className={'flex-3'}></div>
      </div>
      <div className={'row summary'}>
        <p className={'info'}>{renderHTML(props.data.summary || '')}</p>
      </div>
    </div>);
}

export function KeywordResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`${process.env.PUBLIC_URL}/user/details/${props.data.ip}`} className='nav'>
          {props.data.ip}
        </NavLink>
      </div>
      <div className={'row attr flex-box'}>
        <div className={'flex-1'}>类型： {props.data.logType}</div>
        <div className={'flex-2'}>时间： {moment(props.data.time).format('MMM DD, YYYY')}</div>
        <div className={'flex-3'}>Total Found: {props.data.totalFound}</div>
      </div>
      <div className={'row summary'}>
        <p>IP： {props.data.ip}</p>
        <p>
          关键词：
          <NavLink to={`${process.env.PUBLIC_URL}/keyword/details/${props.data.keyword}`} className='nav'>
            {props.data.keyword}
          </NavLink>
        </p>
        <p>API： {props.data.api}</p>
      </div>
    </div>);
}

export function IpinfoResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`${process.env.PUBLIC_URL}/user/details/${props.data.ip}`} className='nav'>
          {props.data.ip}
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
        <p>用户信息： {props.data.ipinfo.country}, {props.data.ipinfo.city}, {props.data.ipinfo.prv}</p>
      </div>
    </div>);
}