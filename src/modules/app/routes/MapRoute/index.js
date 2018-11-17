import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Column from './column';
import TaskDescription from '@core/components/components.board/modal/taskDescription.js'

// fake data generator
const getColumns = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        key: `column-${k + offset}`,
        index: `column ${k + offset}`,
        id: k,
        items:  Array.from({ length: 10 }, (v, j) => j).map(i => ({
            id: `item-${i + offset}-${k}`,
            header: `header ${i + offset}`,
            content: `item ${i + offset}`,
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

export default class Board extends Component {
    state = {
        columns: getColumns(3),
        showTaskModal: false,
        showModalTaskId: 0
    };

    constructor(){
        super();
        this.removeItem = this.removeItem.bind(this);
    }

    addItems = (columnId) => {
        console.log(columnId);
        const { columns } = this.state;
        columns[columnId].items.push({
            id: `item-${columns[columnId].items.length}-${columnId}`,
            header: `header ${columns[columnId].items.length}`,
            content: `item ${columns[columnId].items.length}`
        });
        this.forceUpdate();
    };

    changeHeader = (newHeader, itemId) => {
        const { columns } = this.state;
        columns.forEach(column => column.items.forEach(
            item => {
                if (item.id === itemId)
                    item.header = newHeader;
            }
        ))
    };

    changeContent = (newContent, itemId) => {
        const { columns } = this.state;
        columns.forEach(column => column.items.forEach(
            item => {
                if (item.id === itemId)
                    item.content = newContent;
            }
        ))
    };

    removeItem = itemId => {
        console.log(itemId);
        console.log('columns', this.state.columns);
        let result = new Array(...this.state.columns);
        console.log(result);
        for (let i=0; i<result.length; ++i)
            result[i].items = result[i].items.filter(item => item.id !== itemId)
        console.log(result);
        this.setState({columns: result});
    };

    changeShowModalTask = itemId => {
        const { showTaskModal } =this.state;
        this.setState({showTaskModal: !showTaskModal, showModalTaskId: itemId})
    };

    showModal = (itemId) => {
        let currentItem = {};
        const { columns } = this.state;
        columns.forEach(column => column.items.forEach(
            item => {
                if (item.id === itemId)
                    currentItem = item;
            }
        ));
        return(
            <TaskDescription
                id={currentItem.id}
                content={currentItem.content}
                header={currentItem.header}
                changeContent={this.changeContent}
                changeHeader={this.changeHeader}
                removeItem={this.removeItem}
                changeShowModal={this.changeShowModalTask}
            />)
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
        const {columns, items, showTaskModal, showModalTaskId } = this.state;
        console.log(items);
        return (
            <div>
                {showTaskModal && this.showModal(showModalTaskId)}
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
                                            addItems={this.addItems}
                                            key={key}
                                            index={index}
                                            title={key}
                                            items={items}
                                            showTaskModal={this.changeShowModalTask}/>
                                    )})}
                                </div>
                            )
                        }
                    </Droppable>
                </DragDropContext>
            </div>
        );
    }
}
