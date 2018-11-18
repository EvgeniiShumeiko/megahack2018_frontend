import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import {TopBar} from "./topBar";
import {getExchangeTask, getMe, getMentor, getPersonalTask} from "../../store/effects";
import moment from "moment";
import {SmallTask} from "../TaskExchange/smallTask";
import {PersonalTask} from "./PersonalTask";
import environment from '@core/environment.json';
import {Link} from "react-router-dom";

const url = environment.API.HOST

@connect(({ user }) => ({ user }))
export class PersonalTasks extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
    }

    static propTypes = {
        ...DisptachProps,
    };

    componentWillMount() {
        getPersonalTask().then(res => this.setState({tasks: res.map(task => {
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

        if (this.state.tasks.length === 0)
            return(
                <div style={{position: 'relative'}}>
                    <div style={{marginLeft: '15%'}}>
                        <Link to={'/taskExchange'} className={'personalTaskButton'}>Новый заказ</Link>
                    </div>
                </div>
            );
        else
            return (
                <div className={'personalTasksTable'}>
                    {this.state.tasks.map(task =>
                        <PersonalTask title={task.title} price={task.price} reporter={task.reporter} date={task.date}/>)}
                </div>
            );
    }
}
