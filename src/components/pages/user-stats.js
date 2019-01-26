import React from 'react';
import {SearchUserRanking} from "../rankings/search-user-ranking";
import {BrowseUserRanking} from "../rankings/browse-user-ranking";
import {UserLocationMap} from "../charts/user-location-map";
import {UserSearchTrend} from "../charts/user-search-trend";

function UserStats(props) {
  return (
    <div className="user-stats">
      <div className={'left'}>
        <UserSearchTrend />
        <UserLocationMap />
      </div>
      <div className={'right'}>
        <SearchUserRanking />
        <BrowseUserRanking />
      </div>
    </div>
  );
}

export default UserStats;
