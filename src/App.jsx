import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Home'
import Footer from './assets/Footer'
import SideMenuButton from './assets/SideMenuButton'
import SideMenu from './assets/SideMenu'
import AccountName from './assets/AccountName'
import Logo from './assets/Logo'
import AccountBalance from './assets/AccountBalance'
import History from './assets/History'
import Transfer from './assets/Transfer'
import Modal from './assets/Modal'
import Airtime from './assets/Airtime'
import Bills from './assets/Bills'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/footer' element={<Footer />}/>
          <Route path='/sidemenubutton' element={<SideMenuButton />}/>
          <Route path='/sidemenu' element={<SideMenu />}/>
          <Route path='/accountname' element={<AccountName />}/>
          <Route path='/logo' element={<Logo />}/>
          <Route path='/accountbalance' element={<AccountBalance />}/>
          <Route path='/history' element={<History />}/>
          <Route path='/transfer' element={<Transfer />}/>
          <Route path='/modal' element={<Modal />}/>
          <Route path='/airtime' element={<Airtime />}/>
          <Route path='/bills' element={<Bills />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
