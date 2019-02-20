import React from 'react';
import {searchService} from "../../services/search.service";
import queryString from 'query-string'
import {SearchBox} from "./search-box";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import Pagination from "material-ui-flat-pagination";
import {IpinfoResultItem, KeywordResultItem, ResultItem} from "./result-items";

export class SearchResult extends React.Component {
  state = {
    result: {},
    isInProgress: false,
    pageIndex: 0,
    pageSize: 20,
    offset: 0,
    field: ''
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const keyword = this.getFieldValue('keyword');
    const field = this.getFieldValue('field');
    this.setState({field: field});
    this.getSearchResult(keyword, field, this.state.pageIndex, this.state.pageSize);
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
      const field = query['field'];
      this.getSearchResult(keyword, field, this.state.pageIndex, this.state.pageSize);
    }
  }

  formatResults(results, field) {
    if (field === 'keyword') {
      return this.formatKeywordResults(results);
    } else if (field === 'ipinfo') {
      return this.formatIpResults(results);
    } else {
      return this.formatGenericResults(results);
    }
  }

  formatGenericResults(results) {
    return results.map(r => {
      return {
        title: this.cleanUpString(r.meta.title),
        author: r.meta.author,
        year: r.meta.year,
        score: r.score,
        umekey: r.umekey,
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
        totalFound: r.totalFound
      }
    });
  }

  formatIpResults(results) {
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
    const temp = ipinfo.replace('{').replace('}').split(',');
    let result = {};
    for (let i = 0; i < temp.length; i++) {
      const key = temp[i].split('=')[0];
      const value = temp[i].split('=')[1];
      result[key.trim()] = value.trim();
    }
    return result;
  }

  cleanUpString(s) {
    let result = '';
    if(s && s.length){
      result = s.join(' ');
    } else {
      result = s;
    }

    return result.replace(/<(?:.|\n)*?>/gm, '');
  }

  getSearchResult = (keyword, field, pageIndex, pageSize) => {
    this.setState({
      isInProgress: true,
      pageIndex: pageIndex,
      pageSize: pageSize,
      offset: pageSize * pageIndex
    });
    searchService.search(keyword, field, pageIndex, pageSize).then((result) => {
      this.setState({
        result: {
          items: this.formatResults(result.resultList || result.results, field),
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
    const field = this.getFieldValue('field');
    this.getSearchResult(keyword, field, pageIndex, this.state.pageSize);
  }

  render(){
    let results = [];
    let summary = '';
    if (this.state.result.items) {
      if (this.state.field === 'keyword') {
        results = this.state.result.items.map((r, index) => (
          <KeywordResultItem key={index} data={r}/>
        ));
      } else if (this.state.field === 'ipinfo') {
        results = this.state.result.items.map((r, index) => (
          <IpinfoResultItem key={index} data={r}/>
        ));
      } else {
        results = this.state.result.items.map((r, index) => (
          <ResultItem key={index} data={r}/>
        ));
      }

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
        <SearchBox {...this.props}/>
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

