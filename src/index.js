// @flow
import { default as App } from "@app";
import { default as Chat } from "./modules/chat";
import { default as Login } from "./modules/login";
import { default as Mentor } from "./modules/Mentor";
import axios from "axios";

const url = process.env.SERVER;

App({name: 'name', email: 'email'});
//axios
//    .get(`${url}/account/role`, { headers: { authorization: localStorage.getItem("secretKey") } })
//    .then(res => {
//        if (window.location.pathname.indexOf("chat") === -1) {
//            if (res.data === "developer") App({ name: "Example Name ", email: "username@example.com" });
//            else if (res.data === "mentor") Mentor({ name: "Example Name ", email: "username@example.com" });
//        } else Chat(res);
//    })
//    .catch(() => {
//        console.log("login");
//        Login({ name: "Name ", email: "username@example.com" });
//    });
