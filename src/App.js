import { BrowserRouter, Route, Routes } from 'react-router-dom';
import{useParams} from 'react';
import { Content } from './Components/Content';
import DetailsMonster from './Components/DetailsMonster';
import { MonserList } from './Components/MonserList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Content title={"Creatures"}><MonserList/></Content>} />
        <Route  path='/monsters/:id' element={<Content><DetailsMonster/></Content>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
