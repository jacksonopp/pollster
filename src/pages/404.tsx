import React from 'react'
import Nav from '~/components/Nav'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='h-screen'>
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">404</h1>
        <h2 className="text-2xl font-bold text-center">Page not found</h2>
      </div>
    </div>
  )
}

export default NotFound