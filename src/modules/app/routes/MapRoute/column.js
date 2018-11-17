import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import './style.styl'

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

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});

export default class Column extends Component {
    static propTypes = {
        title: PropTypes.object.isRequired,
        index: PropTypes.object.isRequired,
        items: PropTypes.object.isRequired,
    };

    render() {
        const { title, index, items } = this.props;
        console.log(title, index, 'items=', items);
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
                            style={{height: '100px', background: "#000"}}
                        >
                        </div>
                        <div className='column-tags'>
                            <span className='skill'></span>
                            <span className='skill'></span>
                            <span className='skill'></span>
                        </div>
                        <Droppable droppableId={title.key}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}>
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
                                                    )}>
                                                    {item.content}
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
