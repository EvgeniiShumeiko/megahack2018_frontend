import { default as App } from '@app';
import { default as Chat } from './modules/chat'
import { default as Login } from "./modules/login";
import axios from 'axios';

const url = 'http://10.155.57.152:8080';

axios.get(url + '/account/info', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then((res) => {
        console.log(res);
        App({ name: 'Example Name ', email: 'username@example.com'})
    })
    .catch(() => {
        console.log('login');
        Login({ name: 'Name ', email: 'username@example.com' });
    });
