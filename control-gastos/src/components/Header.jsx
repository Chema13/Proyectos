import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidadPresupuesto, gastos, setGastos }) => {
    return (
        <header>
            <h1>Planificaro de Gastos</h1>

            {isValidPresupuesto ? (
                <ControlPresupuesto
                    gastos={gastos}
                    setGastos={setGastos}
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidadPresupuesto={setIsValidadPresupuesto}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidadPresupuesto={setIsValidadPresupuesto}
                />
            )}

        </header>
    )
}

export default Header