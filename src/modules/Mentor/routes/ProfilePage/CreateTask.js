import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import {TopBar} from "./topBar";
import {PersonalTasks} from "./PersonalTasks";

@connect(({ user }) => ({ user }))
export class CreateTask extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            date: '',
            price: '',
            desc: '',
        };
        this.onClick = this.onClick.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
    };

    onClick = (event) => {
        this.setState({currentPage: event.target.id});
    };

    onChangeTitle = (event) => this.setState({title: event.target.value});
    onChangeDate = (event) => this.setState({date: event.target.value});
    onChangePrice = (event) => this.setState({price: event.target.value});
    onChangeDesc = (event) => this.setState({desc: event.target.value});

    render() {
        const { user } = this.props;

        const { currentPage } = this.state;

        return (
            <div>
                <Header/>
                <div className={'title'}>
                    Создать таск
                </div>
                <div className={'hr'}/>
                <div className={'inputContainer'}>
                    <input type='text' onChange={this.onChangeTitle} value={this.state.title} placeholder='Заголовок'/>
                    <input type='text' onChange={this.onChangeDesc} value={this.state.desc} placeholder='Описание'/>
                    <input type='text' onChange={this.onChangePrice} value={this.state.price} placeholder='Цена'/>
                    <input type='text' onChange={this.onChangeDate} value={this.state.data} placeholder='Срок'/>
                    <button onClick={this.onClick}>отправить</button>
                </div>
            </div>
        );
    }
}
