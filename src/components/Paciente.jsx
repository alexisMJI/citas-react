
const Paciente = ({paciente}) => {

  //con esto nos evitamos poner paciente.pirulito en cada span
  const {nombreM,nombreP,email,fecha,obser} = paciente;

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
  </div>
  )
}

export default Paciente