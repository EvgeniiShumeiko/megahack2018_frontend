import axios from 'axios';

import environment from '@core/environment.json';

export class Request {
    constructor(host, headers = {}) {
        this.http = axios.create({ headers, baseURL: host });
    }

    get(url = '/', params = {}, headers = {}) {
        return this.http.get(url, { params, headers })
            .then(res => res.data)
            .catch(err => err);
    }

    delete(url = '/', params = {}, headers = {}) {
        return this.http.delete(url, { params, headers })
            .then(res => res.data);
    }

    post(url = '/', data = {}, params = {}, headers = {}) {
        return this.http.post(url, data, { params, headers })
            .then(res => res.data);
    }

    put(url = '/', data = {}, params = {}, headers = {}) {
        return this.http.put(url, data, { params, headers })
            .then(res => res.data);
    }

    patch(url = '/', data = {}, params = {}, headers = {}) {
        return this.http.patch(url, data, { params, headers })
            .then(res => res.data);
    }
}

export default new Request("https://4c8e7c34.ngrok.io");
