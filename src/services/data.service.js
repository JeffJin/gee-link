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
      individualSearch: 267,
      individualUsers: 1
    };
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve(result);
      }, 500);
    });

    // const url = '/api/total-stats';
    // return fetch(url, {
    //   method: 'get',
    //   headers: {
    //     accept: 'application/json',
    //   },
    // }).then(this.checkStatus)
    //   .then(this.parseJson);
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
}

export const dataService = new DataService();