const Pacientes = ({ setPaciente,   paciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar este paciente?');

        if(respuesta) {
            eliminarPaciente(id);
        }
    }

    return (
        <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">E-mail: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Cita: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="mt-8">
                <button
                    type="button"
                    className="py-2 px-10 mr-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-bold uppercase"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-md font-bold uppercase"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>   

            </div>

        </div>
    )
}

export default Pacientes