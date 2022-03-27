import { useState, useEffect } from 'react';
import Error from "./Error";

const Formulario = ({pacientes,setPacientes}) => {
    const [nombreM, setNombreM] = useState('');
    const [nombreP, setNombreP] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [obser, setObser] = useState('');
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const [error, setError] = useState(false);

    
    //FUNCION MANEJADOR DE SUBMIT
    const handleSubmit = (e) => {
        //Evitamnos que nos recarge la pag    
        e.preventDefault();
        //Validacion
        if([nombreM,nombreP,email,fecha,obser].includes('')){
            console.log("Hay al menos un campo vacio");
            setError(true); 
        } 
        else{ 
            setError(false);  
            //Objeto de paciente
            const obCliente={
                nombreM,
                nombreP,
                email,
                fecha,
                obser,
                id: generarId()
            }
            
            //Capturamos los datos de obCliente y lo grabamos en pacientes asi no se sobreescriben
            setPacientes([...pacientes,obCliente]);
            //Reiniciamos el Form
            setNombreM('')
            setNombreP('')
            setEmail('')
            setFecha('')
            setObser('')
            
            console.log("Se realizo el alta");
        }
    }
   


    return (
        
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center">
                Agrega Pacientes y 
                <span className="text-indigo-600 font-bold"> Administrarlos</span>
            </p>
            
            <form
                id="formUser" 
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-5 px-5 mt-5 mb-10"
            >    
            {error && <Error>
                        <p>Todos los campos son obligatorios</p>
                        </Error> 
                        
            }
                <div className="mb-5">
                    <label htmlFor="nMascota" className="block text-gray-700 uppercase font-bold">Nombre de Mascota</label>
                    <input 
                        id="nMascota" 
                        type="text" 
                        placeholder="Introduzca el nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreM}
                        onChange={(e)=> setNombreM(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="nPropietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                    <input 
                        id="nPropietario" 
                        type="text" 
                        placeholder="Introduzca el nombre del dueño" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombreP}
                        onChange={(e)=> setNombreP(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="mail" className="block text-gray-700 uppercase font-bold">Correo Electronico</label>
                    <input 
                        id="mail" 
                        type="email" 
                        placeholder="Introduzca su e-mail" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="fechaAlta" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
                    <input 
                        id="fechaAlta" 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="observaciones" className= "block text-gray-700 uppercase font-bold">Observaciones</label>
                    <textarea
                        id="observaciones"
                        className= "border-2 w-full p-2 mt-2 Oplaceholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        value={obser}
                        onChange= { (e) => setObser(e.target.value) }
                    />
                </div>
                
                <input 
                    type="submit" 
                    className="bg-indigo-600 font-bold w-full p-5 text-white uppercase hover:bg-indigo-700 cursor-pointer" 
                    value="Agregar Paciente"
                    
                />
            </form>
        </div>
    )
}

export default Formulario