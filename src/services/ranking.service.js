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
    const result = [
      {id: 1, rank: 1, desc: '223345746745', value: 999},
      {id: 2, rank: 2, desc: '666645746745', value: 777},
      {id: 3, rank: 3, desc: '845645746745', value: 666},
      {id: 4, rank: 4, desc: '905645746745', value: 664},
      {id: 5, rank: 5, desc: '115645746745', value: 444},
      {id: 6, rank: 6, desc: '225645746745', value: 77},
      {id: 7, rank: 7, desc: '335645746745', value: 76},
      {id: 8, rank: 8, desc: '345645746745', value: 44},
      {id: 9, rank: 9, desc: '665645746745', value: 33},
      {id: 10, rank: 10, desc: '885645746745', value: 32},
      {id: 11, rank: 11, desc: '9945645746745I', value: 22}
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }
  //浏览用户
  getBrowseUserRanking() {
    const result = [
      {id: 1, rank: 1, desc: '223345746745', value: 999},
      {id: 2, rank: 2, desc: '666645746745', value: 777},
      {id: 3, rank: 3, desc: '845645746745', value: 666},
      {id: 4, rank: 4, desc: '905645746745', value: 664},
      {id: 5, rank: 5, desc: '115645746745', value: 444},
      {id: 6, rank: 6, desc: '225645746745', value: 77},
      {id: 7, rank: 7, desc: '335645746745', value: 76},
      {id: 8, rank: 8, desc: '345645746745', value: 44},
      {id: 9, rank: 9, desc: '665645746745', value: 33},
      {id: 10, rank: 10, desc: '885645746745', value: 32},
      {id: 11, rank: 11, desc: '9945645746745I', value: 22}
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
      {id: 10, rank: 10, desc: 'AI', value: 32},
    ];

    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
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