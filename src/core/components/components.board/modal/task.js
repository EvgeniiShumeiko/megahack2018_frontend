import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.styl'

export default class TaskTypeModal extends Component {
    static propTypes = {
        canClose: PropTypes.bool.isRequired,
        date: PropTypes.object.isRequired,
        choosedTypes: PropTypes.object.isRequired,
    };

    state = {
        date: ''
    };

    confirmHandler(){
        this.props.canClose = true
        this
    }

    render(){
        return(
            <div className='task-type-modal'>
                <div className='types-icons'>
                    <span className='task-type-icon'></span>
                    <span className='task-type-icon'></span>
                    <span className='task-type-icon'></span>
                    <span className='task-type-icon'></span>
                </div>
                <div className='task-date'>
                    <input type='date' onChange={target => this.setState({date: target.value})}/>
                </div>
                <div className='accept-tasktype-btn' onClick={this.confirmHandler.bind(this)}>
                    ОК
                </div>
            </div>
        )
    }
}
