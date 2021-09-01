import React, { useState } from "react";
import { useDrop } from "react-dnd";

export const Droppable = () => {
   const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "word",
    drop: () => populateDroppable(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  
  const populateDroppable = (word) => {
    const words = [];
    words.push(word);
    console.log(word);
}
  
  
  return (
    <div ref={dropRef} id="droppable">
    </div>
  );
};
