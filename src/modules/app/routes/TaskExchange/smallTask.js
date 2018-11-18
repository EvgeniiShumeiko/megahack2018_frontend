import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import calendar from './assets/calendar.jpg';
import human from './assets/human.jpg';
import {acceptTask} from "../../store/effects";

@connect(({ user }) => ({ user }))
export class SmallTask extends Component {
    constructor(){
        super();
        this.state = {
            visible: true,
        };
        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        reporter: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };

    onClick = (event) => {
        console.log(event);
        acceptTask(this.props.id);
        this.setState({ visible: false });
    };

    render() {
        const { user } = this.props;
        const { title, price, reporter, date, id} = this.props;

        if (this.state.visible)
            return (
            <div className={'smallTaskContainer'}>
                <div className={'smallTaskImage'}>
                    Web-дизайн
                </div>
                <div className={'smallTaskMeta'}>
                    <div className={'smallTaskTitle'}>
                        <label>{title}</label>
                        <label className={'smallTaskPrice'}>{price} ₽</label>
                    </div>
                    <div className={'smallTaskHr'}/>
                    <div className={'smallTaskTitle'}>
                        <div className={'smallTaskBio'}><img src={human} height={'40px'}/><label>{reporter}</label></div>
                        <div className={'smallTaskBio'}><img src={calendar} height={'40px'}/><label>{date} дней</label></div>
                        <button onClick={this.onClick} className={'smallTaskButton'}>Принять</button>
                    </div>
                </div>
            </div>)
        else return(<div/>);
    }
}
