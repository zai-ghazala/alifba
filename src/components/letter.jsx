import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

export default function Letter(props) {

      const handleDrag = () => {

        var frontFace = document.querySelector('.card__face--front')
        var backFace = document.querySelector('.card__face--back')
        
          
        frontFace.classList.toggle('top')
        backFace.classList.toggle('top')
      }


      return (
        <DragDropContainer
          targetKey={props.targetKey}
          dragClone={true}
          dragData={{label: props.label, letter: props.letter}}
          onDragStart={() => handleDrag()}
          render = {() => {
            return <span className={`${props.label}`}>{props.letter}</span> 
          }}
        />
          
      );
    }
  