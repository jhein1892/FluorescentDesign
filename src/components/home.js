import React from 'react'
import redCleat from './images/redcleat.png'
import greenCleat from './images/rectangle21.png'
import blueCleat from './images/image21.png'
import './home.css'

export default function Home(){

  function handleScroll(element){
    const scrollTo = document.getElementById(element)
    scrollTo.scrollIntoView({behavior: "smooth"});
  }

  return(
    <div>
      <div className='left-section'>
        <div className='red_wrapper'>
          <img id='redCleat' src={redCleat}/>
        </div>
        <div className= 'green_wrapper'>
          <img id='greenCleat' src={greenCleat}/>
        </div>
        <div className='blue_wrapper'>
          <img id='blueCleat' src={blueCleat}/>
        </div>
      </div>
    <div className='right-section'>
      <h3 id='productName'>Red Flyknit Trainers</h3>
      <p className='price'>$190.00</p>
      <p className='sizeLabel'>Size</p>
      <div className='sizes'>
        <button
        name='small'
        >Small</button>
        <button
        name='medium'
        >Medium</button>
        <button
        name='large'
        >Large</button>
        <button
        name='ExtraLarge'
        >Extra Large</button>
      </div>
      <div className='colors'>
        <p>Colour</p>
        <div 
          name='red'
          className='redCircle'
          onClick={() => {
            handleScroll('redCleat')
          }}
        >
          <a href='#redCleat'/>
          <div className='innerRed'></div>  
        </div>
        <div 
          className='greenCircle'
          onClick={() => {
            handleScroll('greenCleat')
          }}
          >
            <a href='#greenCleat'/>
          <div className='innerGreen'></div>
        </div>
        <div
          className='blueCircle'
          name='blue'
          onClick={() => {
            handleScroll('blueCleat')
          }}
        >
          <div className='innerBlue'></div>
        </div>
      </div>
      <div>
        <button className='toCart'>Add to Cart</button>
      </div>
    </div>
    </div>
  );
}