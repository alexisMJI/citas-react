import Paciente from "./Paciente"


export default function ListadoPacientes({pacientes}) {

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ?(
        <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
              Administra tus
              <span className="text-indigo-600 font-bold"> Pacientes y citas</span>
            </p>
    
            
            {/* Interamos los datos de pacientes */}
            {pacientes.map(paciente => (
                
                <Paciente
                  key={paciente.id}
                  paciente={paciente} 
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
