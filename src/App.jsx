import {useState} from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  //Definimos los States Globales
  const [pacientes,setPacientes] = useState([]);
  const [paciente,setPaciente] = useState({});
  

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
        />
        <ListadoPacientes 
          pacientes= {pacientes}
          setPaciente= {setPaciente}
        />
      </div>
    </div>
  )
}

export default App
