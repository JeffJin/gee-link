import React from 'react';
import {DataSearchUsageTrend} from "../charts/data-search-usage-trend";
import {RelatedUserRanking} from "../rankings/related-user-ranking";
import {RelatedKeywordRanking} from "../rankings/related-keyword-ranking";
import StateBox from "../stat-boxes/stat-box";
import {CategorizedRanking} from "../rankings/categorized-ranking";
import {dataService} from "../../services/data.service";
import moment from "moment";

class DataDetails extends React.Component {
  state = {
    isInProgress: false,
    title: '',
    author: '',
    summary: '',
    lastUpdated: {value: moment(new Date()).format('YYYY-MM-DD'), label: '最近更新时间'},
    browsedData: {value: 0, label: '被浏览次数'},
    forwardedData: {value: 0, label: '被转发次数'},
    reviewedData: {value: 0, label: '被评论次数'},
    reportedData: {value: 0, label: '被举报次数'},
    savedData: {value: 0, label: '被收藏次数'},
    categorizedResults: []
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const result = await dataService.getDataDetails(this.props.dataId);
    this.setState({
      title: result.title,
      author: result.author.concat(' '),
      summary: result.summary,
      browsedData: {value: result.viewedCnt || 0, label: '被浏览次数'}
    });
    const categorizedData = Object.keys(result).filter(key => {
      return key.startsWith('_GL_');
    }).map(k => {
        return {keyword: result[k][0], count: 0};
      });

    this.setState({categorizedResults: categorizedData});

    console.log(result);
  }
  
  render() {
    return (
      <div className={'data-details'}>
        <div className={'row-1'}>
          <div className={'data-info'}>
            <div className={'header'}>数据信息</div>
            <div className={'info'}>
              <div className={'title'}>title: {this.state.title}</div>
              <div className={'author'}>author: {this.state.author}</div>
              <div className={'summary'}>summary: {this.state.summary}</div>
            </div>
            <div className={'stats'}>
              <StateBox data={this.state.lastUpdated}/>
              <StateBox data={this.state.browsedData}/>
              <StateBox data={this.state.forwardedData}/>
              <StateBox data={this.state.reviewedData}/>
              <StateBox data={this.state.reportedData}/>
              <StateBox data={this.state.savedData}/>
            </div>
          </div>
          <div className={'data-category'}>
            <div className={'categorized-ranking'}>
              <div className="flex-vertical">
                <div className={'header'}>
                  数据所属分类
                </div>
                {
                  this.state.categorizedResults.map((r, index) => (
                    <div key={index} className={'flex-1 row'}>
                      <span className={'key'}>{r.keyword}</span>
                      <span className={'value'}>{r.count}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className={'row-2'}>
          <div className={'trend'}>
            <DataSearchUsageTrend dataId={this.props.dataId}></DataSearchUsageTrend>
          </div>
          <div className={'related-user'}>
            <RelatedUserRanking dataId={this.props.dataId}></RelatedUserRanking>
          </div>
          <div className={'related-keyword'}>
            <RelatedKeywordRanking dataId={this.props.dataId}></RelatedKeywordRanking>
          </div>
        </div>
      </div>
    );
  }
}

export default DataDetails;