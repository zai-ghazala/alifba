import React, { useState, useEffect } from 'react';
import Letter from './letter';
import Drop from './drop';
import Confetti from 'react-confetti'


  const components = [ <Letter key="alif" targetKey="alif" label="alif" letter="ا"/>,
  <Letter key="baa" targetKey="baa" label="baa" letter="ب"/>,
  <Letter key="taa" targetKey="taa" label="taa" letter="ت"/>,
  <Letter key="saa" targetKey="saa" label="saa" letter="ث"/>,
  <Letter key="jeem" targetKey="jeem" label="jeem" letter="ج"/>,
  <Letter key="haa" targetKey="haa" label="haa" letter="ح"/>,
  <Letter key="khaa" targetKey="khaa" label="khaa" letter="خ"/>,
  <Letter key="daal" targetKey="daal" label="daal" letter="د"/>,
  <Letter key="zaal" targetKey="zaal" label="zaal" letter="ذ"/>,
  <Letter key="raa" targetKey="raa" label="raa" letter="ر"/>,
  <Letter key="zaai" targetKey="zaai" label="zaai" letter="ز"/>,
  <Letter key="seen" targetKey="seen" label="seen" letter="س"/>,
  <Letter key="sheen" targetKey="sheen" label="sheen" letter="ش"/>,
  <Letter key="suad" targetKey="suad" label="suad" letter="ص"/>,
  <Letter key="duad" targetKey="duad" label="duad" letter="ض"/>,
  <Letter Kkey="taa-heavy" targetKey="taa-heavy" label="taa-heavy" letter="ط"/>,
  <Letter key="zaa-heavy" targetKey="zaa-heavy" label="zaa-heavy" letter="ظ"/>,
  <Letter key="ain" targetKey="ain" label="ain" letter="ع"/>,
  <Letter key="gain" targetKey="gain" label="gain" letter="غ"/>,
  <Letter key="faa" targetKey="faa" label="faa" letter="ف"/>,
  <Letter key="qaaf" targetKey="qaaf" label="qaaf" letter="ق"/>,
  <Letter key="kaaf" targetKey="kaaf" label="kaaf" letter="ك"/>,
  <Letter key="laam" targetKey="laam" label="laam" letter="ل"/>,
  <Letter key="meem" targetKey="meem" label="meem" letter="م"/>,
  <Letter key="noon" targetKey="noon" label="noon" letter="ن"/>,
  <Letter key="waw" targetKey="waw" label="waw" letter="و"/>,
  <Letter key="small-haa" targetKey="small-haa" label="small-haa" letter="ه"/>,
  <Letter key="hamzah" targetKey="hamzah" label="hamzah" letter="ء"/>,
  <Letter key="yaa" targetKey="yaa" label="yaa" letter="ي"/>,
]

let shuffled = components
  .map((value) => ({ value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

export default function Container() { 
   
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])

    const [count, setCount] = useState(0)

    const handleDrop = () => {
        setCount(count + 1)
      }
    

    return ( count === 29 ? <><Confetti
    width={screenSize.width}
    height={screenSize.height}
  /><a href="http://alifba.zaiz.ai"><div className="congrats"><div className="mashallah"><h1 className="title"><span>M</span><span>A</span><span>S</span><span>H</span><span>A</span><span>A</span><span>L</span><span>L</span><span>A</span><span>H</span><span>!</span></h1></div></div></a></>  :  <><div className="letters">
        {shuffled}
          </div>
        
        <div className="space">
            
            <Drop handler={() => handleDrop()}  targetKey="alif" name="alif">
                ا 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="baa" name="baa">
                ب 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="taa" name="taa">
                ت 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="saa" name="saa">
                ث 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="jeem" name="jeem">
                ج 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="haa" name="haa">
                ح 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="khaa" name="khaa">
                خ 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="daal" name="daal">
                د 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="zaal" name="zaal">
                ذ 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="raa" name="raa">
                ر 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="zaai" name="zaai">
                ز 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="seen" name="seen">
                س 
            </Drop>

            <Drop handler={() => handleDrop()}  targetKey="sheen" name="sheen">
                ش 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="suad" name="suad">
                ص 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="duad" name="duad">
                ض 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="taa-heavy" name="taa-heavy">
                ط 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="zaa-heavy" name="zaa-heavy">
                ظ 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="ain" name="ain">
                ع 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="gain" name="gain">
                غ 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="faa" name="faa">
                ف 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="qaaf" name="qaaf">
                ق 
            </Drop>
            
            <Drop handler={() => handleDrop()}  targetKey="kaaf" name="kaaf">
                ك 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="laam" name="laam">
                ل 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="meem" name="meem">
                م 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="noon" name="noon">
                ن 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="waw" name="waw">
                و 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="small-haa" name="small-haa">
                ه 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="hamzah" name="hamzah">
                ء 
            </Drop>
            <Drop handler={() => handleDrop()}  targetKey="yaa" name="yaa">
                ي 
            </Drop>
            

            

            </div>
            </>
    )
  }
