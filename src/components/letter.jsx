import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

export default class Letter extends React.Component {

    render() {
  

      const handleDrag = () => {

        var frontFace = document.querySelector('.card__face--front')
        var backFace = document.querySelector('.card__face--back')
        
          
        frontFace.classList.toggle('top')
        backFace.classList.toggle('top')
      }

    

      return (
        <DragDropContainer
          targetKey={this.props.targetKey}
          dragClone={true}
          dragData={{label: this.props.label, letter: this.props.letter}}
          onDragStart={() => handleDrag()}
          onDragLeave={() => handleDrag()}
          render = {() => {
            return <span className={`${this.props.label}`}>{this.props.letter}</span> 
          }}
        />
          
      );
    }
  }
