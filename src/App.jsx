import { useState } from 'react'
import Header from './pages/Header/Header'
import Letter from './pages/Letter/Letter'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Last from './pages/Last/Last';

function App() {
  const [cont, setCont] = useState(0)
  const [a, setA] = useState("")
  const Choose = () =>  {
    // if (cont == 0) return <Header setCont={setCont} setA={setA} a={a}></Header>
    if (cont == 0) return <Header setCont={setCont}></Header>
    if (cont == 1) return <Letter a={a}></Letter>
  }
  return (
    <>
    
      
    <Routes >
        <Route path="/" element={<Header />} />
        <Route path='/l/:name' element={<Letter />}></Route>
        <Route path='/t' element={<Last />}></Route>
      </Routes>


    </>
  )
}

export default App
