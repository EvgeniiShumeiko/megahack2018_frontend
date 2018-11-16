import _ from 'lodash';
import * as RJD from '@lib/main';

export class ConnectionNodeModel extends RJD.NodeModel {
    constructor(color = 'rgb(224, 98, 20)', name = 'Untitled') {
        super('connection');
        this.addPort(new RJD.DefaultPortModel(false, 'output', ' '));
        this.addPort(new RJD.DefaultPortModel(true, 'input', ' '));
        this.name = name;
        this.color = color;
    }

    deSerialize(object) {
        super.deSerialize(object);
        this.name = object.name;
        this.color = object.color;
    }

    serialize() {
        return _.merge(super.serialize(), {
            name: this.name,
            color: this.color,
        });
    }

    getInPort() {
        return this.ports.input;
    }

    getOutPort() {
        return this.ports.output;
    }
}
