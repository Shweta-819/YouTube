import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-1  m-3 bg-gray-300 rounded-lg w-max '>{name}</button>
    </div>
  )
}

export default Button;