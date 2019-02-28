import React from 'react';
import {DataSearchUsageTrend} from "../charts/data-search-usage-trend";
import {RelatedUserRanking} from "../rankings/related-user-ranking";
import {RelatedKeywordRanking} from "../rankings/related-keyword-ranking";

function DataDetails(props) {

  return (
    <div className={'data-details'}>
      <div className={'row-1'}>
        <div className={'data-info'}>
          {props.dataId}
        </div>
        <div className={'data-category'}>

        </div>
      </div>
      <div className={'row-2'}>
        <div className={'trend'}>
          <DataSearchUsageTrend dataId={props.dataId}></DataSearchUsageTrend>
        </div>
        <div className={'related-user'}>
          <RelatedUserRanking dataId={props.dataId}></RelatedUserRanking>
        </div>
        <div className={'related-keyword'}>
          <RelatedKeywordRanking dataId={props.dataId}></RelatedKeywordRanking>
        </div>
      </div>
    </div>
  );
}

export default DataDetails;