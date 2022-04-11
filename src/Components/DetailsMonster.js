import React, { useEffect } from 'react'
import { treaerMonstruosPorRace,cargandoDatos } from '../redux/action/MonsterAction'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router'

const DetailsMonster = ({id}) => {
    const dispatch = useDispatch()
    const monsters = useSelector(state=>state.MonsterReducer.race)
    const cargando = useSelector(state=>state.MonsterReducer.cargandodetails)
    useEffect(()=>{
      dispatch(treaerMonstruosPorRace(id))
    },[])
  return (
    <div className='m-auto text-center'>
    {!cargando &&
        <>
        {/* <h2 className='w-full bg-green-900 border-2 border-black'>{monsters.creature.name}</h2> */}
        
        <div className='flex justify-center items-center'>
          <div className='border-black rounded-md shadow-lg bg-slate-300 w-48 m-2 h-40'>
            <div>Caracteristicas</div>
            <div><strong >Live:</strong>{monsters.creature.hitpoints}</div>
            <div><strong>Experience:</strong>{monsters.creature.experience_points}</div>
          </div>
          <img className='w-1/5 h-1/5 m-auto' src={monsters.creature.image_url} alt=""/>
          <div className='border-black rounded-md shadow-lg bg-slate-300 w-48 m-2 h-40'>
            <div>Tipos</div>
            <div><strong>inmune:</strong> {monsters.creature.immune? monsters.creature.immune.join(", "):"nothig" } </div>
            <div><strong>strong:</strong> {monsters.creature.strong? monsters.creature.strong.join(", "):"nothig" } </div>
            <div><strong>weakness:</strong> {monsters.creature.weakness? monsters.creature.weakness.join(", "):"nothig" } </div>
          </div>
        </div>
        </>}
    </div>
  )
}

export default DetailsMonster