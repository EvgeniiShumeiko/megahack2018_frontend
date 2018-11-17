import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './column';

// fake data generator
const getColumns = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        key: `column-${k + offset}`,
        index: `column ${k + offset}`,
        id: k,
        items:  Array.from({ length: 10 }, (v, j) => j).map(i => ({
            id: `item-${i + offset}-${k}`,
            content: `item ${i + offset}`
        }))
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

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

export default class Board extends Component {
    state = {
        columns: getColumns(3),
    };

    onDragEnd = result => {
        const { columns } = this.state;
        console.log(result);
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (result.type === 'COLUMN'){
            this.setState({columns: reorder(columns, source.index, destination.index)});
            return;
        }

        if (source.droppableId === destination.droppableId) {
            for (let i=0; i<columns.length; ++i)
                if (columns[i].key === source.droppableId){
                    columns[i].items = reorder(columns[i].items, source.index, destination.index);
                }
        } else {
            let sourceColumnId = undefined;
            let destenationColumnId = undefined;
            for (let i=0; i<columns.length; ++i)
                if (columns[i].key === source.droppableId)
                    sourceColumnId = i;
                else if (columns[i].key === destination.droppableId)
                    destenationColumnId = i;
            let result = move(columns[sourceColumnId].items, columns[destenationColumnId].items, source, destination);
            columns[sourceColumnId].items=result[columns[sourceColumnId].key];
            columns[destenationColumnId].items=result[columns[destenationColumnId].key];
            console.log('columns', columns);
        }
        this.setState({columns})
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        const {columns, items} = this.state;
        console.log(items);
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable
                    droppableId="board"
                    type="COLUMN"
                    direction="horizontal"
                    isCombineEnabled={true}
                >
                    {
                        (provided, snapshot) => (
                            <div
                                className='time-line'
                                ref={provided.innerRef}
                                {...provided.droppableProps}>
                                {columns.map((key, index, id, items) => {
                                    return(
                                    <Column
                                        key={key}
                                        index={index}
                                        title={key}
                                        items={items}
                                    />
                                )})}
                            </div>
                        )
                    }
                </Droppable>
            </DragDropContext>
        );
    }
}
