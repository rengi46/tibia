import React from 'react'
import { useParams } from 'react-router'
import { Content } from '../Components/Content'
import DetailsMonster from '../Components/DetailsMonster'
import NavBar from '../Components/NavBar'

const MonsterDetails = () => {
    const {id} = useParams()
  return (
    <>
        <NavBar/>
        <Content
        title={id}
        >   
            <DetailsMonster
                id={id}
            />
        </Content>
    </>
  )
}

export default MonsterDetails