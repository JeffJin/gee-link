import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class RankingService extends BaseService {

  constructor() {
    super();
  }

  //数据浏览 /list/read/title
  getDataBrowseRanking(unit) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/datamap/data/usage?unit=' + unit;

    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        top: 10
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result.slice(0, 10);
      });
  }

  //搜索用户
  getSearchUserRanking(unit) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/datamap/customer/statistics?action=search&unit=' + unit;

    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        const data = [];
        for (let key in result) {
          if (result.hasOwnProperty(key)) {
            data.push({ip: key, count: result[key]});
          }
        }
        return data.slice(0, 10);
      });
  }

  //浏览用户 artile
  getBrowseUserRanking(unit) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/datamap/customer/statistics?action=search&unit=' + unit;

    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        const data = [];
        for (let key in result) {
          if (result.hasOwnProperty(key)) {
            data.push({ip: key, count: result[key]});
          }
        }
        return data.slice(0, 10);
      });
  }

  //热搜排行榜， 关键词搜索
  getSearchedKeywordsRanking() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/list/keywords';
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        top: 10
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //热搜未命中排行榜 /list/keywords/fewresult
  getMissedKeywordsRanking() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/list/keywords/fewresult';
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        top: 10
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //相关数据排行榜
  getRelatedDataRanking(keyword) {
    const data = [
      {keyword: '那些年的自然语言', count: 544},
      {keyword: '人工智能的前世与今生', count: 444},
      {keyword: '自然语言能否识别文字', count: 322},
      {keyword: '算法的运用', count: 311},
      {keyword: '机器学习的模型建立', count: 222},
      {keyword: 'python入门教程', count: 221},
      {keyword: '云计算的概念', count: 190},
      {keyword: '服务器的维护', count: 188},
      {keyword: '服务器', count: 111},
      {keyword: 'AI和BI有什么区别', count: 22},
    ];
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  getCategorizedRanking() {
    const data = [
      {keyword: '军事', count: 999},
      {keyword: '政经', count: 777},
      {keyword: '生活', count: 666},
      {keyword: '娱乐', count: 664},
      {keyword: '体育', count: 444},
      {keyword: '文化', count: 77},
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  //最近搜索用户 /list/keyword/{keyword}/ip
  // data = [
  //   {ip: '223.345746745', count: 999},
  //   {ip: '666.645746745', count: 777},
  //   {ip: '845.645746745', count: 666},
  //   {ip: '905.645746745', count: 664},
  //   {ip: '115.645746745', count: 444},
  //   {ip: '225.645746745', count: 77},
  //   {ip: '335.645746745', count: 76},
  //   {ip: '345.645746745', count: 44},
  //   {ip: '665.645746745', count: 33},
  //   {ip: '885.645746745', count: 32},
  //   {ip: '994.564574674', count: 22}
  // ];
  getRecentSearchUserRanking(keyword, top = 10) {
    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/list/keywords/${keyword}/ip`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        top: top
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        const data = [
          {ip: '223.345746745', count: 999},
          {ip: '666.645746745', count: 777},
          {ip: '845.645746745', count: 666},
          {ip: '905.645746745', count: 664},
          {ip: '115.645746745', count: 444},
          {ip: '225.645746745', count: 77},
          {ip: '335.645746745', count: 76},
          {ip: '345.645746745', count: 44},
          {ip: '665.645746745', count: 33},
          {ip: '885.645746745', count: 32},
          {ip: '994.564574674', count: 22}
        ];
        return data;
      });
  }

  getRelatedKeywordRanking(dataId) {
    const data = [
      {keyword: '那些年的自然语言', count: 544},
      {keyword: '人工智能的前世与今生', count: 444},
      {keyword: '自然语言能否识别文字', count: 322},
      {keyword: '算法的运用', count: 311},
      {keyword: '机器学习的模型建立', count: 222},
      {keyword: 'python入门教程', count: 221},
      {keyword: '云计算的概念', count: 190},
      {keyword: '服务器的维护', count: 188},
      {keyword: '服务器', count: 111},
      {keyword: 'AI和BI有什么区别', count: 22},
    ];
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  getRelatedUserRanking(dataId) {
    const data = [
      {ip: '223.345746745', count: 999},
      {ip: '666.645746745', count: 777},
      {ip: '845.645746745', count: 666},
      {ip: '905.645746745', count: 664},
      {ip: '115.645746745', count: 444},
      {ip: '225.645746745', count: 77},
      {ip: '335.645746745', count: 76},
      {ip: '345.645746745', count: 44},
      {ip: '665.645746745', count: 33},
      {ip: '885.645746745', count: 32},
      {ip: '994.564574674', count: 22}
    ];
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }
}

export const rankingService = new RankingService();