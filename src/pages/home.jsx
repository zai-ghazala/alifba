import * as React from "react";
import Container from "../components/container";

export default function Home() {

  const [orientation, setOrientation] = useState('portrait');

useEffect(() => {
    window.addEventListener('orientationchange', setScreenOrientation)
    return () => {
      document.removeEventListener('orientationchange', setScreenOrientation)
    }
  }, [])

  const setScreenOrientation = () => {
    if(window.matchMedia("(orientation: portrait)").matches){
      setOrientation('portrait');
    }

    if(window.matchMedia("(orientation: landscape)").matches){
      setOrientation('landscape');
    }
  }

  return (
    <>
      {orientation === 'portrait' ? <div className="alert"><h1 className="title"><span>A</span><span>L</span><span>I</span><span>F</span><span>B</span><span>A</span></h1><h2 className="subtitle">DRAG & DROP</h2><p>Switch to landscape mode<br/>Turn up the volume</p></div> :
     <Container/>}
    </>
  );
}
