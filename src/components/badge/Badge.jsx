import React from 'react'

const Badge = ({text}) => {
  return (
    <p className='inline-flex px-2 ml-1 text-xs bg-purple-100 text-primary rounded-full'>{text}</p>
  )
}

export default Badge