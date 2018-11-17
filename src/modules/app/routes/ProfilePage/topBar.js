import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";

@connect(({ user }) => ({ user }))
export class TopBar extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: '',
        }
        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
        currentPage: PropTypes.string.isRequired,
        pages: PropTypes.array.isRequired,
    };

    componentWillMount() {
        this.setState({ currentPage: this.props.currentPage })
    }

    onClick = (event) => {
        this.setState({currentPage: event.target.id});
    }

    render() {
        const { user } = this.props;
        const { currentPage } = this.state;

        return (
            <div className={'topBarContainer'}>
                {this.props.pages.map(page =>
                    <button id={page} onClick={this.onClick} className={currentPage === page ? 'chosen' : 'default'}>{page}</button>
                )}
            </div>
        );
    }
}
