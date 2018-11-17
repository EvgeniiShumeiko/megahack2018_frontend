import {
    setUserAction,
} from '@app/store/actions';
import axios from 'axios';

const url = 'http://78e6f559.ngrok.io';

export const setUser = user => dispatch => {
    dispatch(
        setUserAction(user),
    );
};

export const login = (email, password) => axios({
    method: 'post',
    url: url + '/account/login',
    data: {email: email, password: password},
})
        .then(response => {
            console.log(response);
            localStorage.setItem('secretKey', response.data);
            console.log('login success');
            return true;
        })
        .catch((res) => {
            console.log(res);
            return false;
        });

export const register = (name, surname, login, password, email) => axios({
        method: 'post',
        url: url + '/account/register',
        data: {
            name: name,
            surname: surname,
            login: login,
            email: email,
            password: password,
        }
    }).then(response => {
            return response.data === 1;
        });
