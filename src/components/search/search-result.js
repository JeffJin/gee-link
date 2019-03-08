import React from 'react';
import {searchService} from "../../services/search.service";
import queryString from 'query-string'
import {SearchBox} from "./search-box";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import Pagination from "material-ui-flat-pagination";
import {IpinfoResultItem, KeywordResultItem, ResultItem} from "./result-items";
import UserDetails from "../pages/user-details";

export class SearchResult extends React.Component {
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
        title: r.meta.title && r.meta.title.length ? this.cleanUpString(r.meta.title[0]) : 'n/a',
        author: r.meta.author && r.meta.author[0] ? r.meta.author[0] : '',
        year: r.meta.year && r.meta.year[0] ? r.meta.year[0] : '',
        ip: r.meta.ip && r.meta.ip[0] ? r.meta.ip[0] : '',
        api: r.meta.api && r.meta.api[0] ? r.meta.api[0] : '',
        time: r.meta.time && r.meta.time[0] ? r.meta.time[0] : '',
        totalFound: r.meta.totalFound && r.meta.totalFound[0] ? r.meta.totalFound[0] : '',
        logType: r.meta.logType && r.meta.logType[0] ? r.meta.logType[0] : '',
        score: r.score,
        umekey: r.umekey,
        collkey: r.collkey,
        summary: r.meta.summary && r.meta.summary[0] ? this.cleanUpString(r.meta.summary) : ''
      }
    });
  }

  cleanUpString(s) {
    if (s === null || s === undefined) {
      return '';
    }
    let result = '';
    if(s && s.join){
      result = s.join(' ');
    } else {
      result = s;
    }

    return result.replace(/<(?:.|\n)*?>/gm, '');
  }

  getSearchResult = (keyword, pageIndex, pageSize) => {
    this.setState({
      isInProgress: true,
      pageIndex: pageIndex,
      pageSize: pageSize,
      offset: pageSize * pageIndex
    });
    searchService.searchGeneral(keyword, pageIndex, pageSize).then((result) => {
      this.setState({
        result: {
          items: this.formatResults(result.resultList || result.results),
          metadata: result.facetResult,
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
    let keywordResults = [];
    let userResults = [];
    let summary = '';
    if (this.state.result.items) {
      results = this.state.result.items.map((r, index) => (
        <ResultItem key={index} data={r}/>
    ));
      keywordResults = this.state.result.items.map((r, index) => (
        <KeywordResultItem key={index} data={r}/>
    ));
      userResults = this.state.result.items.map((r, index) => (
        <KeywordResultItem key={index} data={r}/>
    ));

      summary = <div className={'header-summary'}>
        共为您找到相关结果 {this.state.result.total} 个
      </div>;
    }
    let progress = '';
    if(this.state.isInProgress) {
      progress = <LinearProgress className={'progress'}/>
    }

    return (
      <div>
        {
          progress
        }
        <SearchBox {...this.props} basePath={'main'}/>
        <div className="search-result">
          {
            summary
          }
          {
            results
          }
          {
            keywordResults
          }
          {
            userResults
          }
        </div>
        <Pagination
          limit={20}
          offset={this.state.offset}
          total={this.state.result.total}
          onClick={(e, offset) => this.handlePageSelection(offset)}
        />
      </div>
    );
  }
}

