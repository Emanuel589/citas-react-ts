import {useState, useEffect} from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}: any) => {

  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota)
      setNombrePropietario(paciente.nombrePropietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)

      console.log(paciente)
    } else {
      console.log('No hay datos')
    }    
    
  },[paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha;
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log('Enviando Formulario...')

   if ([nombreMascota, nombrePropietario, email, fecha, sintomas].includes('')) {
      //console.log('Existe algun campo vacio. Debe ingresar datos en todos los campos...')
      setError(true)
    } else {
      //console.log('Todos los campos estan llenos...')
      setError(false)

      const objetoPaciente = {
        nombreMascota, 
        nombrePropietario, 
        email, 
        fecha, 
        sintomas,
        id:'',
      }

      if (paciente.id) {
        // si existe el paciente se edita el registro
        objetoPaciente.id = paciente.id
        console.log(paciente)
        console.log(objetoPaciente)

        const pacientesActualizados = pacientes.map( 
          (pacienteState:any) => paciente.id === pacienteState.id ? objetoPaciente : pacienteState
        )

        setPacientes(pacientesActualizados)
        setPaciente({})

      } else {
        // si no existe el paciente se crea un nuevo registro
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);
      }
       

       // Limpiamos las variables
       setNombreMascota('')
       setNombrePropietario('') 
       setEmail('') 
       setFecha('') 
       setSintomas('')

       
    }
    
  }
  
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes </h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {""}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                  {error && <Error><p>Todos los campos son obligatorios</p></Error>}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                    <input
                      id="mascota" 
                      type="text"
                      placeholder="Nombre de la Mascota" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={nombreMascota}
                      onChange={(e) => { setNombreMascota(e.target.value)}}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
                    <input
                      id="propietario" 
                      type="text"
                      placeholder="Nombre del Propietario" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={nombrePropietario}
                      onChange={(e) => { setNombrePropietario(e.target.value)}}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input
                      id="email" 
                      type="email"
                      placeholder="Email Contacto Propietario" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value)}}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Alta</label>
                    <input
                      id="fecha" 
                      type="date"
                      placeholder="Fecha Alta" 
                      className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                      value={fecha}
                      onChange={(e) => { setFecha(e.target.value)}}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
                   
                      <textarea 
                        id="sintomas" 
                        placeholder="Describe los sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => { setSintomas(e.target.value)}}
                      ></textarea>                   
                  
                </div>

                <input 
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" 
                  value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
            </form>          
          
      </div>
    )
  }
  
  export default Formulario