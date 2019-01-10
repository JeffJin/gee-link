import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined';
import PublicOutlined from '@material-ui/icons/PublicOutlined';
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined';
import PeopleOutlined from '@material-ui/icons/PeopleOutlined';
import {NavLink} from "react-router-dom";
import {KeyboardArrowRight} from "@material-ui/icons";

export const leftMenuItems = (
  <div className={'menu'}>
    <ListItem button className={'menu-list-item'}>
      <ListItemIcon className={'menu-icon'}>
        <StarBorderOutlined/>
      </ListItemIcon>
      <NavLink to={'/main'} className='nav'>
        首页
      </NavLink>
      <ListItemIcon className={'menu-icon'}>
        <KeyboardArrowRight/>
      </ListItemIcon>
    </ListItem>
    <ListItem button className={'menu-list-item'}>
      <ListItemIcon className={'menu-icon'}>
        <PublicOutlined/>
      </ListItemIcon>
      <NavLink to={'/keyword'} className='nav'>
        关键词统计
      </NavLink>
      <ListItemIcon className={'menu-icon'}>
        <KeyboardArrowRight/>
      </ListItemIcon>
    </ListItem>
    <ListItem button className={'menu-list-item'}>
      <ListItemIcon className={'menu-icon'}>
        <InsertChartOutlined/>
      </ListItemIcon>
      <NavLink to={'/data'} className='nav'>
        数据统计
      </NavLink>
      <ListItemIcon className={'menu-icon'}>
        <KeyboardArrowRight/>
      </ListItemIcon>
    </ListItem>
    <ListItem button className={'menu-list-item'}>
      <ListItemIcon className={'menu-icon'}>
        <PeopleOutlined/>
      </ListItemIcon>
      <NavLink to={'/user'} className='nav'>
        用户统计
      </NavLink>
      <ListItemIcon className={'menu-icon'}>
        <KeyboardArrowRight/>
      </ListItemIcon>
    </ListItem>
  </div>
);