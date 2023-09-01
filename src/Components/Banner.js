import React from 'react'
import '../Style/Banner.css'
import {LuBrainCircuit} from 'react-icons/lu'
import quizLogo from '../Assets/quizLogo.jpg'




const Banner = () => {

  const redirect =()=>{
    window.location.href='/questions';
  }

  return (
    <>
        <div className='contentwrapper'>
      <div className='left'>
        <LuBrainCircuit className='brain'/>
      </div>
      <div className='right'>
        <img src={quizLogo} alt='Logo of quiz'/>
      </div>
      </div>
      <div className='button'>
        <button onClick={redirect} className='startButton'>START</button>
      </div>
    </>
  )
}

export default Banner