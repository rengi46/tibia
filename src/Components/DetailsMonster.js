import React, { useEffect } from 'react'
import { treaerMonstruosPorRace,cargandoDatos } from '../redux/action/MonsterAction'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router'

const DetailsMonster = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const monsters = useSelector(state=>state.MonsterReducer.race)
    const cargando = useSelector(state=>state.MonsterReducer.cargandodetails)
    useEffect(()=>{
      dispatch(treaerMonstruosPorRace(id))
    },[])
    console.log(cargando);
    console.log(monsters);
  return (
    <div>
    {!cargando &&
        <>
        <h2>{monsters.creature.name}</h2>
        <img src={monsters.creature.image_url} alt=""/>
        <div>Live:{monsters.creature.hitpoints}</div>
        <div>Experience:{monsters.creature.experience_points}</div>
        <div>inmune: {monsters.creature.immune? monsters.creature.immune.join(", "):"nothig" } </div>
        <div>strong: {monsters.creature.strong? monsters.creature.strong.join(", "):"nothig" } </div>
        <div>weakness: {monsters.creature.weakness? monsters.creature.weakness.join(", "):"nothig" } </div>
        </>}
    </div>
  )
}

export default DetailsMonster