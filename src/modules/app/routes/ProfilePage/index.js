import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import {TopBar} from "./topBar";
import {PersonalTasks} from "./PersonalTasks";

@connect(({ user }) => ({ user }))
export default class ProfilePage extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 'Мои заказы',
        };
        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
    };

    onClick = (event) => {
        this.setState({currentPage: event.target.id});
    };

    render() {
        const { user } = this.props;

        const { currentPage } = this.state;

        return (
            <div>
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
            </div>
        );
    }
}
