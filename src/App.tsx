import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import {useState, useEffect} from 'react'

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse( localStorage.getItem('pacientes') || '[]') ?? []);
  const [paciente, setPaciente] =useState({});

  useEffect(() => {
    //  YA NO ES NECESARIO ESTO PUES SE PUEDE INICIAR EL STATE 
    //const obtenerLS = () => {
/*
      const pacientesLS = JSON.parse( localStorage.getItem('pacientes') || '[]') ?? [];
      if (pacientesLS) {
        setPacientes(pacientesLS);  
      }
       */  
    //};
    //obtenerLS();
  }, []);  

  useEffect(() => {
    console.log('Componene listo o pacientes modificados..');
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);


  const eliminarPaciente = (id:any) => {

    const pacientesActualizados = pacientes.filter( (pacienteState:any) => pacienteState.id !== id );
    setPacientes(pacientesActualizados);
    console.log('Eliminando Paciente',id)
  }

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
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
    </div>
    
  </div>
  )
}

export default App
