import {useState, useEffect} from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  //Definimos los States Globales
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});
  const eliminarPaciente = id => {
    //filter() crea un nuevo array con todos los elementos que cumplan la condición implementada
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  useEffect(()=>{
    const obtenerLS = ()=>{
      //JSON.parse toma una cadena JSON y la transforma en un objeto de JavaScript
      //obtenemos lo que existe en el LS en caso de no existir lo carga como un array vacio 
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }

    obtenerLS();

  },[])

  useEffect(()=>{
    //JSON.stringify() toma un objeto de JavaScript y lo transforma en una cadena JSON. y con SetItem almacenamos en el LocalStorage
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header 
      
      />
      
      <div className="mt-12 md:flex">
        {/* Enviamos los state/props a los componentes */}
        <Formulario 
          pacientes= {pacientes}
          setPacientes= {setPacientes}
          paciente= {paciente}
          setPaciente= {setPaciente}
        />
        <ListadoPacientes 
          pacientes= {pacientes}
          setPaciente= {setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
