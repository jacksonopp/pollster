import React from 'react'
import Nav from '~/components/Nav'

type Props = {}

const Poll = (props: Props) => {
  return (
    <div className='h-screen'>
      <Nav />
      <div className='flex flex-col items-center justify-evenly gap-6 h-1/2'>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 h-1/2'>
          <div className='flex flex-col items-center justify-around h-full'>
            <h1 className='text-4xl font-bold text-center text-slate-700'>
              Poll Title
            </h1>
            <p className='text-center text-slate-900'>
              Poll Question
            </p>
            <div className="flex text-slate-900 justify-evenly w-full">
              <div className='flex flex-col items-center gap-4'>
                <p>Opt 1</p>
                {/* A button that says vote */}
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                  Vote
                </button>
              </div>
              <div className='flex flex-col items-center gap-4'>
                <p>Opt 2</p>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                  Vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Poll