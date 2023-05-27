/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <p className="font-inter font-bold text-black text-center">
      Well, something isn't right :/
      <br />
      <span className="font-satoshi font-normal text-gray-700" >{error}</span>
    </p>
  )
}

export default ErrorMessage
