import { useEffect } from "react"

const Paciente = ({paciente, setPaciente, eliminarPaciente}:any) => {

  useEffect(() => {
    console.log('El componente está listo.')
  });

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea Eliminar el Paciente?');
    if (respuesta) {
      eliminarPaciente(id)
    }
  }

 const {nombreMascota, nombrePropietario, email, fecha, sintomas, id} = paciente

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl text-left">
            <p className="font-bold mb-3 text-gray-700 uppercase">
              Nombre: {''} 
              <span className="font-normal normal-case">{nombreMascota}</span> 
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
              Propietario: {''} 
              <span className="font-normal normal-case">{nombrePropietario}</span> 
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
              Email: {''} 
              <span className="font-normal normal-case">{email}</span> 
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
              Fecha Alta: {''} 
              <span className="font-normal normal-case">{fecha}</span> 
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
              Sintomas: {''} 
              <span className="font-normal normal-case">{sintomas}</span> 
            </p>

            <div className="flex justify-between">
              <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover: bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => {setPaciente(paciente)}}
              >Editar</button>
              <button
                type="button"
                className="py-2 px-10 bg-red-600 hover: bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
              >Eliminar</button>
            </div>

          </div>
  )
}

export default Paciente