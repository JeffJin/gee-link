import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class RankingService extends BaseService {

  constructor() {
    super();
  }

  // 数据浏览
  getDataBrowseRanking(unit, ip = '') {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/customer/documents?ip=${ip}&rows=10&unit=${unit}`;

    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result ? result.slice(0, 10) : [];
      });
  }

  // 数据使用排行榜
  getDataUsageRanking(unit, keyword = '') {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/data/usage?unit=${unit}&keyword=${keyword}&rows=10`;

    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result ? result.slice(0, 10) : [];
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

  //浏览用户
  getBrowseUserRanking(unit) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/datamap/customer/statistics?action=article&unit=' + unit;

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
  getSearchedKeywordsRanking(ip, unit = 'year') {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/customer/keywords?ip=${ip}&rows=10&unit=${unit}`;

    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        const rankings = Object.keys(result).map(key => {
          return {keyword: key, count: result[key]};
        });
        return rankings.sort((r1, r2) => {
          if (r1.count < r2.count) {
            return 1;
          } else if (r1.count > r2.count){
            return -1;
          } else {
            return 0;
          }

        });
      });
  }

  //热搜未命中排行榜 /list/keywords/fewresult
  getMissedKeywordsRanking() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/keyword/top?found=false&rows=10&unit=year';
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        top: 10
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result.map(r => {
          const key =  Object.keys(r)[0] ;
          return {keyword: key, count: r[key]};
        });
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

  getCategorizedRanking(keyword) {
    // const data = [
    //   {keyword: '娱乐', count: 664},
    //   {keyword: '体育', count: 444},
    //   {keyword: '文化', count: 77},
    // ];
    ///api/ume/keyword/taxonomy?keyword=%E5%8C%97%E4%BA%AC
    const url = `http://47.93.226.51:9012/v1/api/ume/keyword/taxonomy?keyword=${keyword}`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        console.log(result);
        return result.filter(r => Object.keys(r)[0].split('/').length === 2)
          .map(r => {
            const key = Object.keys(r)[0].split('/')[1];
            return {keyword: key, count: r[Object.keys(r)[0]]};
          });
      });
  }

  //最近搜索用户 /list/keyword/{keyword}/ip
  // data = [
  //   {ip: '223.345746745', count: 999},
  //   {ip: '666.645746745', count: 777},
  // ];
  getRecentSearchUserRanking(keyword, unitType) {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/customer/statistics?action=search&keyword=${keyword}&unit=${unitType}`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return Object.keys(result).map(key => {
          return {ip: key, count: result[key]};
        }) ;
      });
  }

  getRelatedKeywordRanking(dataId) {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/data/keywords/${dataId}`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return Object.keys(result).map(key => {
          return {keyword: key, count: result[key]};
        }) ;
      });
  }

  getRelatedUserRanking(dataId) {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/data/customers/${dataId}`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return Object.keys(result).map(key => {
          return {ip: key, count: result[key]};
        }) ;
      });
  }
}

export const rankingService = new RankingService();