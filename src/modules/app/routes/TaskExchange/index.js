import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import {SmallTask} from "./smallTask";
import Header from "../Header";
import {getExchangeTask} from "../../store/effects";
import moment from "moment";

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
        getExchangeTask().then(res => this.setState({tasks: res.map(task => {
            return {
                title: task.label,
                price: task.price,
                reporter: task.reporter.surname + ' ' + task.reporter.name[0] + '.',
                date: moment(task.deadLine).diff(task.created, 'days'),
            }
            })}));
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
                        {this.state.tasks.map(task =>
                        <SmallTask title={task.title} price={task.price} reporter={task.reporter} date={task.date}/>)}
                    </div>
                </div>
            </div>
        );
    }
}
