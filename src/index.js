import { default as App } from '@app';
import { default as Chat } from './modules/chat'
import { default as Login } from "./modules/login";
import axios from 'axios';

const url = 'http://10.155.57.152:8080';

App({ name: 'Example Name ', email: 'username@example.com'})

// axios.get(url + '/account/info', { headers: { authorization: localStorage.getItem('secretKey') }})
//     .then(() => {
//         console.log('app');
//         App({ name: 'Example Name ', email: 'username@example.com'})
//     })
//     .catch(() => {
//         console.log('login');
//         App({ name: 'Name ', email: 'username@example.com' });
//     });
