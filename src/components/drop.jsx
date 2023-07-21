import React from 'react';
import {Howl} from 'howler';
import { DropTarget } from 'react-drag-drop-container';

export default function Drop(props) {
const sleep = ms => new Promise(r => setTimeout(r, ms));

   const dropped = (e) => {
        e.target.style.color = '#111';
        e.containerElem.style.display = "none";
        e.target.style.webkitTextStroke = '5px #111';

        var sound = new Howl({
            src: [`/audio/${props.name}.mp3`],
            autoplay: true,
          });
        sound.play();

        props.handler()
        var frontFace = document.querySelector('.card__face--front')
        var backFace = document.querySelector('.card__face--back')
        
          frontFace.classList.toggle('top')
          sleep(3000).then(() => {  
          backFace.classList.toggle('top')
          })
    }; 

        return (
        <DropTarget
            onHit={(e) => dropped(e)}
            targetKey={props.targetKey}
            dropData={{name: props.name}}
        >
                {props.children}
        </DropTarget>
        );
}
