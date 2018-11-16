import React, {Component} from 'react';
import PropTypes from "prop-types";
//import undoImg from '../assets/undo.png';

export class Controls extends Component {
    render() {
        const { selectedNode } = this.props;
        const content = selectedNode ? JSON.stringify(selectedNode.serialize(), null, 2) : '';

        return (
            <div></div>
        );
    }
}
