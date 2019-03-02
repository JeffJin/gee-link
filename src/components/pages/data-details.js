import React from 'react';
import {DataSearchUsageTrend} from "../charts/data-search-usage-trend";
import {RelatedUserRanking} from "../rankings/related-user-ranking";
import {RelatedKeywordRanking} from "../rankings/related-keyword-ranking";
import StateBox from "../stat-boxes/stat-box";
import {CategorizedRanking} from "../rankings/categorized-ranking";

class DataDetails extends React.Component {
  state = {
    isInProgress: false,
    title: '金正恩的少年时代',
    author: '张君',
    summary: '一位60岁上下的亚洲女人走过纽约时代广场，她经过各种耀眼的霓虹灯广告、各式异国美食餐厅和数间电影院，走过只穿着白色内裤的纽约活地标“裸体牛仔”、芝麻街玩偶和一众票贩子的身旁。这个女人烫着微微的小卷，穿着保守的衣服，扬起脸来饶有兴趣地望向时代广场的大型广告牌，看上去和其他任何一个向往美国梦的移民并无二致。 但是她并不是一位普通的移民，她是朝鲜“永远的总书记”金正日之妻高英姬的妹妹、现最高领导人',
    lastUpdated: {value: 0, label: '最近更新时间'},
    browsedData: {value: 0, label: '被浏览次数'},
    forwardedData: {value: 0, label: '被转发次数'},
    reviewedData: {value: 0, label: '被评论次数'},
    reportedData: {value: 0, label: '被举报次数'},
    savedData: {value: 0, label: '被收藏次数'},
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div className={'data-details'}>
        <div className={'row-1'}>
          <div className={'data-info'}>
            <div className={'header'}>{this.props.dataId}</div>
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
            <CategorizedRanking keyword={this.props.dataId} label={'数据所属分类'}/>
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