import React from 'react';
import Letter from './letter';
import Drop from './drop';
import {Howl} from 'howler';

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
    constructor() {
        super();
        this.state = {
            count: 0
        }
      }
      

      handleDrop = (count) => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
         })
      }

      playSound = () => {

        var array = ['tasnim1', 'tasnim2', 'aaminah', 'maariya1', 'maariya2', 'haleema', 'girls'];
        const random = array[Math.floor(Math.random() * array.length)];
        var sound = new Howl({
            src: [`/audio/messages/${random}.wav`]
          });
        setTimeout(function() {
        sound.play();
        }, 3000);
      }

      

  render() {

    return ( this.state.count === 29 ? <> {this.playSound()} <div className="congrats"><div className="mashallah"><h1 className="title"><span>M</span><span>A</span><span>S</span><span>H</span><span>A</span><span>A</span><span>L</span><span>L</span><span>A</span><span>H</span><span>!</span></h1><h2 className="subtitle2"><a href="http://alifba.zaiismail.net">Press here to play again!</a></h2></div></div></>  :  <><div className="letters">
        {shuffled}
          </div>
        
        <div className="space">
            
            <Drop handler={this.handleDrop}  targetKey="alif" name="alif">
                ا 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="baa" name="baa">
                ب 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="taa" name="taa">
                ت 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="saa" name="saa">
                ث 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="jeem" name="jeem">
                ج 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="haa" name="haa">
                ح 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="khaa" name="khaa">
                خ 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="daal" name="daal">
                د 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="zaal" name="zaal">
                ذ 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="raa" name="raa">
                ر 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="zaai" name="zaai">
                ز 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="seen" name="seen">
                س 
            </Drop>

            <Drop handler={this.handleDrop}  targetKey="sheen" name="sheen">
                ش 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="suad" name="suad">
                ص 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="duad" name="duad">
                ض 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="taa-heavy" name="taa-heavy">
                ط 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="zaa-heavy" name="zaa-heavy">
                ظ 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="ain" name="ain">
                ع 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="gain" name="gain">
                غ 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="faa" name="faa">
                ف 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="qaaf" name="qaaf">
                ق 
            </Drop>
            
            <Drop handler={this.handleDrop}  targetKey="kaaf" name="kaaf">
                ك 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="laam" name="laam">
                ل 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="meem" name="meem">
                م 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="noon" name="noon">
                ن 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="waw" name="waw">
                و 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="small-haa" name="small-haa">
                ه 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="hamzah" name="hamzah">
                ء 
            </Drop>
            <Drop handler={this.handleDrop}  targetKey="yaa" name="yaa">
                ي 
            </Drop>
            

            

            </div>
            </>
    )
  }
}
