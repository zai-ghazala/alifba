import React, { useState, useEffect } from "react";
import axios from "axios";

import { Poem } from "./poem.jsx";
import { Droppable } from "./droppable.jsx";


function Random() {
  const [poem, setPoem] = useState(null);
  
  
  useEffect(() => {
    axios
      .get("https://poetrydb.org/random,author/1;Dickinson")
      .then(res => {
        setPoem(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
        {poem && <Poem poem={poem} />}
      
        <Droppable/>

    </>
  );
}

export default Random;
