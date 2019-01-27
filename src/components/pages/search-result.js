import React from 'react';
import {searchService} from "../../services/search.service";
import {NavLink} from "react-router-dom";

function ResultItem(props) {

  return <div className={'search-result-row'}>
    <div className={'row title'}>
      <NavLink to={`/details/${props.data.umekey}`} className='nav'>
        {props.data.title}
      </NavLink>
    </div>
    <div className={'row attr flex-box'}>
      <div className={'flex-1'}>作者： {props.data.author}</div>
      <div className={'flex-1'}>时间： {props.data.year}</div>
      <div className={'flex-1'}>score： {props.data.score}</div>
    </div>
    <div className={'row summary'}>
      <p>{props.data.summary}</p>
    </div>
  </div>;
}

export class SearchResult extends React.Component {
  state = {
    results: [],
    metadata: {},
    total: 0
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getSearchResult(this.props.keyword).then((result) => {
      this.setState({
        results: this.formatResults(result.resultList),
        metadata: result.facetResult,
        total: result.numFound
      });
    });

  }

  formatResults(results) {
    return results.map(r => {return {
      title: r.meta.title,
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

    return result.replace(/[|&;$%@"<>()+,]/g, "");
  }

  getSearchResult = (keyword) => {
    return searchService.search(keyword);
  };

  render(){
    return (
      <div className="search-result">
        <div className={'header-summary'}>
          共为您找到相关结果 {this.state.total} 个
        </div>

        {
          this.state.results.map((r, index) => (
            <ResultItem key={index} data={r}/>
          ))
        }
      </div>
    );
  }
}
