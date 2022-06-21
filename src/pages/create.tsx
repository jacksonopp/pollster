import { NextPage } from 'next'
import React from 'react'
import Nav from '~/components/Nav'

type Props = {}

const Create: NextPage<Props> = (props: Props) => {
  return (
    <div className="h-full">
      <Nav />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-10/12 lg:w-5/12">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-slate-700">Create A New Poll</h1>
            <form className="w-full max-w-lg">
              <div className="flex flex-col mb-6">
                <div className="mb-2 w-full">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="title"
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                    htmlFor="question"
                  >
                    Question
                  </label>
                  <textarea
                    className='appearance-none block w-full bg-gray-50 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id="question"
                    placeholder="Your poll question here"
                    rows={4}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                    htmlFor="opt-1"
                  >
                    Option 1
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-50 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id="opt-1"
                    type="text"
                    placeholder="Option 1"
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    className="block uppercase tracking-wide text-slate-700 text-xs font-bold mb-2"
                    htmlFor="opt-2"
                  >
                    Option 2
                  </label>
                  <input
                    className='appearance-none block w-full bg-gray-50 text-slate-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id="opt-2"
                    type="text"
                    placeholder="Option 2"
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline float-right"
                  type="submit"
                >
                  Create Poll
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create