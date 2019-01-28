import React from 'react';
import {searchService} from "../../services/search.service";
import {NavLink} from "react-router-dom";
import queryString from 'query-string'
import renderHTML from 'react-render-html';
import {SearchBox} from "./search-box";
import LinearProgress from "@material-ui/core/es/LinearProgress";
import Pagination from "material-ui-flat-pagination";

function ResultItem(props) {

  return (
    <div className={'search-result-row'}>
      <div className={'row title'}>
        <NavLink to={`/details/${props.data.umekey}`} className='nav'>
          {renderHTML(props.data.title)}
        </NavLink>
      </div>
      <div className={'row attr flex-box'}>
        <div className={'flex-1'}>作者： {props.data.author}</div>
        <div className={'flex-1'}>时间： {props.data.year}</div>
        <div className={'flex-1'}>score： {props.data.score}</div>
        <div className={'flex-3'}></div>
      </div>
      <div className={'row summary'}>
        <p>{renderHTML(props.data.summary)}</p>
      </div>
    </div>);
}

export class SearchResult extends React.Component {
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
    const keyword = this.getKeyword();
    this.getSearchResult(keyword, this.state.pageIndex, this.state.pageSize);
  }

  getKeyword() {
    if (this.props.location && this.props.location.search) {
      const query = queryString.parse(this.props.location.search);
      return query['keyword'];
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
        title: this.cleanUpString(r.meta.title),
        author: r.meta.author,
        year: r.meta.year,
        score: r.score,
        umekey: r.umekey,
        summary: this.cleanUpString(r.meta.summary)
      }
    });
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

  getSearchResult = (keyword, pageIndex, pageSize) => {
    console.log('getSearchResult', pageIndex, pageSize);
    this.setState({
      isInProgress: true,
      pageIndex: pageIndex,
      pageSize: pageSize,
      offset: pageSize * pageIndex
    });
    searchService.search(keyword, pageIndex, pageSize).then((result) => {
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
  };

  handlePageSelection(offset) {
    const pageIndex = parseInt(offset / this.state.pageSize);
    this.getSearchResult(this.getKeyword(), pageIndex, this.state.pageSize);
  }

  render(){
    let results = [];
    let summary = '';
    if(this.state.result.items) {
      results = this.state.result.items.map((r, index) => (
        <ResultItem key={index} data={r}/>
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
        <SearchBox/>
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

