import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

export default class Letter extends React.Component {

    render() {
  
      const classes= `${this.props.label} letter`

      return (
        <DragDropContainer
          targetKey={this.props.targetKey}
          dragClone={this.props.dragClone || false}
          dragData={{label: this.props.label, letter: this.props.letter}}
          onDrop={this.landedOn}
          render = {() => {
            return <span className={classes}>{this.props.letter}</span> 
          }}
        />
          
      );
    }
  }
