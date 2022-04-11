import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import MonsterPg from './pages/MonsterPg';
import MonsterDetails from './pages/MonsterDetails';
import HighscoresPg from './pages/HighscoresPg';
import DetailsPerson from './Components/DetailsPerson';
import HighScoreList from './Components/HighScoreList';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<MonsterPg/>} />
        <Route  path='/monsters/:id' element={<MonsterDetails/>} />
        <Route  path='/highscore' element={<HighscoresPg/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
