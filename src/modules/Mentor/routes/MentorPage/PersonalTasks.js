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
import {url} from "../../../../index";

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
            getMe().then(me => window.location.href = url + '/chat/?room=' + mentor + '_' + me);
        });
        console.log(mentor)
    };

    render() {
        const { user } = this.props;

        console.log(this.state.tasks);

        if (this.state.tasks.length === 1)
            return(
                <div style={{marginLeft: '15%'}}>
                    <button className={'personalTaskButton'}>новый заказ</button>
                </div>
            );
        else
            return (
                <div className={'personalTasksTable'}>
                    {this.state.tasks.map(task =>
                        <PersonalTask title={task.title} price={task.price} reporter={task.reporter} date={task.date}/>)}
                    <div className={'personalMentor'}>
                        <img className={'mentorImage'} src={''} height={'100%'} width={'100%'} style={{objectFit: 'fill'}}/>
                        <span>Микеев Максим</span>
                        <span>Наставник</span>
                        <button onClick={this.onClick} className={'personalTaskButton'} style={{backgroundColor: '#FBA237'}}>Связаться</button>
                    </div>
                </div>
            );
    }
}
