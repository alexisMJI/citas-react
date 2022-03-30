
const Paciente = ({pacient, setPaciente}) => {

  //con esto nos evitamos poner paciente.pirulito en cada span
  const {nombreM,nombreP,email,fecha,obser} = pacient;

  return (
    <div  className="mx-5 my-5 bg-white shadow-md px-5 py-5 rounded-md">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre de Mascota:
        <span className="font-normal normal-case"> {nombreM}</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre del propietario:
        <span className="font-normal normal-case"> {nombreP}</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        E-Mail:
        <span className="font-normal normal-case"> {email}</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha del Alta:
        <span className="font-normal normal-case"> {fecha}</span>
      </p>

      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Observaciones:
        <span className="font-normal normal-case"> {obser}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
          uppercase rounded-lg"
          onClick= {()=> setPaciente(pacient)}
        >Editar</button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
          uppercase rounded-lg"
        >Eliminar</button>

      </div>


  </div>
  )
}

export default Paciente