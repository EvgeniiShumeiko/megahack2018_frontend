import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import image from './assets/logo.png'
import {Link} from "react-router-dom";

@connect(({ user }) => ({ user }))
export default class Header extends Component {
    static propTypes = {
        ...DisptachProps,
    };

    render() {
        const { user } = this.props;

        return (
            <div className={'header'}>
                <img src={image} className={'image'}/>
                <Link to={'/'}> О проекте</Link>
                <Link to={'/taskExchange'}>Доступные заказы</Link>
                <Link to={'/profilePage'}>Личный кабинет</Link>
            </div>
        )
    }
}
