import React, {Component} from 'react';
import { DragWrapper } from './DragWrapper';
import { ConnectionNodeWidget } from './nodes/connection/ConnectionNodeWidget';
import PropTypes from 'prop-types';

class Node extends Component {
    renderNode() {
        const { type, color } = this.props;

        if (type === 'connection') {
            return <ConnectionNodeWidget node={
                {position: {title: 'Connection Node', subtitle: 'node' }, name: {short: 'Surname', full: 'Name Surname'}}
            } color={color} displayOnly />;
        }
        console.warn('Unknown node type');
        return null;
    }

    render() {
        const { type, color } = this.props;

        return (
            <DragWrapper type={type} color={color} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export class NodesPanel extends React.Component {
    render() {
        const { selectedNode, onUndo, onRedo, canUndo, canRedo } = this.props;
        return (

            <div className='nodes-panel'>
                <Node type='connection' color='rgba(157, 13, 193)' displayOnly/>
            </div>
        );
    }
}
