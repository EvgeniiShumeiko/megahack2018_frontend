// @flow
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import { createStore, Actions, Selectors } from "@andyet/simplewebrtc";

import App from "./ChatRoute";

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
    const users = room.split("_");


    if (users.indexOf(res.data.login) === -1 && room != "chat_for_all") {
        ReactDOM.render(<h1>Вы не учавствуете в этом чате</h1>);
    } else {
        ReactDOM.render(
            <Provider store={store}>
                <App configUrl={CONFIG_URL} roomName={room} userData={res.data} roomPassword={params.get("key") || ""} />
            </Provider>,
            document.getElementById("root")
        );
    }


}
