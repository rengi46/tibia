import React from 'react'
import { Link } from 'react-router-dom';

const MonserCard = ({monster}) => {
    // console.log(monster);
    const {name,race,image_url}=monster
  return (
    <Link to={`/monsters/${race}`}>
        <div className='p-2 m-2 '>
            <img className="w-2/3 h-2/3 " src={image_url} alt="Card image cap" />
            <div className='text-center'>{name}</div>
        </div>
    </Link>
    
  )
}

export default MonserCard