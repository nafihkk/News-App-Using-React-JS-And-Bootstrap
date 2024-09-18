import React, { useState } from 'react'
import Navbar from './Componants/Navbar'
import NewsBoard from './Componants/NewsBoard'

const App = () => {
  const [category,setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/> 
      <NewsBoard category={category}/>  
    </div>
  )
}

export default App