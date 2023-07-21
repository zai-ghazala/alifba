import React, { useState, useEffect} from 'react';
import Letter from './letter';
import Drop from './drop';
import Confetti from 'react-confetti'
import { letters } from './letters'

export default function Container() { 
   
	const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const components = letters.map(x => <Letter key={x.label} targetKey={x.label} label={x.label} letter={x.arabic}/>)

let shuffled = components
  .map((value) => ({ value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)

  
  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}

      useEffect(() => {

        var card = document.querySelector('.card');
        card.addEventListener( 'click', function() {
          var frontFace = document.querySelector('.card__face--front')
          var backFace = document.querySelector('.card__face--back')
        
            backFace.classList.toggle('top')
            frontFace.classList.toggle('top')
        })
  }, [])

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
  /><a href="http://alifba.zaiz.ai"><div className="congrats"><div className="mashallah"><h1 className="title"><span>M</span><span>A</span><span>S</span><span>H</span><span>A</span><span>A</span><span>L</span><span>L</span><span>A</span><span>H</span><span>!</span></h1></div></div></a></>  : 

   <div className="card">
<div className="letters card__face card__face--front top">


        {shuffled}
          </div>
        

          <div className="card__face card__face--back space">
        {letters.map(x => <Drop handler={() => handleDrop()} key={x.label} targetKey={x.label} name={x.label}>
                {x.arabic} 
            </Drop>)}


            </div>

</div>
    )
  }
