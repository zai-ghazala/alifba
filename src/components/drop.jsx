import React from 'react';
import {Howl} from 'howler';
import { DropTarget } from 'react-drag-drop-container';

export default class Drop extends React.Component {
    constructor(props) {
        super(props);
    }

    sleep = ms => new Promise(r => setTimeout(r, ms));

   dropped = (e) => {
        e.target.style.color = '#111';
        e.containerElem.style.display = "none";
        e.target.style.webkitTextStroke = '5px #111';
        var sound = new Howl({
            src: [`/audio/${this.props.name}.mp3`],
            autoplay: true,
          });
        sound.play();

        this.props.handler()
        var frontFace = document.querySelector('.card__face--front')
        var backFace = document.querySelector('.card__face--back')
        
          frontFace.classList.toggle('top')
          this.sleep(3000).then(() => {  
          backFace.classList.toggle('top')
          })
    }; 

    render() {
        return (
        <DropTarget
            onHit={this.dropped}
            targetKey={this.props.targetKey}
            dropData={{name: this.props.name}}
        >
                {this.props.children}
        </DropTarget>
        );
    }
}
