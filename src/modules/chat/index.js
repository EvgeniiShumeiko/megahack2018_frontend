// @flow
import { Provider } from "react-redux";
import * as UUID from "uuid";
import React from "react";
import ReactDOM from "react-dom";
import { createAction } from 'redux-act';
import { createReducer } from 'redux-act';

import { createStore, Actions, Selectors } from "@andyet/simplewebrtc";

import App from "./ChatRoute";

export default function(res) {
    const API_KEY = "7fd4b5f256a05e4d653f08e1";
    const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${API_KEY}`;

    const store = createStore();
    sessionStorage.setItem('user', JSON.stringify(res.data));

    window.store = store;
    window.actions = Actions;
    window.selectors = Selectors;

    const params = new URLSearchParams(window.location.search);

    if (!params.get("room")) {
        window.location = `/chat/?room=${UUID.v4()}`;
    }
    ReactDOM.render(
        <Provider store={store}>
            <App configUrl={CONFIG_URL} roomName={params.get("room")} roomPassword={params.get("key") || ""} />
        </Provider>,
        document.getElementById("root")
    );
}
