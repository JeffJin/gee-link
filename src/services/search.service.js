import fetch from 'isomorphic-fetch';
import BaseService from "./base.service";

class SearchService extends BaseService {

  constructor() {
    super();
  }

  async search(key, pageIndex = 0, pageSize = 20) {
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

}

export const searchService = new SearchService();