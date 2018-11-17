import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import style from './style.styl';

@connect(({ user }) => ({ user }))
export default class SmallTask extends Component {
    static propTypes = {
        ...DisptachProps,
        user: PropTypes.object.isRequired,
    };

    render() {
        const { user } = this.props;

        return <div className={style.smallTaskContainer}>

        </div>;
    }
}
