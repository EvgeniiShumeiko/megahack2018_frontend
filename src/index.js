import { default as App } from '@app';
import { default as Chat } from './modules/chat'
import { default as Login } from "./modules/login";
import { default as Mentor } from './modules/Mentor'
import axios from 'axios';

export const url = 'http://10.155.62.243:8080';

axios.get(url + '/account/role', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then((res) => {
        if (res.data === 'developer')
            App({ name: 'Example Name ', email: 'username@example.com'})
        else
            Mentor({ name: 'Example Name ', email: 'username@example.com'})
    })
    .catch(() => {
        console.log('login');
        Login({ name: 'Name ', email: 'username@example.com' });
    });
