import React from 'react'
import outfit from '../img/outfit1.png'
const DetailsPerson = ({name,vocation,world,lvl}) => {
  return (
    <div className='w-full grid grid-cols-5'>
        <img className='w-16' src={outfit}/>
        <h1 className='p-4'>{name}</h1>
        <h3 className='p-4'>{vocation}</h3>
        <h3 className='p-4'>{world}</h3>
        <h3 className='p-4'>{lvl}</h3>
    </div>
  )
}

export default DetailsPerson