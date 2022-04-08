import React from 'react'
import { MonserList } from './MonserList'

export const Content = (props ) => {
  return (
    <div className=' bg-orange-100 border-4 border-orange-300'>
        <div className='w-full bg-green-800 border-2 border-black'>{props.title}</div>
        {props.children}
    </div>
  )
}
