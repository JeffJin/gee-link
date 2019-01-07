import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import {NavLink} from "react-router-dom";

export const leftMenuItems = (
  <div>
    <div>
      <NavLink
        to='/main'
        className='nav'
      >
        首页 >
      </NavLink>
    </div>
    <div>
      <NavLink
        to={'/keyword'}
        className='nav'
      >
        关键词统计 >
      </NavLink>
    </div>
    <div>

      <NavLink
        to={'/data'}
        className='nav'
      >
        数据统计 >
      </NavLink>
    </div>
    <div>

      <NavLink
        to={'/user'}
        className='nav'
      >
        用户统计 >
      </NavLink>
    </div>
    {/*<ListItem button>*/}
    {/*<ListItemIcon>*/}
    {/*<DashboardIcon />*/}
    {/*</ListItemIcon>*/}
    {/*<ListItemText primary="首页 >" />*/}
    {/*</ListItem>*/}
    {/*<ListItem button>*/}
    {/*<ListItemIcon>*/}
    {/*<ShoppingCartIcon />*/}
    {/*</ListItemIcon>*/}
    {/*<ListItemText primary="关键词统计 >" />*/}
    {/*</ListItem>*/}
    {/*<ListItem button>*/}
    {/*<ListItemIcon>*/}
    {/*<PeopleIcon />*/}
    {/*</ListItemIcon>*/}
    {/*<ListItemText primary="数据统计 >" />*/}
    {/*</ListItem>*/}
    {/*<ListItem button>*/}
    {/*<ListItemIcon>*/}
    {/*<BarChartIcon />*/}
    {/*</ListItemIcon>*/}
    {/*<ListItemText primary="用户统计 >" />*/}
    {/*</ListItem>*/}
  </div>
);