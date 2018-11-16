import React, { Component } from 'react';

import style from './style.styl';

export default class Layout extends Component {
    render() {
        const { children } = this.props;

        return <div className={style.container}>
            {children}
        </div>;
    }
}
