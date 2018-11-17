import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import {Link} from "react-router-dom";

@connect(({ user }) => ({ user }))
export default class RootRoute extends Component {
    static propTypes = {
        ...DisptachProps,
        user: PropTypes.object.isRequired,
    };

    render() {
        const { user } = this.props;

        return <div>
            <Link to={'/login'}>
                Войти
            </Link>
            <Link to={'/register'}>
                Зарегистрироваться
            </Link>
        </div>;
    }
}
