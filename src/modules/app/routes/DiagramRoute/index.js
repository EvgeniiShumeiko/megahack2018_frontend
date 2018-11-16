import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import { NodesPanel } from '@app/components/components.map/NodesPanel';
import { Diagram } from '@app/components/components.map/Diagram';
import { Controls } from '@app/components/components.map/Controls';
import PropTypes from "prop-types";
import { DisptachProps } from '@core/props';
import { updateModel, onNodeSelected, onUndo, onRedo } from "@app/store/effects";

import './style.styl';

@connect(({ diagram }) => ({ diagram }))
export default class Demo extends React.Component {
    static propTypes = {
        ...DisptachProps,
        diagram: PropTypes.object.isRequired,
    };

    state = {
        prevNode: '',
    };

    onNodeStateChange(node) {
        this.setState({ prevNode: node });
    }

    render() {
        const { diagram, dispatch } = this.props;
        const { prevNode } = this.state;

        //saveScheme(model);
        //console.log(selectedNode == prevNode);
        //this.onNodeStateChange(selectedNod

        return (
            <DragDropContextProvider backend={HTML5Backend}>
                <div className='parent-container'>
                    <NodesPanel />
                    <Diagram
                        model={diagram.model}
                        updateModel={model => dispatch(updateModel(model))}
                        onNodeSelected={node => dispatch(onNodeSelected(node))}
                        selectedNode={diagram.selectedNode}
                        onUndo={onUndo}
                        onRedo={onRedo}
                        canUndo={false}
                        canRedo={false}
                    />
                </div>
            </DragDropContextProvider>
        );
    }
}
