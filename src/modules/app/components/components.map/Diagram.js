import React, {Component} from 'react';
import _ from 'lodash';
import { DropTarget } from 'react-dnd';
import * as RJD from '@lib/main';
import { ConnectionNodeModel } from './nodes/connection/ConnectionNodeModel';
import { diagramEngine } from './Engine';
import PropTypes from "prop-types";
import { DisptachProps } from '@core/props'
//import { coordinatesNodeChanged, updateNodeHeader, updateNodeLinks } from '../store/effects';

// Setup the diagram model
let diagramModel = new RJD.DiagramModel();

const nodesTarget = {
    drop(props, monitor, component) {
        const { x: pageX, y: pageY } = monitor.getSourceClientOffset();
        const { left = 0, top = 0 } = diagramEngine.canvas.getBoundingClientRect();
        const { offsetX, offsetY } = diagramEngine.diagramModel;
        const x = pageX - left - offsetX;
        const y = pageY - top - offsetY;
        const item = monitor.getItem();

        let node;
        if (item.type === 'connection') {
            node = new ConnectionNodeModel({title: 'Connection Node', subtitle: 'node'}, item.color);
        }

        console.log('node=',node);

        node.x = x;
        node.y = y;
        diagramModel.addNode(node);
        props.updateModel(diagramModel.serializeDiagram());
    },
};

@DropTarget('node-source', nodesTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}))
export class Diagram extends Component {
  state = {
      prevNode: '',
  }

  componentDidMount() {
      const { model } = this.props;
      if (model) {
          this.setModel(model);
      }
  }

  componentWillReceiveProps(nextProps) {
      if (!_.isEqual(this.props.model, nextProps.model)) {
          this.setModel(nextProps.model);
      }
  }

  setModel(model) {
      diagramModel = new RJD.DiagramModel();
      if (model) {
          diagramModel.deSerializeDiagram(model, diagramEngine);
      }
      diagramEngine.setDiagramModel(diagramModel);
  }

  checkChangedParametrs(node) {
      const { prevNode } = this.state;

      if (node === undefined || prevNode === undefined || prevNode.id !== node.id) {
          console.log('return');
          this.setState({ prevNode: node });
          return;
      }

      //if (prevNode.x !== node.x || prevNode.y !== node.y)
      //    coordinatesNodeChanged(node);
      //if (prevNode.name !== node.name)
      //    updateNodeHeader(node);
      //if (node.ports.input.links !== prevNode.ports.input.links || node.ports.output.links !== prevNode.ports.output.links)
      //    updateNodeLinks(node);

      this.setState({ prevNode: node });
  }

  onChange(model, action) {
      console.log('ON DIAGRAM CHANGE');
      console.log(action);

      this.checkChangedParametrs(action.model);

      // Ignore some events
      if (['items-copied'].indexOf(action.type) !== -1) {
          return;
      }

      // Check for single selected items
      if (['node-selected', 'node-moved'].indexOf(action.type) !== -1) {
          return this.props.updateModel(model, { selectedNode: action.model });
      }

      // Check for canvas events
      const deselectEvts = ['canvas-click', 'canvas-drag', 'items-selected', 'items-drag-selected', 'items-moved'];
      if (deselectEvts.indexOf(action.type) !== -1) {
          return this.props.updateModel(model, { selectedNode: null });
      }

      // Check if this is a deselection and a single node exists
      const isDeselect = ['node-deselected', 'link-deselected'].indexOf(action.type) !== -1;
      if (isDeselect && action.items.length < 1 && action.model.nodeType) {
          return this.props.updateModel(model, { selectedNode: action.model });
      }

      this.props.updateModel(model);
  }

  render() {
      const { connectDropTarget } = this.props;

      // Render the canvas
      return connectDropTarget (
          <div className='diagram-drop-container'>
              <RJD.DiagramWidget diagramEngine={diagramEngine} onChange={this.onChange.bind(this)} />
          </div>
      );
  }
}
