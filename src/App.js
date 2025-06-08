import './App.css';
import BerandaPages from './pages/beranda';
import LoginPages from './pages/login';
import RegistPages from './pages/regist';

import { createElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {

  return (
  <Router>
    <Routes>
      <Route path='/beranda' element={<BerandaPages/>}/>
      <Route path='/' element={<LoginPages/>}/>
      <Route path='/regist' element={<RegistPages/>}/>
    </Routes>
  </Router>
  )
};

export default App;
