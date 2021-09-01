import * as React from "react";
import { useState, useEffect } from "react";
import * as axios from "axios";
import { useDrag } from "react-dnd";

function Draggable() {
  const [data, setData] = useState([]);
 

 useEffect(async () => {
    const fetchData = async () => {
      const result = await axios(
        'https://poetrydb.org/random,author/1;Dickinson',
      );
 
      setData(result);
    };
 
    fetchData();
  }, []);


  const [, drag] = useDrag(() => ({ type: "draggable" }));

  console.log(data);
  return (
    <>
      {data.map((item, i) => (
        <div key={"block-" + i}>
          {item.lines.map((line, i) => (
            <div key={"line-" + i}>
              {line.split(" ").map((word, i) => (
                <span ref={drag} className="word" key={"word-" + i}>
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Draggable;
