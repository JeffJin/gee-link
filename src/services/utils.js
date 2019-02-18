import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";
import moment from "moment";

class Utils {

  getSelectedTimeRange = (selectedValue) => {
    const today = moment();
    const endTime = today.format('YYYYMMDD-hhmmss');
    let startTime = moment().subtract(1, 'days').format('YYYYMMDD') + '-000001';
    let unitType = 'hour';
    switch (selectedValue) {
      case 'day':
        const yesterday = today.subtract(1, 'days');
        startTime = moment(yesterday).format('YYYYMMDD-hhmmss');
        unitType = 'hour';
        break;
      case 'week':
        const weekAgo = today.subtract(1, 'weeks');
        startTime = moment(weekAgo).format('YYYYMMDD-hhmmss');
        unitType = 'day';
        break;
      case 'month':
        const monthAgo = today.subtract(1, 'months');
        startTime = moment(monthAgo).format('YYYYMMDD-hhmmss');
        unitType = 'day';
        break;
      case 'year':
        const yearAgo = today.subtract(1, 'years');
        startTime = moment(yearAgo).format('YYYYMMDD-hhmmss');
        unitType = 'month';
        break;
      default:
        break;
    }

    return {startTime, endTime, unitType};
  }
}

export const utils = new Utils();