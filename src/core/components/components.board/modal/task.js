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
        skills: [false, false, false, false],
    };

    confirmHandler(){
        const { date, skills } = this.state;
        console.log('date', date);
        this.props.showModal();
        this.props.date(date);
        this.props.choosedTypes(skills);
    }

    addRemoveSkill = event => {
        console.log(event.target.id.slice(4, 5));
        const { skills } = this.state;
        skills[parseInt(event.target.id.slice(4, 5))] = event.target.value;
        this.forceUpdate();
    };

    render(){
        const { skills } = this.state;
        console.log(this.state.date);
        return(
            <div className='task-type-modal'>
                <input type='checkbox' id={`type0 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <input type='checkbox' id={`type1 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <input type='checkbox' id={`type2 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <input type='checkbox' id={`type3 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <div className='types-icons'>
                    {skills.map((skill, index) => {
                        console.log(skill);
                        return <label htmlFor={`type${index} ${this.props.columnId}`}>
                            <span className='task-type-icon'
                                  style={skill ? {background: 'rgba(0, 0, 0, .1)'} : {}}></span>
                        </label>
                    })}
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
