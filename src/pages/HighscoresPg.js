import React from 'react'
import { Content } from '../Components/Content'
import HighScoreList from '../Components/HighScoreList'
import NavBar from '../Components/NavBar'

const HighscoresPg = () => {
  return (
    <>
    <NavBar/>
    <Content
    title='Highscores'
    >   
        <HighScoreList/>
    </Content>
</>
  )
}

export default HighscoresPg