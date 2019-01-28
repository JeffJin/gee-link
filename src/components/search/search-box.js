import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";

export class SearchBox extends React.Component {
  state = {
    keyword: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSearch = event => {
    console.log('search for ', this.state.keyword);
  };

  render(){
    return (
      <Paper className={'search-box'} elevation={1}>
        <InputBase
          className={'input'}
          placeholder="Search For"
          value={this.state.keyword}
          onChange={this.handleChange('keyword')}
          onSubmit={this.handleChange('keyword')}
        />
        <IconButton
          className={'icon-button'}
          aria-label="Search"
          onClick={this.handleSearch}
        >
          <NavLink to={`/search?keyword=${this.state.keyword}`} className='nav'>
            <SearchIcon />
          </NavLink>
        </IconButton>
      </Paper>
    );
  }
}