import React from 'react';
import { DropTarget } from 'react-drag-drop-container';

export default class Drop extends React.Component {
    constructor(props) {
        super(props);
    }

   dropped = (e) => {
        e.target.style.color = '#111';
    }; 

    render() {
        return (
        <DropTarget
            onHit={this.dropped}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}
        >
            <div className="drop">
                {this.props.children}
            </div>
        </DropTarget>
        );
    }
}
