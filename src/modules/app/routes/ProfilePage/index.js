import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import {TopBar} from "./topBar";
import {PersonalTasks} from "./PersonalTasks";
import human from './assets/human.jpg'
import {getMe, getMentor} from "../../store/effects";
import {Link} from "react-router-dom";

@connect(({ user }) => ({ user }))
export default class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'Мои заказы',
            lonely: false,
            me: '',
            mentor: {
                accountInfo: {
                    login: "",
                    name: "",
                    surname: ""
                }
            },
        };
        this.onClick = this.onClick.bind(this);
        this.onAnotherClick = this.onAnotherClick.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
    };

    onClick = (event) => {
        this.setState({ currentPage: event.target.id})
    };

    onAnotherClick = (event) => {

    };

    redirect = (event) => {
        console.log(event);
        window.location.href = 'http://localhost:8000/chat/?room=' + this.state.mentor.accountInfo.login + '_' + this.state.me
    };

    componentWillMount() {
        getMentor().then(res => this.setState({
            lonely: res == null,
            mentor: res == null ? this.state.mentor : res,
        }));
        getMe().then(res => this.setState({
            me: res,
        }))
    }

    render() {
        const { user } = this.props;

        const { currentPage } = this.state;

        return (
            <div style={{position: 'relative'}}>
                <Header/>
                <div className={'title'}>
                    Личный кабинет
                </div>
                <div className={'hr'}/>
                <div className={'topBarContainer'}>
                    <button id={'Мои заказы'} onClick={this.onClick} className={currentPage === 'Мои заказы' ? 'chosen' : 'default'}>Мои заказы</button>
                    <button id={'Заявки'} onClick={this.onClick} className={currentPage === 'Заявки' ? 'chosen' : 'default'}>Заявки</button>
                    <button id={'Портфолио'} onClick={this.onClick} className={currentPage === 'Портфолио' ? 'chosen' : 'default'}>Портфолио</button>
                    <button id={'Настройки'} onClick={this.onClick} className={currentPage === 'Настройки' ? 'chosen' : 'default'}>Настройки</button>
                </div>
                {currentPage === 'Мои заказы' ?
                <PersonalTasks/>
                    :
                    null}
                {currentPage === 'Мои заказы' && !this.state.lonely ?
                    <div className={'profilePersonalMentor'}>
                        <img className={'mentorImage'} src={human}/>
                        <span>{`${this.state.mentor.accountInfo.surname} ${this.state.mentor.accountInfo.name}`}</span>
                        <span>Наставник</span>
                        <button onClick={this.redirect} className={'personalTaskButton'} style={{backgroundColor: '#FBA237'}}>Связаться</button>
                    </div>
                    :
                    null}
                {currentPage === 'Мои заказы' && this.state.lonely ?
                    <div className={'personalMentor'}>
                        <img className={'mentorImage'} src={human}/>
                        <span>Найти наставника</span>
                        <Link to={'/mentors'} className={'personalTaskButton'} style={{backgroundColor: '#FBA237'}}>Поиск</Link>
                    </div>
                    :
                    null}
            </div>
        );
    }
}
