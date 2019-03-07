import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import queryString from "query-string";

export class SearchBox extends React.Component {
  state = {
    keyword: ''
  };

  componentDidMount() {
    const keyword = this.getFieldValue('keyword');
    this.setState({keyword});
  }

  getFieldValue(key) {
    if (this.props.location && this.props.location.search) {
      const query = queryString.parse(this.props.location.search);
      return query[key];
    }
    return '';
  }

  handleChange = event => {
    this.setState({
      keyword: event.target.value,
    });
  };

  handleSearch = event => {
    if (!this.state.keyword) {
      event.preventDefault();
    }
  };

  render(){
    return (
      <Paper className={'search-box'} elevation={1}>
        <InputBase
          className={'input'}
          placeholder="Search For ..."
          value={this.state.keyword}
          onChange={this.handleChange}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter' && this.state.keyword) {
              // Do code here
              ev.preventDefault();
              let url = `/${this.props.basePath}/search?keyword=${this.state.keyword}`;
              this.props.history.push(url);
            }
          }}
        />
        <IconButton
          className={'icon-button'}
          aria-label="Search"
          onClick={this.handleSearch}
        >
          <NavLink to={`/${this.props.basePath}/search?keyword=${this.state.keyword}`}
                   onClick={ this.handleSearch }
                   className='nav'
          >
            <SearchIcon />
          </NavLink>
        </IconButton>
      </Paper>
    );
  }
}