import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sorting from './components/Sorting'
import BarAnimation from './components/BarAnimation';
function App() {
  return (
    <>
    <div><Header/></div>
    <div><Sorting/></div>
    <div><BarAnimation/></div>
    </>
  )
}

export default App