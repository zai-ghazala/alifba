import React from 'react';
import Letter from './letter';
import Drop from './drop';

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
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

export default class Container extends React.Component {   
  render() {
      
    return (
        <>
        <div className="letters">
        {shuffled}
          </div>
        
        <div className="space">
            
            <Drop targetKey="alif" name="alif">
                ا 
            </Drop>

            <Drop targetKey="baa" name="baa">
                ب 
            </Drop>

            <Drop targetKey="taa" name="taa">
                ت 
            </Drop>

            <Drop targetKey="saa" name="saa">
                ث 
            </Drop>

            <Drop targetKey="jeem" name="jeem">
                ج 
            </Drop>

            <Drop targetKey="haa" name="haa">
                ح 
            </Drop>

            <Drop targetKey="khaa" name="khaa">
                خ 
            </Drop>

            <Drop targetKey="daal" name="daal">
                د 
            </Drop>

            <Drop targetKey="zaal" name="zaal">
                ذ 
            </Drop>

            <Drop targetKey="raa" name="raa">
                ر 
            </Drop>

            <Drop targetKey="zaai" name="zaai">
                ز 
            </Drop>

            <Drop targetKey="seen" name="seen">
                س 
            </Drop>

            <Drop targetKey="sheen" name="sheen">
                ش 
            </Drop>
            
            <Drop targetKey="suad" name="suad">
                ص 
            </Drop>
            
            <Drop targetKey="duad" name="duad">
                ض 
            </Drop>
            
            <Drop targetKey="taa-heavy" name="taa-heavy">
                ط 
            </Drop>
            
            <Drop targetKey="zaa-heavy" name="zaa-heavy">
                ظ 
            </Drop>
            
            <Drop targetKey="ain" name="ain">
                ع 
            </Drop>
            
            <Drop targetKey="gain" name="gain">
                غ 
            </Drop>
            
            <Drop targetKey="faa" name="faa">
                ف 
            </Drop>
            
            <Drop targetKey="qaaf" name="qaaf">
                ق 
            </Drop>
            
            <Drop targetKey="kaaf" name="kaaf">
                ك 
            </Drop>
            <Drop targetKey="laam" name="laam">
                ل 
            </Drop>
            <Drop targetKey="meem" name="meem">
                م 
            </Drop>
            <Drop targetKey="noon" name="noon">
                ن 
            </Drop>
            <Drop targetKey="waw" name="waw">
                و 
            </Drop>
            <Drop targetKey="small-haa" name="small-haa">
                ه 
            </Drop>
            <Drop targetKey="hamzah" name="hamzah">
                ء 
            </Drop>
            <Drop targetKey="yaa" name="yaa">
                ي 
            </Drop>
            

            

            </div>
            </>
    )
  }
}
