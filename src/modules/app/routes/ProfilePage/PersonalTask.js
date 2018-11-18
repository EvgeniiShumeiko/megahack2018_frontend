import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import human from "../TaskExchange/assets/human.jpg";
import calendar from "../TaskExchange/assets/calendar.jpg";
import {Link} from "react-router-dom";

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
                        <label className={'personallTitle'}>{title}</label>
                        <Link to={'/board'} className={'personalTaskButtonn'}>Ход работы</Link>
                    </div>
                    <div className={'personalTaskHr'}/>
                    <div className={'smallTaskTitlee'}>
                        <div className={'smallTaskBio'}><img src={human} height={'40px'}/><label>{reporter}</label></div>
                        <div className={'smallTaskBio'}><img src={calendar} height={'40px'}/><label>{date} дней</label></div>
                    </div>
                </div>
            </div>)
    }
}
