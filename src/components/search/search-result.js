import React from 'react';
import {searchService} from "../../services/search.service";
import queryString from 'query-string'
import {SearchBox} from "./search-box";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import Pagination from "material-ui-flat-pagination";
import {IpinfoResultItem, KeywordResultItem, ResultItem} from "./result-items";
import Button from "@material-ui/core/Button";

export class SearchResult extends React.Component {
  state = {
    result: {},
    isInProgress: false,
    pageIndex: 0,
    pageSize: 20,
    offset: 0,
    selectedTab: 'all'
  };

  constructor(props) {
    super(props);
  }

  search(tab) {
    const keyword = this.getFieldValue('keyword');
    console.log('search in search result', keyword, tab);

    this.getSearchResult(keyword, this.state.pageIndex, this.state.pageSize, tab);
  }

  componentDidMount() {
    this.search(this.state.selectedTab);
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
      this.getSearchResult(keyword, this.state.pageIndex, this.state.pageSize, this.state.selectedTab);
    }
  }

  changeSelectedTab = (tab) => () => {
    console.log('selected tab changed', tab);
    this.setState({selectedTab: tab});
    this.resetData();
    this.search(tab);
  };

  formatResults(results) {
    return results.map(r => {
      return {
        title: r.meta.title && r.meta.title.length ? this.cleanUpString(r.meta.title[0]) : '',
        author: r.meta.author && r.meta.author[0] ? r.meta.author[0] : '',
        summary: r.meta.summary && r.meta.summary[0] ? this.cleanUpString(r.meta.summary) : '',
        year: r.meta.year && r.meta.year[0] ? r.meta.year[0] : '',
        ipinfo: r.meta.ipinfo && r.meta.ipinfo[0] ? r.meta.ipinfo[0] : '',
        ip: r.meta.ip && r.meta.ip[0] ? r.meta.ip[0] : '',
        api: r.meta.api && r.meta.api[0] ? r.meta.api[0] : '',
        time: r.meta.time && r.meta.time[0] ? r.meta.time[0] : '',
        totalFound: r.meta.totalFound && r.meta.totalFound[0] ? r.meta.totalFound[0] : '',
        logType: r.meta.logType && r.meta.logType[0] ? r.meta.logType[0] : '',
        keyword: r.meta.keyword && r.meta.keyword[0] ? r.meta.keyword[0] : '',
        score: r.score,
        umekey: r.umekey,
        collkey: r.collkey,
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

  getSearchResult = (keyword, pageIndex, pageSize, selectedTab) => {
    this.setState({
      isInProgress: true,
      pageIndex: pageIndex,
      pageSize: pageSize,
      offset: pageSize * pageIndex
    });
    if(selectedTab === 'data') {
      searchService.searchData(keyword, pageIndex, pageSize).then((result) => {
        this.setState({
          result: {
            items: this.formatDataResults(result.resultList),
            metadata: result.facetResult,
            total: result.numFound
          },
          isInProgress: false
        });
        this.forceUpdate();
      });
    } else if(selectedTab === 'keyword') {
      searchService.searchKeyword(keyword, pageIndex, pageSize).then((result) => {
        this.setState({
          result: {
            items: this.formatKeywordResults(result.results),
            metadata: result.facetResult,
            total: result.numFound
          },
          isInProgress: false
        });
        this.forceUpdate();
      });
    } else if(selectedTab === 'ip') {
      searchService.searchUser(keyword, pageIndex, pageSize).then((result) => {
        this.setState({
          result: {
            items: this.formatUserResults(result.results),
            metadata: result.facetResult,
            total: result.numFound
          },
          isInProgress: false
        });
        this.forceUpdate();
      });
    } else {
      searchService.searchGeneral(keyword, pageIndex, pageSize).then((result) => {
        this.setState({
          result: {
            items: this.formatResults(result.resultList),
            metadata: result.facetResult,
            total: result.numFound
          },
          isInProgress: false
        });
        this.forceUpdate();
      });
    }
  };

  resetData() {
    this.setState({
      result: {
        items: [],
        metadata: {},
        total: 0
      },
      isInProgress: false
    });
    this.forceUpdate();
  }

  formatDataResults(results) {
    return results.map(r => {
      return {
        title: this.cleanUpString(r.meta.title),
        author: r.meta.author,
        year: r.meta.year,
        score: r.score,
        umekey: r.umekey,
        collkey: r.collkey,
        summary: this.cleanUpString(r.meta.summary)
      }
    });
  }

  formatKeywordResults(results) {
    return results.map(r => {
      return {
        collkey: r.collkey,
        logType: r.logType,
        ip: r.ip,
        api: r.api,
        time: r.time,
        keyword: r.keyword,
        totalFound: r.totalFound,
        ipinfo: this.parseIpInfo(r.ipinfo)
      }
    });
  }

  formatUserResults(results) {
    return results.map(r => {
      return {
        collkey: r.collkey,
        logType: r.logType,
        ip: r.ip,
        api: r.api,
        time: r.time,
        totalFound: r.totalFound,
        ipinfo: this.parseIpInfo(r.ipinfo)
      }
    });
  }

  parseIpInfo(ipinfo) {
    if(!ipinfo) {
      return {};
    }
    const temp = ipinfo.replace('{', '').replace('}', '').split(',');
    let result = {};
    for (let i = 0; i < temp.length; i++) {
      const key = temp[i].split('=')[0];
      const value = temp[i].split('=')[1];
      result[key.replace(' ', '')] = value.replace(' ', '');
    }
    return result;
  }

  handlePageSelection(offset) {
    const pageIndex = parseInt(offset / this.state.pageSize);
    const keyword = this.getFieldValue('keyword');
    this.getSearchResult(keyword, pageIndex, this.state.pageSize, this.state.selectedTab);
  }

  render(){
    let results = [];
    let summary = '';
    if (this.state.result.items) {
      results = this.state.result.items.map((r, index) => {
        if (r.title && r.title.length && (this.state.selectedTab === 'all' || this.state.selectedTab === 'data')){
          return <ResultItem key={index} data={r}/>;
        }
        else if (r.logType && r.logType.length &&
          (this.state.selectedTab === 'all' || this.state.selectedTab === 'keyword'))  {
          return <KeywordResultItem key={index} data={r}/>;
        }
        else if (r.logType && r.logType.length &&
          (this.state.selectedTab === 'all' || this.state.selectedTab === 'ip'))  {
          return <IpinfoResultItem key={index} data={r}/>;
        }
      });

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
        <div className={'tabs'}>
          <Button variant="outlined" color={ this.state.selectedTab === 'ip' ? 'primary' : 'default'} onClick={this.changeSelectedTab('ip')} className={'tabButton'}>
            用户
          </Button>
          <Button variant="outlined" color={ this.state.selectedTab === 'data' ? 'primary' : 'default'} onClick={this.changeSelectedTab('data')} className={'tabButton'}>
            数据
          </Button>
          <Button variant="outlined" color={ this.state.selectedTab === 'keyword' ? 'primary' : 'default'} onClick={this.changeSelectedTab('keyword')} className={'tabButton'}>
            关键词
          </Button>
          <Button variant="outlined" color={ this.state.selectedTab === 'all' ? 'primary' : 'default'} onClick={this.changeSelectedTab('all')} className={'tabButton'}>
            全部
          </Button>
        </div>
        <div className="search-result">
          {
            summary
          }
          {
            results
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

