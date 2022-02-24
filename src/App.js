
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Filtre from './Components/Filtre';
import Home from './Components/Home';
import Menu from './Components/Menu';

function App() {
  const [search,setSearch]=useState('')

  return (
    <div className="App">
      <Menu search={search} setSearch={setSearch}></Menu>
      <Routes>
        <Route path="/" element={<Home search={search} ></Home>}></Route>
        <Route path="/Filtre" element={<Filtre/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
