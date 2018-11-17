import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';

@connect(({ user }) => ({ user }))
export default class Register extends Component {
    static propTypes = {
        ...DisptachProps,
        user: PropTypes.object.isRequired,
    };

    render() {
        const { user } = this.props;

        return (
            <div>app</div>
        )
    }
}
