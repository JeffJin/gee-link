import React from 'react';
import {Redirect, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {leftMenuItems} from './components/presentation/menu-items';
import './styles/App.sass';
import MainPage from "./components/pages/main-page";
import UserStats from "./components/pages/user-stats";
import DataStats from "./components/pages/data-stats";
import KeywordStats from "./components/pages/keyword-stats";
import {store} from "./store/store";
import KeywordDetails from "./components/pages/keyword-details";
import UserDetails from "./components/pages/user-details";
import DataDetails from "./components/pages/data-search-details";
import {SearchResult} from "./components/search/search-result";

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
          <Switch>
            <Route path={'/main/search'}  render={(props) => <SearchResult {...props} basePath={'main'}/>} />
            <Route path={'/data/search'}  render={(props) => <SearchResult {...props} basePath={'data'}/>} />
            <Route path={'/user/search'}  render={(props) => <SearchResult {...props} basePath={'user'}/>} />
            <Route path={'/keyword/search'}  render={(props) => <SearchResult {...props} basePath={'keyword'}/>} />
            <Route exact path='/keyword' render={(props) => <KeywordStats {...props}/>}/>
            <Route exact path='/data' render={(props) => <DataStats {...props}/>}/>
            <Route exact path='/user' render={(props) => <UserStats {...props}/>}/>
            <Route path='/main' render={(props) => <MainPage {...props}/>}/>
            <Route
              path={'/keyword/details/:id'}
              render={(props) => {
                return (
                  <KeywordDetails
                    {...props}
                    keywordId={props.match.params.id}
                  />
                );
              }}
            />
            <Route
              path={'/user/details/:id'}
              render={({ match }) => {
                return (
                  <UserDetails
                    userIp={match.params.id}
                  />
                );
              }}
            />
            <Route
              path={'/data/details/:id'}
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