// @flow
import { setUserAction } from "@app/store/actions";
import axios from "axios";


const url = process.env.SERVER;
export const setUser = user => dispatch => {
    dispatch(setUserAction(user));
};

export const login = (email, password) =>
    axios({
        method: "post",
        url: `${url}/account/login`,
        data: { email, password }
    })
        .then(response => {
            console.log(response);
            localStorage.setItem("secretKey", response.data);
            console.log("login success");
            return true;
        })
        .catch(res => {
            console.log(res);
            return false;
        });

export const register = (name, surname, login, password, email) =>
    axios({
        method: "post",
        url: `${url}/account/register`,
        data: {
            name,
            surname,
            login,
            email,
            password
        }
    }).then(response => response.data === 1);
