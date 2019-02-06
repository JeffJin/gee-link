import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

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

    const url = `http://47.93.226.51:9012/v1/api/ume/statistics/count/timely/ipinfo`;
    return await fetch(url, {
      method: 'get',
      headers: {
        ...this.header,
        startTime,
        endTime,
        unitType
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }
}

export const userService = new UserService();