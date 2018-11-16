import React, { Component } from 'react';

import { ClassNameProps } from '@core/props';

import style from './style.styl';

export default class Container extends Component {
    static propTypes = {
        ...ClassNameProps,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        const { className, children } = this.props;

        return <div className={`${style.container} ${className}`}>
            {children}
        </div>;
    }
}
