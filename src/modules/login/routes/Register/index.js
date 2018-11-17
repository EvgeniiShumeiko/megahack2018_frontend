import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import {login, register} from "../../store/effects";
import {Redirect} from "react-router-dom";

@connect(({ user }) => ({ user }))
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            login: '',
            name: '',
            surname: '',
            success: 0,
        };

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeMail = this.onChangeMail.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
        user: PropTypes.object.isRequired,
    };

    onChangeLogin = (event) => this.setState({ login: event.target.value});

    onChangePassword = (event) => this.setState({ password: event.target.value});

    onChangeName = (event) => this.setState({ name: event.target.value});

    onChangeSurname = (event) => this.setState({ surname: event.target.value});

    onChangeMail = (event) => this.setState({ email: event.target.value});

    onClick = (event) => {
        const { name, surname, password, email, login } = this.state;

        console.log(this.state);
        register(name, surname, login, password, email).then(res => res ? this.setState({success: 1}) : this.setState({success: -1}))
    };

    render() {
        const { user } = this.props;
        const { mail, password, name, surname, login } = this.state;

        return (
            <div>
                <span>
                    Войти в приложение
                </span>
                <input type="text" placeholder="Введите имя"  onChange={this.onChangeName} name="name" value={name}/>
                <input type="text" placeholder="Введите фамилию"  onChange={this.onChangeSurname} name="surname" value={surname}/>
                <input type="text" placeholder="Введите почту"  onChange={this.onChangeMail} name="mail" value={mail}/>
                <input type="text" placeholder="Введите логин"  onChange={this.onChangeLogin} name="login" value={login}/>
                <input type="password" placeholder="Введите пароль" onChange={this.onChangePassword} name="password" value={password}/>
                {this.state.success === 1 ?
                    <Redirect to={'/'}/> : null
                }
                {this.state.success === -1 ?
                    <h2>invalid data</h2> : null
                }
                <button onClick={this.onClick}>
                    Войти
                </button>
            </div>
        )
    }
}
