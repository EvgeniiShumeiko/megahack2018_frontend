import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import {SmallTask} from "./smallTask";
import Header from "../Header";
import {getExchangeTask} from "../../store/effects";

@connect(({ user }) => ({ user }))
export default class TaskExchange extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        }
    }

    static propTypes = {
        ...DisptachProps,
    };

    componentWillMount() {
        getExchangeTask().then(res => console.log(res));
    }

    render() {
        const { user } = this.props;

        console.log(this.state.tasks);

        return (
            <div>
                <Header/>
                <div className={'title'}>
                    Удаленная работа для фрилансеров
                </div>
                <div className={'hr'}/>
                <div className={'taskExchangeContainer'}>
                    <div className={'smallTaskTable'}>
                        <SmallTask title={''} price={''} reporter={''} date={''}/>
                    </div>
                </div>
            </div>
        );
    }
}
