import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import {TopBar} from "./topBar";
import {getExchangeTask, getMe, getMentor, getPersonalTask} from "../../store/effects";
import moment from "moment";
import {PersonalTask} from "./PersonalTask";
import {url} from "../../../../index";
import {Link} from "react-router-dom";

@connect(({ user }) => ({ user }))
export class PersonalTasks extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
        };
        this.onClick = this.onClick.bind(this);
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

    onClick = (event) => {
        var url = 'http://10.155.62.248:8000/';
        getMentor().then(mentor => {
            getMe().then(me => window.location.href = url + '/chat/?room=' + mentor.userInfo.login + '_' + me);
        });
        console.log(mentor)
    };

    render() {
        const { user } = this.props;

        console.log(this.state.tasks);

        return (
            <div>
                <div className={'personalTasksTable'}>
                    {this.state.tasks.map(task =>
                        <PersonalTask title={task.title} price={task.price} reporter={task.reporter} date={task.date}/>)}
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to={'/createTask'} className={'personalTaskButton'}>Новый заказ</Link>
                </div>
            </div>
        );
    }
}
