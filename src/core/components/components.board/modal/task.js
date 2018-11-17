import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.styl'

export default class TaskTypeModal extends Component {
    static propTypes = {
        showModal: PropTypes.func.isRequired,
        date: PropTypes.func.isRequired,
        choosedTypes: PropTypes.func.isRequired,
        columnId: PropTypes.object.isRequired,
    };

    state = {
        date: '',
        skills: [],
    };

    confirmHandler(){
        const { date, skills } = this.state;
        console.log('date', date);
        this.props.showModal();
        this.props.date(date);
        this.props.choosedTypes(skills);
    }

    render(){
        console.log(this.state.date);
        return(
            <div className='task-type-modal'>
                <input type='checkbox' id={`type1 ${this.props.columnId}`}/>
                <input type='checkbox' id={`type2 ${this.props.columnId}`}/>
                <input type='checkbox' id={`type3 ${this.props.columnId}`}/>
                <input type='checkbox' id={`type4 ${this.props.columnId}`}/>
                <div className='types-icons'>
                    <label htmlFor={`type1 ${this.props.columnId}`}><span className='task-type-icon'></span></label>
                    <label htmlFor={`type2 ${this.props.columnId}`}><span className='task-type-icon'></span></label>
                    <label htmlFor={`type3 ${this.props.columnId}`}><span className='task-type-icon'></span></label>
                    <label htmlFor={`type4 ${this.props.columnId}`}><span className='task-type-icon'></span></label>
                </div>
                <div className='task-date'>
                    <input type='date' onChange={event => this.setState({date: event.target.value})}/>
                </div>
                <div className='accept-tasktype-btn' onClick={this.confirmHandler.bind(this)}>
                    ОК
                </div>
            </div>
        )
    }
}
