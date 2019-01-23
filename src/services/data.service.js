import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class DataService extends BaseService {

  constructor() {
    super();
  }

  getMainPageStats() {
    const result = {
      totalData: 111126,
      totalSearch: 479,
      individualSearch: 267,
      individualUsers: 1
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getDataPageStats() {
    const result = {
      totalData: 111126,
      todayBrowsed: 333,
      individuallyBrowsed: 267,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  async getRealTimeSearchData() {
    const url = 'https://cdn.rawgit.com/highcharts/highcharts/' +
      '057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json';
    return await fetch(url, {
      method: 'get',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  async getIndividualSearchData() {
    const url = 'https://cdn.rawgit.com/highcharts/highcharts/' +
      '057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json';
    return await fetch(url, {
      method: 'get',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  async getRealTimeUserData() {
    const url = 'https://cdn.rawgit.com/highcharts/highcharts/' +
      '057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json';
    return await fetch(url, {
      method: 'get',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }


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

  // data page services
  getDataUsageRecord() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({
          read: 768,
          liked: 432,
          forwarded: 987,
          commented: 1234
        });
      }, 500);
    });
  }

  getDataUsageRatio() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve([{
          name: '使用',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: '未使用',
          color: '#ed7d31',
          y: 38.59
        }]);
      }, 500);
    });
  }

  getDataSearchRatio() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve([{
          name: '被搜出来',
          y: 31.41,
          sliced: true,
          selected: true
        }, {
          name: '未被搜出',
          color: '#ed7d31',
          y: 68.59
        }]);
      }, 500);
    });
  }

  async getDataUsageTrend() {
    const data = [
      ['周一', 242],
      ['周二', 208],
      ['周三', 149],
      ['周四', 137],
      ['周五', 131],
      ['周六', 127],
      ['周日', 124]
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

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
}

export const dataService = new DataService();