// @flow
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { createStore, Actions, Selectors } from "@andyet/simplewebrtc";

import App from "./ChatRoute";

const url = process.env.HOSTURL;

export default function(res) {
    const API_KEY = "7fd4b5f256a05e4d653f08e1";
    const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

    const store = createStore();
    sessionStorage.setItem("user", JSON.stringify(res.data));

    window.store = store;
    window.actions = Actions;
    window.selectors = Selectors;

    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");
    if (!params.get("room")) {
        window.location = `/chat/?room=chat_for_all`;
    }
    console.log(res);
    window.store.dispatch(window.actions.setDisplayName(res.data.login));
    const users = room.split("_");
    console.log(store.getState());
    if (users.indexOf(res.data.login) === -1 && room !== "chat_for_all") {
        ReactDOM.render(<h1>Вы не учавствуете в этом чате</h1>, document.getElementById("root"));
    } else {
        const forUser = users.filter(x => x !== res.data.login);
        axios
            .get(`${url}/account/exists/${forUser[0]}`, { headers: { authorization: localStorage.getItem("secretKey") } })
            .then(response => {
                if ((response.data && users[0] !== users[1]) || room === "chat_for_all") {
                    if (room !== "chat_for_all") SendPush(res.data, forUser[0], room);

                    ReactDOM.render(
                        <Provider store={store}>
                            <App configUrl={CONFIG_URL} roomName={room} userData={res.data} forUser={forUser[0]} roomPassword={params.get("key") || ""} />
                        </Provider>,
                        document.getElementById("root")
                    );
                } else {
                    ReactDOM.render(<h1>Чата не существует</h1>, document.getElementById("root"));
                }
            })
            .catch(() => {
                ReactDOM.render(<h1>Чата не существует</h1>, document.getElementById("root"));
            });
    }
}
