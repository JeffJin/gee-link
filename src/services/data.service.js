import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";
import moment from "moment";

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
    const endTime = moment().format('YYYYMMDD') + '-235959';
    const startTime = moment().subtract(1, 'days').format('YYYYMMDD') + '-000001';
    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/count/read`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime
      }
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

  parseTimeChartData(results) {
    return results.map(result => {
      const dateStr = `${result.year}-${result.month}-${result.day} ${result.hour}`;
      const datTime = moment(dateStr, 'YYYY-MM-DD HH').format('x');
      return [parseInt(datTime), result.count];
    }).sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      }
      else if (a[0] === b[0]) {
        return 0;
      }
      else {
        return -1;
      }
    });
  }

  // https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json
  //实时搜索数
  getRealTimeSearchData(startTime, endTime, unitType) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/search';
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime,
        unitType
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(this.parseTimeChartData);
  }

  //独立搜索数
  async getIndividualSearchData(startTime, endTime, unitType) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/usearch';
    return await fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime,
        unitType
      }
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(this.parseTimeChartData);
  }

  //实时用户数
  async getRealTimeUserData(startTime, endTime, unitType) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/ipcount';
    return await fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime,
        unitType
      }
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(this.parseTimeChartData);
  }

  //数据使用情况 /count/read/
  // data page services
  getDataUsageRecord(action) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/read/' + action;
    return fetch(url, {
      method: 'get',
      headers: this.header
    }).then(this.checkStatus)
      .then(this.parseJson);
  }

  // {
  //   read: 768,
  //   liked: 432,
  //   forwarded: 987,
  //   commented: 1234
  // }
  getDataUsageRecords() {
    const p1 = dataService.getDataUsageRecord('搜索'),
      p2 = dataService.getDataUsageRecord('点赞'),
      p3 = dataService.getDataUsageRecord('转发'),
      p4 = dataService.getDataUsageRecord('举报');
    return Promise.all([p1, p2, p3, p4]).then(([r1, r2, r3, r4]) => {
      return {
        read: r1.count,
        liked: r2.count,
        forwarded: r3.count,
        commented: r4.count
      };
    });
  }

  getUniqueDataStats() {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/read/utitle';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //数据使用占比 /count/read/utitle， /count/doc
  getDataUsageRatio() {
    const totalPromise = dataService.getTotalSearchStats(),
      uniquePromise = dataService.getUniqueDataStats();
    return Promise.all([totalPromise, uniquePromise]).then(([total, unique]) => {
      return [{
        name: '使用',
        y: (unique.count / total.count) * 100,
        sliced: true,
        selected: true
      }, {
        name: '未使用',
        color: '#ed7d31',
        y: ((1 - unique.count / total.count) * 100)
      }];
    });
  }

  //数据搜索占比
  getDataSearchRatio() {
    const totalPromise = dataService.getTotalSearchStats(),
      uniquePromise = dataService.getUniqueDataStats();
    return Promise.all([totalPromise, uniquePromise]).then(([total, unique]) => {
      return [{
        name: '使用',
        y: ((total.count - unique.count) / total.count) * 100,
        sliced: true,
        selected: true
      }, {
        name: '未使用',
        color: '#ed7d31',
        y: (1 - (total.count - unique.count) / total.count) * 100
      }];
    });
  }

  //数据使用趋势图 /count/timely/read
  //[
  //  ['周一', 242],
  //  ['周二', 208],
  //  ['周三', 149],
  //  ['周四', 137],
  //  ['周五', 131],
  //  ['周六', 127],
  //  ['周日', 124]
  //]
  async getDataUsageTrend(startTime, endTime, unitType) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/read';
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime,
        unitType
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(results => {
        return results.map(result => {
          const dateStr = `${result.year}-${result.month}-${result.day} ${result.hour}`;
          const datTime = moment(dateStr, 'YYYY-MM-DD HH').format('YY-MM-DD');
          return [datTime, result.count];
        });
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

    return new Promise(function (resolve, reject) {
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

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  //     const times = [
  //       '周一',
  //       '周二',
  //       '周三',
  //       '周四',
  //       '周五',
  //       '周六',
  //       '周日'
  //     ];
  //     const data = [{
  //       name: '搜索关键词',
  //       data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]
  //
  //     }, {
  //       name: '使用数据',
  //       data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]
  //     }];
  //     const result = {times, data};
  //用户搜索/使用趋势图
  getUserSearchTrend(startTime, endTime, unitType) {
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
    const result = {times, data};
    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/count/read`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime,
        unitType
      }
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(() => result);
  }

  //{
  //           searched: 321,
  //           searchedUsers: 432,
  //           targeted: 543,
  //           average: 431
  //         }
  getKeywordStats(keyword) {
    const p1 = this.getKeywordSearchedNumber(keyword);
    const p2 = this.getSearchedUserNumber(keyword);
    const p3 = this.getKeywordFoundNumber(keyword);
    return Promise.all([p1, p2, p3]).then(([v1, v2, v3]) => {
      return {
        searched: v1.count,
        searchedUsers: v2.count,
        targeted: v3.count,
        average: v1.count / v2.count
      };
    });
  }

  getKeywordSearchedNumber(keyword) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/keyword/' + keyword;
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //keyword 搜索用户数
  getSearchedUserNumber(keyword) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/keyword/' + keyword + '/unique';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //命中数 /count/keyword/{keyword}/found
  getKeywordFoundNumber(keyword) {
    const url = 'http://47.93.226.51:9012/v1/api/ume/statistics/count/keyword/' + keyword + '/found';
    return fetch(url, {
      method: 'get',
      headers: this.header,
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
}

export const dataService = new DataService();