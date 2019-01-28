import React from 'react';
import {SearchUserRanking} from "../rankings/search-user-ranking";
import {BrowseUserRanking} from "../rankings/browse-user-ranking";
import {UserLocationMap} from "../charts/user-location-map";
import {UserSearchTrend} from "../charts/user-search-trend";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import {SearchBox} from "../search/search-box";

class UserStats extends React.Component {
  state = {
    isInProgress: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    let progress = '';
    if(this.state.isInProgress) {
      progress = <LinearProgress/>
    }

    return (
      <div>
        {
          progress
        }
        <SearchBox {...this.props}/>
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

      </div>
    );
  }
}

export default UserStats;
