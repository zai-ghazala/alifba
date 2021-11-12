import React from 'react';
import Letter from './letter';
import Drop from './drop';

export default class Container extends React.Component {

    
  render() {
      
    return (
        <>
        <div className="letters">
          <Letter targetKey="alif" label="alif" letter="ا"/>
          <Letter targetKey="baa" label="baa" letter="ب"/>
          <Letter targetKey="taa" label="taa" letter="ت"/>
          <Letter targetKey="saa" label="saa" letter="ث"/>
          <Letter targetKey="jeem" label="jeem" letter="ج"/>
          <Letter targetKey="haa" label="haa" letter="ح"/>
          <Letter targetKey="khaa" label="khaa" letter="خ"/>
          <Letter targetKey="daal" label="daal" letter="د"/>
          <Letter targetKey="zaal" label="zaal" letter="ذ"/>
          <Letter targetKey="raa" label="raa" letter="ر"/>
          <Letter targetKey="zaai" label="zaai" letter="ز"/>
          <Letter targetKey="seen" label="seen" letter="س"/>
          <Letter targetKey="sheen" label="sheen" letter="ش"/>
          <Letter targetKey="suad" label="suad" letter="ص"/>
          <Letter targetKey="duad" label="duad" letter="ض"/>
          <Letter targetKey="taa-heavy" label="taa-heavy" letter="ط"/>
          <Letter targetKey="zaa-heavy" label="zaa-heavy" letter="ظ"/>
          <Letter targetKey="ain" label="ain" letter="ع"/>
          <Letter targetKey="gain" label="gain" letter="غ"/>
          <Letter targetKey="faa" label="faa" letter="ف"/>
          <Letter targetKey="qaaf" label="qaaf" letter="ق"/>
          <Letter targetKey="kaaf" label="kaaf" letter="ك"/>
          <Letter targetKey="laam" label="laam" letter="ل"/>
          <Letter targetKey="meem" label="meem" letter="م"/>
          <Letter targetKey="noon" label="noon" letter="ن"/>
          <Letter targetKey="waw" label="waw" letter="و"/>
          <Letter targetKey="small-haa" label="small-haa" letter="ه"/>
          <Letter targetKey="hamzah" label="hamzah" letter="ء"/>
          <Letter targetKey="yaa" label="yaa" letter="ي"/>
          </div>
        
        <div className="space">
            
            <Drop targetKey="alif" name="alif">
                <span className="letter-drop">ا</span> 
            </Drop>

            <Drop targetKey="baa" name="baa">
                <span className="letter-drop">ب</span> 
            </Drop>

            <Drop targetKey="taa" name="taa">
                <span className="letter-drop">ت</span> 
            </Drop>

            <Drop targetKey="saa" name="saa">
                <span className="letter-drop">ث</span> 
            </Drop>

            <Drop targetKey="jeem" name="jeem">
                <span className="letter-drop">ج</span> 
            </Drop>

            <Drop targetKey="haa" name="haa">
                <span className="letter-drop">ح</span> 
            </Drop>

            <Drop targetKey="khaa" name="khaa">
                <span className="letter-drop">خ</span> 
            </Drop>

            <Drop targetKey="daal" name="daal">
                <span className="letter-drop">د</span> 
            </Drop>

            <Drop targetKey="zaal" name="zaal">
                <span className="letter-drop">ذ</span> 
            </Drop>

            <Drop targetKey="raa" name="raa">
                <span className="letter-drop">ر</span> 
            </Drop>

            <Drop targetKey="zaai" name="zaai">
                <span className="letter-drop">ز</span> 
            </Drop>

            <Drop targetKey="seen" name="seen">
                <span className="letter-drop">س</span> 
            </Drop>

            <Drop targetKey="sheen" name="sheen">
                <span className="letter-drop">ش</span> 
            </Drop>
            
            <Drop targetKey="suad" name="suad">
                <span className="letter-drop">ص</span> 
            </Drop>
            
            <Drop targetKey="duad" name="duad">
                <span className="letter-drop">ض</span> 
            </Drop>
            
            <Drop targetKey="taa-heavy" name="taa-heavy">
                <span className="letter-drop">ط</span> 
            </Drop>
            
            <Drop targetKey="zaa-heavy" name="zaa-heavy">
                <span className="letter-drop">ظ</span> 
            </Drop>
            
            <Drop targetKey="ain" name="ain">
                <span className="letter-drop">ع</span> 
            </Drop>
            
            <Drop targetKey="gain" name="gain">
                <span className="letter-drop">غ</span> 
            </Drop>
            
            <Drop targetKey="faa" name="faa">
                <span className="letter-drop">ف</span> 
            </Drop>
            
            <Drop targetKey="qaaf" name="qaaf">
                <span className="letter-drop">ق</span> 
            </Drop>
            
            <Drop targetKey="kaaf" name="kaaf">
                <span className="letter-drop">ك</span> 
            </Drop>
            <Drop targetKey="laam" name="laam">
                <span className="letter-drop">ل</span> 
            </Drop>
            <Drop targetKey="meem" name="meem">
                <span className="letter-drop">م</span> 
            </Drop>
            <Drop targetKey="noon" name="noon">
                <span className="letter-drop">ن</span> 
            </Drop>
            <Drop targetKey="waw" name="waw">
                <span className="letter-drop">و</span> 
            </Drop>
            <Drop targetKey="small-haa" name="small-haa">
                <span className="letter-drop">ه</span> 
            </Drop>
            <Drop targetKey="hamzah" name="hamzah">
                <span className="letter-drop">ء</span> 
            </Drop>
            <Drop targetKey="yaa" name="yaa">
                <span className="letter-drop">ي</span> 
            </Drop>
            

            

            </div>
            </>
    )
  }
}
