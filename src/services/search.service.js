import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class SearchService extends BaseService {

  constructor() {
    super();
  }

  async searchGeneral(key, pageIndex = 0, pageSize = 20) {
    if (!key) {
      return [];
    }
    const url = 'http://47.93.226.51:9090/v1/api/ume/searcher/search';
    let returnFields = ['title', 'summary','ip','time','keyword','logType','ipinfo','api','totalFound'];
    const request = {
      collectionName: 'datamap',
      customerId: '6671A13AB54710D932C8F2E51FFE8CC3',
      queryString: key,
      returnField: returnFields,
      highLightField: ['title', 'summary','keyword'],
      preciseSearch: '1',
      closeFullSearch: false,
      topicAlias: 'label',
      isGql: '1',
      qcAlgorithmAlias: '',
      numOfDoc: pageSize,
      startDoc: pageIndex,
      noHighlight: '1'
    };

    return await fetch(url, {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        't': '8D839EB9C4765ACEEB1EDCBAF8D44031',
        'Authorization': 'Bearer dd17f76e-c564-4b46-bf89-81294743d023'
      },
      body: JSON.stringify(request)
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  async searchData(key, pageIndex = 0, pageSize = 20) {
    if (!key) {
      return [];
    }
    const url = 'http://47.93.226.51:9090/v1/api/ume/searcher/search';
    const request = {
      collectionName: 'huluarticle',
      customerId: '6671A13AB54710D932C8F2E51FFE8CC3',
      queryString: key,
      facetField: ['year', '_GL_labeltax_taxonomy', '_GL_regiontax_taxonomy', 'resourceName'],
      returnField: ['title', 'collkey', 'summary', '_GL_labeltax_taxonomy', '_GL_regiontax_taxonomy', 'author', 'year'],
      highLightField: ['title', 'summary'],
      preciseSearch: '1',
      closeFullSearch: false,
      topicAlias: 'label',
      isGql: '1',
      qcAlgorithmAlias: '',
      numOfDoc: pageSize,
      startDoc: pageIndex,
      noHighlight: '1'
    };

    return await fetch(url, {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        't': '8D839EB9C4765ACEEB1EDCBAF8D44031',
        'Authorization': 'Bearer dd17f76e-c564-4b46-bf89-81294743d023'
      },
      body: JSON.stringify(request)
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  //numFound: 24
  // results: [{collkey: "154976777851653", logType: "search", ip: "70.31.40.26",…},…]
  //  0: {collkey: "154976777851653", logType: "search", ip: "70.31.40.26",…}
  //    api: "http://47.93.226.51:9090/v1/api/ume/searcher/search"
  //    collection: "huluarticle"
  //    collkey: "154976777851653"
  //    ip: "70.31.40.26"
  //    keyword: "北京"
  //    logType: "search"
  //    time: "2019-02-10T11:02:55.741"
  //    totalFound: "20"
  async searchKeyword(key, pageIndex = 0, pageSize = 20) {
    if (!key) {
      return [];
    }
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/data/search?field=keyword&keyword=${key}&rows=${pageSize}&start=${pageIndex}`;

    return await fetch(url, {
      method: 'get',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        't': '8D839EB9C4765ACEEB1EDCBAF8D44031',
        'Authorization': 'Bearer dd17f76e-c564-4b46-bf89-81294743d023'
      }
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

  async searchUser(key, pageIndex = 0, pageSize = 20) {
    if (!key) {
      return [];
    }
    const url = `http://47.93.226.51:9012/v1/api/ume/datamap/data/search?field=ipinfo&keyword=${key}&rows=${pageSize}&start=${pageIndex}`;

    return await fetch(url, {
      method: 'get',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        't': '8D839EB9C4765ACEEB1EDCBAF8D44031',
        'Authorization': 'Bearer dd17f76e-c564-4b46-bf89-81294743d023'
      }
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((result) => {
        return result;
      });
  }

}

export const searchService = new SearchService();