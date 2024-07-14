import React from 'react'
import Home from './Home';

export default function SearchResult() {
  return (
    <div className='mt-24'>
        <section className='grid gap-8 md:grid-cols-2 items-center'>
            <div className='rounded-lg items-center w-full md:max-w-[70%] bg-green-400'>
            <img src="" alt="logo" />
            <h2 className='text-2xl p-2'>Agency</h2>
            <h4>SYD - JFK</h4>
            <h4 className='pb-2'>2024-07-09 - 2024/10/07</h4>
            <h1 className='text-2xl font-bold p-2'>N/A</h1>
            <h6 className='pb-5'>Min Business Miles</h6>
            <h1 className='font-bold text-2xl'>N/A</h1>
            <h6 className='pb-6'>Min Business Miles</h6>
            </div>

            <div>
                <h2>helo</h2>
            </div>
        </section>
    </div>
  )
}
