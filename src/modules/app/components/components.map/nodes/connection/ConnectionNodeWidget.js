import React, {Component} from 'react';
import * as RJD from '@lib/main';
import { ConnectionNodeModel } from './ConnectionNodeModel';

export class ConnectionNodeWidget extends Component {
  static defaultProps = {
      node: null,
      color: 'rgb(224, 98, 20)',
  };

  onRemove() {
      const { node, diagramEngine } = this.props;
      node.remove();
      diagramEngine.forceUpdate();
  }

  getInPort() {
      const { node, color, displayOnly } = this.props;
      let inputNode = node;

      if (displayOnly) {
          inputNode = new ConnectionNodeModel(node.name, color);
      }

      return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
      const { node, color, displayOnly } = this.props;
      let outputNode = node;

      if (displayOnly) {
          outputNode = new ConnectionNodeModel(node.name, color);
      }

      return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
      const { node, color: displayColor } = this.props;
      const { color } = node;
      const style = {};
      if (color || displayColor) {
          style.background = color || displayColor;
      }

      return (
          <div className='basic-node' style={style}>
              <div className='clickable-zone' onClick={this.clickHandler.bind(this)}>
                  <div>
                      <header>
                          <div className='name'>
                              {node.name}
                          </div>
                      </header>
                  </div>
              </div>
              <div className='ports'>
                  <div className='in'>
                      {this.getInPort()}
                  </div>
                  <div className='out'>
                      {this.getOutPort()}
                  </div>
              </div>
          </div>
      );
  }
}

export const ConnectionNodeWidgetFactory = React.createFactory(ConnectionNodeWidget);
