import axios from 'axios';
import * as session from './sessions';

import environment from '@core/environment.json';

export class Request {
    constructor(host, headers = {}) {
        this.http = axios.create({ headers, baseURL: host });
    }

    get(url = '/', params = {}, headers = {}) {
        return this.http.get(url, { params, headers })
            .then(res => res.data);
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

export default new Request(environment.API.HOST, { Authorization: session.get() });
