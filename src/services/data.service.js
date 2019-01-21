import fetch from 'isomorphic-fetch';

const LOCAL_STORAGE_KEY = 'gee-link-auth';

class DataService {
  constructor() {
    this.useLocalStorage = (typeof localStorage !== 'undefined');
    this.subscribers = [];

    if (this.useLocalStorage) {
      this.token = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (this.token) {
        this.isTokenValid().then((bool) => {
          if (!bool) {
            this.token = null;
          }
        });
      }
    }
  }

  getTotalStats() {
    const result = {
      totalData: 111126,
      totalSearch: 479,
      todaySearch: 333,
      individualSearch: 267,
      individualUsers: 1
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  getRankingLists() {
    const result = {
      keywordSearchRankings: [
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
        {id: 11, rank: 11, desc: 'BI', value: 22}
      ],
      dataBrowseRankings: [
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
      ],
      searchUserRankings: [
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
      ]
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });
  }

  async getRealtimeChartData() {
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
        return {
          realTimeSearchChartData: result,
          individualSearchChartData: result,
          realTimeUserChartData: result
        };
      });
  }

  async getUserLocationMapData() {
    const data = [
      ['cn-3664', 0],
      ['cn-gd', 1],
      ['cn-sh', 2],
      ['cn-zj', 3],
      ['cn-ha', 4],
      ['cn-xz', 5],
      ['cn-yn', 6],
      ['cn-ah', 7],
      ['cn-hu', 8],
      ['cn-sa', 9],
      ['cn-cq', 10],
      ['cn-gz', 11],
      ['cn-hn', 12],
      ['cn-sc', 13],
      ['cn-sx', 14],
      ['cn-he', 15],
      ['cn-jx', 16],
      ['cn-nm', 17],
      ['cn-gx', 18],
      ['cn-hl', 19],
      ['cn-fj', 20],
      ['cn-bj', 21],
      ['cn-hb', 22],
      ['cn-ln', 23],
      ['cn-sd', 24],
      ['cn-tj', 25],
      ['cn-js', 26],
      ['cn-qh', 27],
      ['cn-gs', 28],
      ['cn-xj', 29],
      ['cn-jl', 30],
      ['cn-nx', 31]
    ];
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
    });
  }

  // data page services
  getDataPageStats() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve({
          totalData: 44567,
          todayBrowse: 2134,
          individualBrowse: 43232});
      }, 500);
    });
  }

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

  isLoggedIn() {
    return !!this.token;
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }

  notifySubscribers() {
    this.subscribers.forEach((cb) => cb(this.isLoggedIn()));
  }

  setToken(token) {
    this.token = token;

    if (this.useLocalStorage) {
      localStorage.setItem(LOCAL_STORAGE_KEY, token);
    }
  }

  removeToken() {
    this.token = null;

    if (this.useLocalStorage) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }

  isTokenValid() {
    // See note about tokens above
    const url = '/api/check_token?token=' + this.token;
    return fetch(url, {
      method: 'get',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((json) => json.valid === true);
  }

  login() {
    return fetch('/api/login', {
      method: 'post',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((json) => this.setToken(json.token));
  }

  logout() {
    this.removeToken();
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJson(response) {
    return response.json();
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

export const dataService = new DataService();