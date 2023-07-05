import Pacientes from "./Pacientes"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="text-center font-black text-3xl">Listado Pacientes</h2>
                    <p className="mt-5 text-xl text-center mb-8">
                        Administra tus {''}
                        <span className="text-indigo-700 font-bold">
                            Pacientes y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Pacientes
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) :
                <>
                    <h2 className="text-center font-black text-3xl">No hay pacientes</h2>
                    <p className="mt-5 text-xl text-center mb-8">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-700 font-bold">
                            y aparecerán en este lugar
                        </span>
                    </p>
                </>
            }

        </div>
    )
}

export default ListadoPacientes