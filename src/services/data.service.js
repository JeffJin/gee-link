import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class DataService extends BaseService {

  constructor() {
    super();
  }

  getTotalSearchStats() {
    const result = {
      totalSearch: 479,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getTotalDataStats() {
    const result = {
      totalData: 111126,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getIndividualSearchStats() {
    const result = {
      individualSearch: 267,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getIndividualUserStats() {
    const result = {
      individualUsers: 432,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getIndividuallyBrowsedStats() {
    const result = {
      individuallyBrowsed: 4232,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getIndividuallyBrowsedStats() {
    const result = {
      todayBrowsed: 422,
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }
  //实时搜索数
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
  //独立搜索数
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
  //实时用户数
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
  //关键词搜索趋势图
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
}

export const dataService = new DataService();