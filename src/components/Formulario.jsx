const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center">
                Agrega Pacientes y 
                <span className="text-indigo-600 font-bold"> Administrarlos</span>
            </p>

            <form action="" className="bg-white shadow-md rounded-lg py-5 px-5 mt-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="nMascota" className="block text-gray-700 uppercase font-bold">Nombre de Mascota</label>
                    <input id="nMascota" type="text" placeholder="Introduzca el nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="nPropietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input id="nPropietario" type="text" placeholder="Introduzca el nombre del dueño" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="mail" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>
                    <input id="mail" type="email" placeholder="Introduzca su e-mail" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input id="fechaAlta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="observa" className="block text-gray-700 uppercase font-bold">Observaciones</label>
                    <input id="observa" type="text" placeholder="Puede introducir aqui las observaciones" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>
                <div className="mb-5">
                    <label htmlFor="observa" className="block text-gray-700 uppercase font-bold">Observaciones</label>
                    <input id="observa" type="text" placeholder="Puede introducir aqui las observaciones" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <input type="submit" className="bg-indigo-600 font-bold w-full p-5 text-white uppercase hover:bg-indigo-700 cursor-pointer" value="Agregar Paciente"/>
            </form>
        </div>
    )
}

export default Formulario