import { default as App } from '@app';
import { default as Login } from "./modules/login";
import axios from 'axios';

axios.get('http://locast:8000/register' + '/user', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then(() => {
        console.log('app');
        App({ name: 'Example Name ', email: 'username@example.com' })
    })
    .catch(() => {
        console.log('login');
        App({ name: 'Name ', email: 'username@example.com' });
    });
