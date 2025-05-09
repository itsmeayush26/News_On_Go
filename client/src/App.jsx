import { useState } from 'react'
import Header from './components/Header';
import {BrowserRouter, route, Router}  from 'react-router-dom';



import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter> 

      <Header/>

      </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
