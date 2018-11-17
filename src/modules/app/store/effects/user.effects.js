import {
    setUserAction,
} from '@app/store/actions';
import axios from 'axios';
import moment from 'moment';

const url = 'http://10.155.57.152:8080';

export const setUser = user => dispatch => {
    dispatch(
        setUserAction(user),
    );
};

export const getExchangeTask = () => axios.get(url + '/task/free', { headers: { authorization: localStorage.getItem('secretKey') }})
        .then(res => console.log(res.data));


