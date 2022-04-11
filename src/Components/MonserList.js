import React from 'react'
import MonserCard from './MonserCard'
import { treaerMonstruos } from '../redux/action/MonsterAction'
import { useDispatch,useSelector } from 'react-redux'

export const MonserList = () => {
    const dispatch = useDispatch()
    const monsters = useSelector(state=>state.MonsterReducer.monsters)
    React.useEffect(() => {
        dispatch(treaerMonstruos(),false)
    }, [dispatch])
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
        {monsters.creatures? monsters.creatures.creature_list.map((monster,key)=>(
            <MonserCard key={key} monster={monster}/>
        )):<p>no hay nada</p>}
    </div>
  )
}
