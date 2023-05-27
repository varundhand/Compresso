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
        >My Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'> OpenAI GPT-4 </span>
      </h1>

      <h2 className='desc'>
      Introducing Compresso, an open-source article summarizer that offers a streamlined reading experience. With Compresso, lengthy articles are transformed into concise and clear summaries, enabling you to easily grasp the main points without having to spend hours reading through paragraphs. Compresso is designed to simplify your reading and help you stay informed, no matter how busy your schedule may be. Best of all, its completely free and open-source, so you can trust that your data is secure and your privacy is protected.
      </h2>
    </header>
  )
}

export default Hero
