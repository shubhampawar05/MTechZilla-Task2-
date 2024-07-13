import { useState } from 'react'
import './App.css'

import Footer from './components/Newone/Footer'
import GithubFinder from './components/Newone/GithubFinder'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <GithubFinder/>
    <Footer/>
 
   </>
  )
}

export default App
