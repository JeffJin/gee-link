import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class RankingService extends BaseService {

  constructor() {
    super();
  }
  //数据浏览
  getDataBrowseRanking() {
    const result = [
      {id: 1, rank: 1, desc: '那些年的自然语言', value: 544},
      {id: 2, rank: 2, desc: '人工智能的前世与今生', value: 444},
      {id: 3, rank: 3, desc: '自然语言能否识别文字', value: 322},
      {id: 4, rank: 4, desc: '算法的运用', value: 311},
      {id: 5, rank: 5, desc: '机器学习的模型建立', value: 222},
      {id: 6, rank: 6, desc: 'python入门教程', value: 221},
      {id: 7, rank: 7, desc: '云计算的概念', value: 190},
      {id: 8, rank: 8, desc: '服务器的维护', value: 188},
      {id: 9, rank: 9, desc: '服务器', value: 111},
      {id: 10, rank: 10, desc: 'AI和BI有什么区别', value: 22},
      {id: 11, rank: 11, desc: 'BI', value: 11}
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }
  //搜索用户
  getSearchUserRanking() {
    // /list/topcountbyip
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/list/topcountbyip?top=10';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
  //浏览用户
  getBrowseUserRanking() {
    const result = [
      {keyword: '223345746745', count: 999},
      {keyword: '666645746745', count: 777},
      {keyword: '845645746745', count: 666},
      {keyword: '905645746745', count: 664},
      {keyword: '115645746745', count: 444},
      {keyword: '225645746745', count: 77},
      {keyword: '335645746745', count: 76},
      {keyword: '345645746745', count: 44},
      {keyword: '665645746745', count: 33},
      {keyword: '885645746745', count: 32},
      {keyword: '994564574674', count: 22}
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }
  //使用排行榜
  async getDataUsageRankings() {
    const data = [
      {id: 1, rank: 1, desc: '大数据', value: 123},
      {id: 2, rank: 2, desc: '人工智能', value: 111},
      {id: 3, rank: 3, desc: '自然语言', value: 110},
      {id: 4, rank: 4, desc: '算法', value: 99},
      {id: 5, rank: 5, desc: '机器学习', value: 88},
      {id: 6, rank: 6, desc: 'Angular', value: 77},
      {id: 7, rank: 7, desc: '云计算', value: 76},
      {id: 8, rank: 8, desc: 'Python', value: 44},
      {id: 9, rank: 9, desc: '服务器', value: 33},
      {id: 10, rank: 10, desc: 'AI', value: 32}];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }
  //热搜排行榜， 关键词搜索
  getSearchedKeywordsRanking() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/list/keywords?top=10';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
  //热搜未命中排行榜
  getMissedKeywordsRanking() {
    const data = [
      {id: 1, rank: 1, desc: '那些年的自然语言', value: 544},
      {id: 2, rank: 2, desc: '人工智能的前世与今生', value: 444},
      {id: 3, rank: 3, desc: '自然语言能否识别文字', value: 322},
      {id: 4, rank: 4, desc: '算法的运用', value: 311},
      {id: 5, rank: 5, desc: '机器学习的模型建立', value: 222},
      {id: 6, rank: 6, desc: 'python入门教程', value: 221},
      {id: 7, rank: 7, desc: '云计算的概念', value: 190},
      {id: 8, rank: 8, desc: '服务器的维护', value: 188},
      {id: 9, rank: 9, desc: '服务器', value: 111},
      {id: 10, rank: 10, desc: 'AI和BI有什么区别', value: 22},
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }
}

export const rankingService = new RankingService();