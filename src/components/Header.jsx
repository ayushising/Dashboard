import React from 'react'

const Header = ({catergory,title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>
        {catergory}
      </p>
      <p className='text-4xl font-extrabold tracking-tight text-slate-900'>{title}</p>
      </div>
  )
}

export default Header