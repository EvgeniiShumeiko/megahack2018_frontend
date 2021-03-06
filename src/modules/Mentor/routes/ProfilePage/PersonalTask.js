import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import human from "./assets/human.jpg";
import calendar from "./assets/calendar.jpg";

@connect(({ user }) => ({ user }))
export class PersonalTask extends Component {
    static propTypes = {
        ...DisptachProps,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        reporter: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    };

    render() {
        const { user } = this.props;
        const { title, price, reporter, date} = this.props;

        return (
            <div className={'personalTaskContainer'}>
                <div className={'personalTaskImage'}/>
                <div className={'personalTaskMeta'}>
                    <div className={'titleWithTable'}>
                        <label className={'personalTitle'}>{title}</label>
                        <button className={'personalTaskButton'}>Ход работы</button>
                    </div>
                    <div className={'personalTaskHr'}/>
                    <div className={'smallTaskTitle'}>
                        <div className={'smallTaskBio'}><img src={human} height={'40px'}/><label>{reporter}</label></div>
                        <div className={'smallTaskBio'}><img src={calendar} height={'40px'}/><label>{date}</label></div>
                        <label className={'contactMentor'}>Связаться с заказчиком</label>
                    </div>
                </div>
            </div>)
    }
}
