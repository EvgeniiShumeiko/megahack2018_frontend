import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DisptachProps } from '@core/props';

import './style.styl';
import Header from "../Header";
import {TopBar} from "./topBar";
import {PersonalTasks} from "./PersonalTasks";
import {addTask} from "../../store/effects";
import {Link} from "react-router-dom";

@connect(({ user }) => ({ user }))
export class CreateTask extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
            deadLine: '',
            price: '',
            description: '',
            tag: '',
        };
        this.onClick = this.onClick.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeTag = this.onChangeTag.bind(this);
    }

    static propTypes = {
        ...DisptachProps,
    };

    onClick = (event) => {
        addTask({...this.state, ...{taskType: this.state.tag}, ...{price: parseInt(this.state.price)}});
    };

    onChangeTitle = (event) => this.setState({label: event.target.value});
    onChangeDate = (event) => this.setState({deadLine: event.target.value});
    onChangePrice = (event) => this.setState({price: event.target.value});
    onChangeDesc = (event) => this.setState({description: event.target.value});
    onChangeTag = (event) => this.setState({tag: event.target.value});

    render() {
        const { user } = this.props;

        const { currentPage } = this.state;

        return (
            <div>
                <Header/>
                <div className={'title'}>
                    Создание заказа
                </div>
                <div className={'hr'}/>
                <div className={'inputTable'}>
                    <div className={'inputContainer'}>
                        <span className={'inputTitle'}>Заголовок</span>
                        <input className={'inputTextTitle'} type='text' onChange={this.onChangeTitle} value={this.state.label}/>
                        <div className={'inputConditions'} style={{marginTop: '20px'}} >
                            <div className={'inputPrice'}>
                                <span className={'inputPriceText'}>Цена</span>
                                <input className={'inputTextPrice'} type='text' onChange={this.onChangePrice} value={this.state.price} />
                            </div>
                            <div className={'inputTime'}>
                                <span className={'inputTimeText'}>Срок исполнения</span>
                                <input className={'inputTextTime'} type='date' onChange={this.onChangeDate} value={this.state.deadLine} />
                            </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <span className={'inputTimeText'}>Категория задачи</span>
                            <input className={'inputTextTime'} type='text' onChange={this.onChangeTag} value={this.state.tag} />
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <span className={'inputTimeText'}>Описание задачи</span>
                            <input className={'inputTextTag'} type='text' onChange={this.onChangeDesc} value={this.state.description} />
                        </div>
                        <div>
                            <Link to={'/profilePage'} className={'inputButton'} onClick={this.onClick}>Отправить</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
