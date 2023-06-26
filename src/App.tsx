import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import {useState, useEffect} from 'react'

function App() {

  const [pacientes, setPacientes] = useState([]);

  const imprime2mas2 = () => {
    console.log(2+2);
  }

  
  return (
    <div className='container mx-auto mt-20'>
    <Header 
       numeros={1}
       isAdmin={false}
       fn={imprime2mas2}
    />

    <div className='mt-12 md:flex'>
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
      <ListadoPacientes 
        pacientes={pacientes}
      />
    </div>
    
  </div>
  )
}

export default App
