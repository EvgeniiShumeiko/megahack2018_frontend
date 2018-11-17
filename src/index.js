// @flow
import { default as App } from "@app";
import { default as Chat } from "./modules/chat";
import { default as Login } from "./modules/login";
import { default as Mentor } from "./modules/Mentor";
import axios from "axios";
import environment from '@core/environment.json';
const url = environment.API.HOST;

axios
    .get(`${url}/account/role`, { headers: { authorization: localStorage.getItem("secretKey") } })
    .then(res => {
        console.log(res);
        console.log(url);
        if (window.location.pathname.indexOf("chat") === -1) {
            if (res.data === "developer")
                App({ name: "Example Name ", email: "username@example.com" })
            else if (res.data === "reporter")
                Mentor({ name: "Example Name ", email: "username@example.com" })
            else if (res.data === "reporter")
                Login({ name: "Name ", email: "username@example.com" });
        } else Chat(res);
    })
    .catch(() => {
        console.log("login");
        Login({ name: "Name ", email: "username@example.com" });
    });
