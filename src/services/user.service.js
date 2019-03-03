import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";
import moment from "moment";

class UserService extends BaseService {
  constructor() {
    super();
  }

  //用户地理位置分布图
  async getUserLocationMapData(startTime, endTime, unitType) {
    // const data = [
    //   ['cn-3664', 0],
    //   ['cn-gd', 1],
    //   ['cn-sh', 2],
    //   ['cn-zj', 3],
    //   ['cn-ha', 4],
    //   ['cn-xz', 5],
    //   ['cn-yn', 6],
    //   ['cn-ah', 7],
    //   ['cn-hu', 8],
    //   ['cn-sa', 9],
    //   ['cn-cq', 10],
    //   ['cn-gz', 11],
    //   ['cn-hn', 12],
    //   ['cn-sc', 13],
    //   ['cn-sx', 14],
    //   ['cn-he', 15],
    //   ['cn-jx', 16],
    //   ['cn-nm', 17],
    //   ['cn-gx', 18],
    //   ['cn-hl', 19],
    //   ['cn-fj', 20],
    //   ['cn-bj', 21],
    //   ['cn-hb', 22],
    //   ['cn-ln', 23],
    //   ['cn-sd', 24],
    //   ['cn-tj', 25],
    //   ['cn-js', 26],
    //   ['cn-qh', 27],
    //   ['cn-gs', 28],
    //   ['cn-xj', 29],
    //   ['cn-jl', 30],
    //   ['cn-nx', 31]
    // ];
    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/list/ipinfo?`;
    return await fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        // startTime,
        // endTime,
        // unitType,
        countrycode: 'cn'
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(this.parseMapData);
  }

  parseMapData = (result) => {
    return result.map(r => {
      return [`${r.country}-${r.province}`, r.count];
    });
  };

  //{
  //   searched: 321,
  //   read: 432,
  //   liked: 543,
  //   forwarded: 431,
  //   reviewed: 431,
  //   complained: 431,
  //   lastUpdated: new Date(),
  //   userIp: '123.221.21.1',
  // }
  getUserDetailedStats(ip) {
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/customer/detail?ip=${ip}`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(result => {
        return {
          lastUpdated: result.latestDateTime,
          searched: result.search,
          read: result.view,
          liked: 0,
          forwarded: 0,
          reviewed: 0,
          complained: 0
        };
      });
  }

  parseUserData = (result) => {
    return result;
  };


  //最近浏览 /user/{ip}/recentread
  // [
  //           '朝韩半岛正在起变化',
  //           '谁在暗杀金正恩',
  //           '美朝暗战首脑峰会',
  //           '金正恩邀文在演访问朝鲜，能成吗',
  //           '这架飞机将载着金正恩抵达新加坡',
  //           '关于韩朝领导人峰会',
  //           '金正恩访华后半岛局势走向及中国应对',
  //         ]
  getRecentBrowsed(ip) {
    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/user/${ip}/recentread`;
    return fetch(url, {
      method: 'get',
      headers: {
        ...this.header
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then(results => {
        if (results && results.length) {
          return results.map(r => r.keyword);
        }
        return   [
          results.keyword
        ];
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

export const userService = new UserService();