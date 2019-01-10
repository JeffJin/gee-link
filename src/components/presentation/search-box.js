import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export function SearchBox(props) {
  return (
    <Paper className={'search-box'} elevation={1}>
      <InputBase className={'input'} placeholder="Search For" />
      <IconButton className={'icon-button'} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}