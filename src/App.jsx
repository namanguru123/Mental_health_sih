import { useState } from 'react'
import Navbar from "./components/Navbar"
import Hsection1 from './components/Hsection1'
import Features from './components/Features'
import Experts from './components/Experts'
import './App.css'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hsection1></Hsection1>
      <Features></Features>
      <Experts></Experts>
    </>
  )
}

export default App
