import React from 'react'
import Header from './_components/Header'

function Provider({ children }) {
  return (
    <div>
        <Header />
        <div className='mt-14 flex flex-col justify-center align-center h-full bg-[#fffdf7] font-[family-name:var(--font-satoshi-regular)] '>
          { children }
        </div>
    </div>
  )
}

export default Provider;