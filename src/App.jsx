import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css' ;
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from 'react-bootstrap/Button';
import { Inicio } from './pages/Inicio';
import './custom.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Inicio/>
    </div>
  )
}

export default App
