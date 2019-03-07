import React from 'react';
import {searchService} from "../../services/search.service";
import queryString from 'query-string'
import {SearchBox} from "./search-box";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import Pagination from "material-ui-flat-pagination";
import {IpinfoResultItem, KeywordResultItem, ResultItem} from "./result-items";

export class KeywordSearchResult extends React.Component {
  state = {
    result: {},
    isInProgress: false,
    pageIndex: 0,
    pageSize: 20,
    offset: 0
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
        keyword: r.keyword,
        totalFound: r.totalFound
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
    searchService.searchKeyword(keyword, pageIndex, pageSize).then((result) => {
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
    const field = this.getFieldValue('field');
    this.getSearchResult(keyword, field, pageIndex, this.state.pageSize);
  }

  render(){
    let results = [];
    let summary = '';
    if (this.state.result.items) {
      results = this.state.result.items.map((r, index) => (
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
        <SearchBox {...this.props} basePath={'keyword'}/>
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

