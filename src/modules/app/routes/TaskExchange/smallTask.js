import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import calendar from './assets/calendar.jpg';
import human from './assets/human.jpg';

@connect(({ user }) => ({ user }))
export class SmallTask extends Component {
    static propTypes = {
        ...DisptachProps,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        reporter: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    };

    render() {
        const { user } = this.props;

        return (
        <div className={'smallTaskContainer'}>
            <div className={'smallTaskImage'}>
                Web-дизайн
            </div>
            <div className={'smallTaskMeta'}>
                <div className={'smallTaskTitle'}>
                    <label>Верстка сайта аренды кранов</label>
                    <label className={'smallTaskPrice'}>100 000 ₽</label>
                </div>
                <div className={'smallTaskHr'}/>
                <div className={'smallTaskTitle'}>
                    <div className={'smallTaskBio'}><img src={human} height={'40px'}/><label>Морозова</label></div>
                    <div className={'smallTaskBio'}><img src={calendar} height={'40px'}/><label>7 дней</label></div>
                    <button className={'smallTaskButton'}>Смотреть</button>
                </div>
            </div>
        </div>)
    }
}
