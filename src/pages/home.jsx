import * as React from "react";
import Container from "../components/container";
import useScreenOrientation from 'react-hook-screen-orientation'

export default function Home() {

  const screenOrientation = useScreenOrientation()

  return (
    <>
      {screenOrientation === 'portrait-primary' || screenOrientation === 'portrait-secondary' ? <div className="alert"><h1 className="title"><span>A</span><span>L</span><span>I</span><span>F</span><span>B</span><span>A</span></h1><h2 className="subtitle">DRAG & DROP</h2><p>Switch to landscape mode<br/>Turn up the volume</p></div> :
     <Container/>}
    </>
  );
}
