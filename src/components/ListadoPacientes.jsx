//importamos el componente Paciente
import Paciente from "./Paciente"




export default function ListadoPacientes({pacientes, setPaciente}) {
  
  
 

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {/* SI state 'pacientes' esta cargado mostrarlo sino no*/}
      {pacientes && pacientes.length ?(
        <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
              Administra tus
              <span className="text-indigo-600 font-bold"> Pacientes y citas</span>
            </p>
    
            
            {/* Con la funcion .MAP recorremos el array pacientes, pacient = i*/}
            {pacientes.map(pacient => (
                
                <Paciente
                  key={pacient.id}
                  pacient={pacient} 
                  setPaciente={setPaciente}
                /> 
                
                
                
            ))}
        </>


      )
      :
      (
        <>
         <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
              Administralos cuando los
              <span className="text-indigo-600 font-bold"> Generes</span>
            </p>
        </>
      )}
          
    </div>
  )

}
