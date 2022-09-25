
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Invite from './components/Invite'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/invite' element={<Invite />} />
    </Routes>
    </>
  );
}

export default App;
