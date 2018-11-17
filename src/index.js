// @flow
import { default as App } from "@app";
import { default as Chat } from "./modules/chat";
import { default as Login } from "./modules/login";
import { default as Mentor } from './modules/Mentor'
import axios from 'axios';

<<<<<<< HEAD
export const url = 'https://a16fbb7c.ngrok.io';
=======
export const url = 'https://4c8e7c34.ngrok.io';
>>>>>>> d0bc1e3911f1f552af1cc6398d77c91939434dfc

axios.get(url + '/account/role', { headers: { authorization: localStorage.getItem('secretKey') }})
    .then((res) => {
        if (window.location.pathname.indexOf("chat") === -1) {
            if (res.data === 'developer')
                App({name: 'Example Name ', email: 'username@example.com'})
            else if (res.data === 'mentor')
                Mentor({name: 'Example Name ', email: 'username@example.com'})
        }
        else
            Chat(res)
    });
