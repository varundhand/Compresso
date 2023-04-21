// import React from 'react'
// import {newLogo} from '../assets'
import { ReactComponent as NewLogo } from '../assets/newLogo.svg'


const Hero = () => {
  // console.log(newLogo)
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-cener w-full mb-10 pt-3">
        <NewLogo />
        <button
          type='button'
          onClick={() => window.open('https://github.com/varundhand')}
          className='black_btn'
        >Github</button>
      </nav>
    </header>
  )
}

export default Hero
