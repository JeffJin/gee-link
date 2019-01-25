import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class UserService extends BaseService {
  constructor() {
    super();
  }
  //用户搜索趋势图
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
  //用户地理位置分布图
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
}

export const userService = new UserService();