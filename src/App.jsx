import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import Practice from './components/Practice';

export default function App() {

  return (
    <>
      <h1>Introduction to Statistics</h1> 
      <Routes>
        <Route index element={<Home />} />
        <Route path='/topics' element={<Topics/>} />
        <Route path='/practice' element={<Practice/>} />
      </Routes> 
    </>
  )
}

