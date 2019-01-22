import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class UserService extends BaseService {
  constructor() {
    super();
  }

  getUserSearchTrendData() {
    const data = {
      time: [
        '周一',
        '周二',
        '周三',
        '周四',
        '周五',
        '周六',
        '周日'
      ],
      data: [{
        name: '搜索关键词',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6]

      }, {
        name: '使用数据',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0]

      }]
    };
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);
      }, 500);
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


}

export const userService = new UserService();