import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <img src='https://static.tibia.com/images/global/header/tibia-logo-artwork-top.gif' className="absolute left-1 top-6"/>
    <div className='w-32 flex  flex-col justify-center content-center text-center bg-slate-500 border-2 border-gray-900 absolute left-10 top-44'>
        <div className='shadow-xl  hover:shadow-2xl'><Link to="/">Creatures</Link></div>
        {/* {/* <div className='shadow-xl  hover:shadow-2xl'><Link>Creatures</Link></div> */}
        <div className='shadow-xl  hover:shadow-2xl'><Link to={"/highscore"}>High Scores</Link></div> 
    </div>
    </>
  )
}

export default NavBar