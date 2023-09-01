import React from 'react'
import '../Style/Footer.css'
import {TbBrandFunimation} from 'react-icons/tb';


const footer = () => {
  return (
    <div className='footerWrapper'>
        <h1 className='footerQuiz'>Quiz</h1>
        <p className='designed'>designed by <b>BZeqiri</b></p>
        <div className='haveFunIcon'>
          <p>have fun!</p>
          <TbBrandFunimation className='icon'/>
        </div>
    </div>
  )
}

export default footer