import React from 'react'
import { Content } from '../Components/Content'
import { MonserList } from '../Components/MonserList'
import NavBar from '../Components/NavBar'

const MonsterPg = () => {
  return (
    <>
        <NavBar/>
        <Content
        title='Creatures'
        >
            <MonserList/>
        </Content>
    </>
  )
}

export default MonsterPg