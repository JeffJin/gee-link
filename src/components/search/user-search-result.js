import React from 'react';
import {searchService} from "../../services/search.service";
import queryString from 'query-string'
import {SearchBox} from "./search-box";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import Pagination from "material-ui-flat-pagination";
import {IpinfoResultItem, KeywordResultItem, ResultItem} from "./result-items";

export class UserSearchResult extends React.Component {
  state = {
    result: {},
    isInProgress: false,
    pageIndex: 0,
    pageSize: 20,
    offset: 0,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const keyword = this.getFieldValue('keyword');
    this.getSearchResult(keyword, this.state.pageIndex, this.state.pageSize);
  }

  getFieldValue(key) {
    if (this.props.location && this.props.location.search) {
      const query = queryString.parse(this.props.location.search);
      return query[key];
    }
    return '';
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.location !== this.props.location) {
      const query = queryString.parse(nextProps.location.search);
      const keyword = query['keyword'];
      this.getSearchResult(keyword, this.state.pageIndex, this.state.pageSize);
    }
  }

  formatResults(results) {
    return results.map(r => {
      return {
        collkey: r.collkey,
        logType: r.logType,
        ip: r.ip,
        api: r.api,
        time: r.time,
        totalFound: r.totalFound,
        uid: r.uid
      }
    });
  }

  getSearchResult = (keyword, pageIndex, pageSize) => {
    this.setState({
      isInProgress: true,
      pageIndex: pageIndex,
      pageSize: pageSize,
      offset: pageSize * pageIndex
    });
    searchService.searchUser(keyword, pageIndex, pageSize).then((result) => {
      this.setState({
        result: {
          items: this.formatResults(result.results),
          total: result.numFound
        },
        isInProgress: false
      });
      this.forceUpdate();
    });
  };

  handlePageSelection(offset) {
    const pageIndex = parseInt(offset / this.state.pageSize);
    const keyword = this.getFieldValue('keyword');
    this.getSearchResult(keyword, pageIndex, this.state.pageSize);
  }

  render(){
    let results = [];
    let summary = '';
    let pagination = '';
    if (this.state.result.items) {
      results = this.state.result.items.map((r, index) => (
        <IpinfoResultItem key={index} data={r}/>
      ));
      if(this.state.result.total > 0) {
        pagination = <div className={'pagination'}>
          <Pagination
              limit={20}
              offset={this.state.offset}
              total={this.state.result.total}
              onClick={(e, offset) => this.handlePageSelection(offset)}/>
        </div>;
      }
    }
    let progress = <div className={'progress-placeholder'}></div>;
    let progressClass = this.state.isInProgress ? 'in-progress' : '';

    if(this.state.isInProgress) {
      progress = <LinearProgress className={'progress'}/>
      summary = <div className={'header-summary'}>正在搜索，请稍等...</div>;
    } else {
      summary = <div className={'header-summary'}>
        共为您找到相关结果 <strong><i>{this.state.result.total}</i></strong> 个
      </div>;
    }
    return (
      <div>
        {
          progress
        }
        <SearchBox {...this.props} basePath={'user'}/>
        <div className={'search-result ' + progressClass}>
          {
            summary
          }
          <div className={'pagination-container'}>{ pagination }</div>
          <div className={'result-rows'}>
            {results}
          </div>
        </div>
        <div className={'pagination-container'}>{ pagination }</div>
      </div>
    );
  }
}

