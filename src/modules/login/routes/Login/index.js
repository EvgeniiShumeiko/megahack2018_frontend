import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import {login} from "../../store/effects";
import {Redirect} from "react-router-dom";

@connect(({ user }) => ({ user }))
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            password: '',
            success: 0,
        };

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
        user: PropTypes.object.isRequired,
    };

    onChangeLogin = (event) => this.setState({ mail: event.target.value});

    onChangePassword = (event) => this.setState({ password: event.target.value});

    onClick = (event) => {
        const { mail, password } = this.state;


        login(mail, password).then(res => res ? this.setState({success: 1}) : this.setState({success: -1}))
    };

    render() {
        const { user } = this.props;
        const { mail, password } = this.state;

        return (
            <div>
                <span>
                    Войти в приложение
                </span>
                <input type="text" placeholder="Введите логин"  onChange={this.onChangeLogin} name="email" value={mail}/>
                <input type="password" placeholder="Введите пароль" onChange={this.onChangePassword} name="password" value={password}/>
                {this.state.success === 1 ?
                <Redirect to={'/'}/> : null
                }
                {this.state.success === -1 ?
                    <h2>invalid login</h2> : null
                }
                <button onClick={this.onClick}>
                    Войти
                </button>
            </div>
        )
    }
}
