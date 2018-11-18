// @flow
import socketIOClient from "socket.io-client";
import { default as App } from "@app";
import axios from "axios";
import environment from "@core/environment.json";
import { default as Chat } from "./modules/chat";
import { default as Login } from "./modules/login";
import { default as Mentor } from "./modules/Mentor";

const url = environment.API.HOST;

App({name: 'name', email: 'email'});
//axios
//    .get(`${url}/account/role`, { headers: { authorization: localStorage.getItem("secretKey") } })
//    .then(res => {
//        console.log(res);
//        console.log(url);
//
//        axios
//            .get(`${url}/account/info`, { headers: { authorization: localStorage.getItem("secretKey") } })
//            .then(data => {
//
//
//                if (window.location.pathname.indexOf("chat") === -1) {
//                    if (res.data === "developer")
//                    //
//                        App({ name: "Example Name ", email: "username@example.com" });
//                    else if (res.data === "reporter") Mentor({ name: "Example Name ", email: "username@example.com" });
//                    else if (res.data === "reporter") Login({ name: "Name ", email: "username@example.com" });
//                } else Chat(data);
//
//                window.socket = socketIOClient("https://nammm.ru:3000/");
//
//                window.socket.on("connect", () => {
//                    socket.emit(
//                        "authorize",
//                        JSON.stringify({
//                            login: data.data.login,
//                            session: localStorage.getItem("secretKey")
//                        })
//                    );
//                    console.info("[Socket] Connected", JSON.stringify({
//                        login: data.data.login,
//                        session: localStorage.getItem("secretKey")
//                    }));
//                });
//
//                window.socket.on("up", (ddd) => {
//                    var d = JSON.parse(ddd);
//                    console.log(ddd)
//                    alert('Тебе звонят, перейди https://nammm.ru/chat/?room='+d.pre_login+'_'+data.data.login)
//                });
//
//            })
//            .catch(() => {});
//
//
//
//    })
//    .catch(() => {
//        console.log("login");
//        Login({ name: "Name ", email: "username@example.com" });
//    });
