import React from 'react';
import { DropTarget } from 'react-drag-drop-container';
import {Howl} from 'howler';

export default class Drop extends React.Component {
    constructor(props) {
        super(props);
    }

   dropped = (e) => {
        e.target.style.color = '#111';
        e.target.style.webkitTextStroke = '5px #111'        
        var sound = new Howl({
            src: [`/audio/${this.props.name}.wav`]
          });
        sound.play();
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
