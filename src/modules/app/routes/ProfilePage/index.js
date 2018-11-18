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
            lonely: true,
        };
        this.onClick = this.onClick.bind(this);
        this.onAnotherClick = this.onAnotherClick.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
    };

    onClick = (event) => {
        this.setState({ currentPage: event.target.id})
    };

    onAnotherClick = (event) => {

    }

    componentWillMount() {
        getMentor().then(res => this.setState({lonely: res !== undefined}));
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
                    <div className={'personalMentor'}>
                        <img className={'mentorImage'} src={human}/>
                        <span>Микеев Максим</span>
                        <span>Наставник</span>
                        <Link to={'/chat/'} className={'personalTaskButton'} style={{backgroundColor: '#FBA237'}}>Связаться</Link>
                    </div>
                    :
                    null}
                {currentPage === 'Мои заказы' && this.state.lonely ?
                    <div className={'personalMentor'}>
                        <img className={'mentorImage'} src={human}/>
                        <span>Найти наставника</span>
                        <Link to={'/'} className={'personalTaskButton'} style={{backgroundColor: '#FBA237'}}>Поиск</Link>
                    </div>
                    :
                    null}
            </div>
        );
    }
}
