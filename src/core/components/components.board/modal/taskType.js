import React, { Component } from 'react';
import PropTypes from 'prop-types';

import communicationClient from '@assets/communication_client.svg';
import communicationMentor from '@assets/communication_mentor.svg';
import finish from '@assets/finish.svg';
import percent from '@assets/percent.svg';

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
        skillsIcons: [percent, communicationMentor, communicationClient, finish]
    };

    confirmHandler(){
        const { date, skills } = this.state;=
        this.props.showModal();
        this.props.date(date);
        this.props.choosedTypes(skills);
    }

    addRemoveSkill = event => {
        const { skills } = this.state;
        skills[parseInt(event.target.id.slice(4, 5))] = event.target.checked;
        this.setState({skills});
        console.log('skills', this.state.skills);
        this.forceUpdate();
    };

    render(){
        const { skills, skillsIcons } = this.state;
        console.log(this.state.date);
        return(
            <div className='task-type-modal'>
                <input type='checkbox' id={`type0 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <input type='checkbox' id={`type1 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <input type='checkbox' id={`type2 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <input type='checkbox' id={`type3 ${this.props.columnId}`} onChange={this.addRemoveSkill}/>
                <div className='task-date'>
                    <input type='date' onChange={event => this.setState({date: event.target.value})}/>
                </div>
                <div className='types-icons'>
                    {skills.map((skill, index) => {
                        console.log(skill);
                        return <label htmlFor={`type${index} ${this.props.columnId}`}>
                            <span className='task-type-icon'>
                                <img src={skillsIcons[index]} style={skill ? {background: 'rgba(0, 0, 0, .1)'} : {}}/>
                            </span>
                        </label>
                    })}
                </div>
                <div className='accept-tasktype-btn' onClick={this.confirmHandler.bind(this)}>
                    ОК
                </div>
            </div>
        )
    }
}
