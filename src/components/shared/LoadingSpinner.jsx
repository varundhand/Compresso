import React from 'react'
import { loader } from '../../assets'

const LoadingSpinner = () => {
  return (
    <img src={loader} alt="loader" className='w-20 h-20 object-contain'/>
  )
}

export default LoadingSpinner
