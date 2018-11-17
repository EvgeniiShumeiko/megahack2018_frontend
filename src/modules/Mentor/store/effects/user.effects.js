import {
    setUserAction,
} from '@app/store/actions';
import axios from 'axios';
import moment from 'moment';

import environment from '@core/environment.json';

const url = environment.API.HOST

export const setUser = user => dispatch => {
    dispatch(
        setUserAction(user),
    );
};

export const getExchangeTask = () => axios.get(url + '/task/free', { headers: { authorization: localStorage.getItem('secretKey') }})
        .then(res => res.data);

export const getPersonalTask = () => axios.get(url + '/task/list/developer', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then(res => res.data);

export const getMentor = () => axios.get(url + '/account/developer', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then(res => res.data.mentor.login);

export const getMe = () => axios.get(url + '/account/info', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then(res => res.data.login);

export const addTask = (data) => axios.post(url + '/task/add',  data, { headers: { authorization: localStorage.getItem('secretKey') } });


