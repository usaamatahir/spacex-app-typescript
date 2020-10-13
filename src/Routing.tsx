import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, MissionInfo, MissionItemContainer, RocketsInfo, RocketItem, ShipsInfo, ShipItem, NavBar } from './components';


const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/missions' element={<MissionInfo />} />
        <Route path='/rockets' element={<RocketsInfo />} />
        <Route path='/ships' element={<ShipsInfo />} />
        <Route path='/missions/:id' element={<MissionItemContainer />} />
        <Route path='/rockets/:id' element={<RocketItem />} />
        <Route path='/ships/:id' element={<ShipItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;