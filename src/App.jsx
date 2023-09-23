import { useState } from 'react'
import Libro from './Components/Libro'
import AdiEli from './Components/AdiEli'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-lg card my-5 p-4">
  
    <h1 className="display-5 text-center mt-4"> Jhonatan Molina</h1>
    <AdiEli />
    
    </div>
  
  )
}

export default App
