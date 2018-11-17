import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import TasksTypesModal from '@core/components/components.board/modal/taskType.js'

import communicationClient from '@assets/communication_client.svg';
import communicationMentor from '@assets/communication_mentor.svg';
import finish from '@assets/finish.svg';
import percent from '@assets/percent.svg';

import './style.styl'
import TaskExchange from "../TaskExchange";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver, overStyles) => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250,
    ...overStyles
});

export default class Column extends Component {
    static propTypes = {
        title: PropTypes.object.isRequired,
        index: PropTypes.object.isRequired,
        items: PropTypes.object.isRequired,
        addItems: PropTypes.func.isRequired,
        showTaskModal: PropTypes.func.isRequired,
    };

    state = {
        showModal: true,
        skills: [],
        date: '',
        skillsIcons: [percent, communicationMentor, communicationClient, finish]
    };

    changeShowModalState = () => {
        const { showModal } = this.state;
        console.log('change modal state');
        this.setState({showModal: !showModal});
        this.forceUpdate();
    };

    updateSkills = skills => {
        this.setState({skills})
    };

    updateDate = date => {
        this.setState({date})
    };

    render() {
        const { title, index, items, addItems, showTaskModal } = this.props;
        const { showModal, skills, date, skillsIcons } = this.state;

        //console.log(this.props);

        return (
            <Draggable draggableId={title.index} index={index} key={title.key}>
                {(provided, snapshot) => (
                    <div
                        className='column'
                        ref={provided.innerRef} {...provided.draggableProps}
                    >
                        <div
                            className='column-header'
                            {...provided.dragHandleProps}
                        >
                            <div className='column-tags' onClick={() => {if (showModal) this.changeShowModalState()}}>
                                {!showModal &&
                                    <TasksTypesModal
                                        showModal={this.changeShowModalState}
                                        date={this.updateDate}
                                        choosedTypes={this.updateSkills}
                                        columnId={index}
                                    />}
                                    {
                                        skills.filter(item => item).map((item, index) =>
                                            <span key={`skill-${title.id}-${index}`} className='active-skill'>
                                                <img src={skillsIcons[index]}/>
                                            </span>)
                                    }
                            </div>
                            <div className='add-items' onClick={() => addItems(title.id)}>
                                + Добавить карточку
                            </div>
                        </div>
                        <Droppable droppableId={title.key}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver, title.items > 0? {} : {background: '#fff'})}>
                                    {title.items.map((item, index) => (
                                        <Draggable
                                            key={`${this.props.index}${item.id}`}
                                            draggableId={`${this.props.index}${item.id}`}
                                            index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                    onClick={() => showTaskModal(item.id)}
                                                >
                                                    {item.header}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                    )}
            </Draggable>
        );
    }
}
