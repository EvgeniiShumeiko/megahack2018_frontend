import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import image from './assets/logo.png'

@connect(({ user }) => ({ user }))
export default class Header extends Component {
    static propTypes = {
        ...DisptachProps,
    };

    render() {
        const { user } = this.props;

        return (
            <img src={image} className={'image'}/>
        )
    }
}
