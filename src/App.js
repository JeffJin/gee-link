import React from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {leftMenuItems} from './components/presentation/menu-items';
import {SearchBox} from './components/presentation/search-box';
import './styles/App.sass';
import MainPage from "./components/pages/main-page";
import UserStats from "./components/pages/user-stats";
import DataStats from "./components/pages/data-stats";
import KeywordStats from "./components/pages/keyword-stats";
import {store} from "./store/store";
import KeywordDetails from "./components/containers/keyword-details";
import UserDetails from "./components/containers/user-details";
import DataDetails from "./components/containers/data-search-details";

class App extends React.Component {
  state = {
    open: true,
  };

  render() {

    return (
      <div className={'root'}>
        <CssBaseline/>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames('drawer-paper'),
          }}
          open={this.state.open}
        >
          <div className={'toolbar-icon'}>
          </div>
          <Divider className={'divider'}/>
          <List>{leftMenuItems}</List>
        </Drawer>
        <main className={'content'}>
          <SearchBox />
          <Switch>
            <Route exact path='/keyword' component={KeywordStats}/>
            <Route exact path='/data' component={DataStats}/>
            <Route exact path='/user' component={UserStats}/>
            <Route path='/main' component={MainPage}/>
            <Route
              path={'/keyword/:id'}
              render={({ match }) => {
                return (
                  <KeywordDetails
                    keywordId={match.params.id}
                  />
                );
              }}
            />
            <Route
              path={'/user/:id'}
              render={({ match }) => {
                return (
                  <UserDetails
                    userId={match.params.id}
                  />
                );
              }}
            />
            <Route
              path={'/data/:id'}
              render={({ match }) => {
                return (
                  <DataDetails
                    dataId={match.params.id}
                  />
                );
              }}
            />
            <Route exact path='/' render={() => (
              <Redirect
                to='/main'
              />
            )}/>
            <Route component={MainPage}/>
          </Switch>
        </main>
      </div>
    );
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;