import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class DataService extends BaseService {

  constructor() {
    super();
  }

  getTotalSearchStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/search';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  getTotalDataStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/doc';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  getTodaySearchStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/search';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
  // 今日被浏览次数
  getTodayBrowsedStats() {
    const startTime = '20190127-000001';
    const endTime = '20190127-235959';
    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/count/read?startTime=${startTime}&endTime=${endTime}`;
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
  // 独立搜索数
  getIndividualSearchStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/search/unique';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
  // 人均搜索数
  getIndividualUserStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/ip';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  getIndividuallyBrowsedStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/read/unique';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //实时搜索数
  async getRealTimeSearchData() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/search';
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
  //独立搜索数
  async getIndividualSearchData() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/usearch';
    return await fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
  //实时用户数
  async getRealTimeUserData() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/ip';
    return await fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //数据使用情况
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

  //数据使用占比
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

  //数据搜索占比
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

  //数据使用趋势图
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
  //搜索点击转化率
  getKeywordSearchConversion() {
    const data = [
      ['周一', 22],
      ['周二', 20],
      ['周三', 14],
      ['周四', 13],
      ['周五', 13],
      ['周六', 12],
      ['周日', 12]
    ];

    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }
  //关键词搜索趋势图
  getKeywordSearchTrend(keyword) {
    console.log('getKeywordSearchTrend', keyword);
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

  //用户搜索/使用趋势图
  getUserSearchTrend(uid) {
    const times = [
      '周一',
      '周二',
      '周三',
      '周四',
      '周五',
      '周六',
      '周日'
    ];
    const data = [{
      name: '搜索关键词',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

    }, {
      name: '使用数据',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

    }];

    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({times, data});
      }, 500);
    });
  }

  getKeywordStats(keyword) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({
          searched: 321,
          searchedUsers: 432,
          targeted: 543,
          average: 431
        });
      }, 500);
    });
  }

  getUserDetailedStats(userId) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({
          searched: 321,
          read: 432,
          liked: 543,
          forwarded: 431,
          reviewed: 431,
          complained: 431,
          lastUpdated: new Date(),
          userIp: '123.221.21.1',
        });
      }, 500);
    });
  }

  getRecentBrowsed(userId) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve([
          '朝韩半岛正在起变化',
          '谁在暗杀金正恩',
          '美朝暗战首脑峰会',
          '金正恩邀文在演访问朝鲜，能成吗',
          '这架飞机将载着金正恩抵达新加坡',
          '关于韩朝领导人峰会',
          '金正恩访华后半岛局势走向及中国应对',
        ]);
      }, 500);
    });
  }

  getUserActivityHistory(uid) {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve([
          { date: '2016-01-01', count: 1 },
          { date: '2016-01-03', count: 4 },
          { date: '2016-01-06', count: 2 },
          { date: '2016-01-07', count: 12 },
          { date: '2016-01-08', count: 23 },
          { date: '2016-02-11', count: 32 },
          { date: '2016-02-12', count: 2 },
          { date: '2016-02-22', count: 12 },
          { date: '2016-03-23', count: 62 },
          { date: '2016-03-24', count: 26 },
        ]);
      }, 500);
    });
  }
}

export const dataService = new DataService();