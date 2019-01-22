import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class KeywordService extends BaseService {

  constructor() {
    super();
  }

  getKeywordStats() {
    const data = {
      totalSearch: 111126,
      todaySearch: 479,
      averageSearch: 333,
      individualSearch: 267
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  getKeywordConversion() {
    const data = [
      ['周一', 0.22],
      ['周二', 0.20],
      ['周三', 0.14],
      ['周四', 0.13],
      ['周五', 0.13],
      ['周六', 0.12],
      ['周日', 0.12]
    ];

    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  getKeywordSearchTrend() {
    const data = [
      ['周一', 2222],
      ['周二', 2028],
      ['周三', 1429],
      ['周四', 1327],
      ['周五', 1321],
      ['周六', 1227],
      ['周日', 1224]
    ];

    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

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

export const keywordService = new KeywordService();