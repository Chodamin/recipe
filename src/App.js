import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';

// 페이지 컴포넌트 import
import Myrefrig from './pages/Myrefrig';
import Recom from './pages/Recom';
import Mypage from './pages/Mypage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import InfoRegistration from './pages/InfoRegistration';
import IngredientRegistration from './pages/IngredientRegistration';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/myrefrig" element={<Myrefrig />} />
        <Route path="/recom" element={<Recom />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/InfoRegistration" element={<InfoRegistration />} />
        <Route path="/IngredientRegistration" element={<IngredientRegistration />} />
      </Routes>
    </div>
  );
}

export default App;