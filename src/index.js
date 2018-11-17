import { default as App } from '@app';
import { default as Chat } from './modules/chat'
import { default as Login } from "./modules/login";
import axios from 'axios';

const url = 'https://78e6f559.ngrok.io';

console.log(window.location.pathname)

axios.get(url + '/account/info', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then((res) => {
        console.log('res', res);

        if(window.location.pathname.indexOf('chat') === -1)
            App({ name: 'Example Name ', email: 'username@example.com'});
        else
            Chat(res);
    })
    .catch(() => {
        console.log('login');
        Login({ name: 'Name ', email: 'username@example.com' });
    });
