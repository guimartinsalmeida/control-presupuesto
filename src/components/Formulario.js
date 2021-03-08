import React, {useState} from 'react';
import Error from "./Error"
import shortid from "shortid"

const Formulario = ({agregarNuevoGasto}) => {

    const [nombre, guardarNombre] = useState("")
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError] = useState(false)
    const [gastos, guardarGastos] = useState([])




        const agregarGastos = e => {
            e.preventDefault()

            //Validar
            if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
                guardarError(true)
                return
            }
            guardarError(false)

            //construir el gasto
            const gasto = {
                nombre,
                cantidad,
                id: shortid.generate()
            }

            console.log(gasto)

            //pasar el gasto al componente principal

            agregarNuevoGasto(gasto)

            //resetear el form

            guardarNombre("")
            guardarCantidad(0)

        }


    return ( 
        <form
        onSubmit={agregarGastos}
        > 
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos presupuestos son obligatorios o Presupuesto Incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gastos</label>
                <input 
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}/>
            </div>

            <div className="campo">
                <label>Cantidad Gastos</label>
                <input 
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
                value={cantidad}
                onChange={e => guardarCantidad(parseInt(e.target.value, 10))}/>
            </div> 
            <input 
    type="submit"
    className="button-primary u-full-width"
    value="Agregar Gasto"/>
        </form>

    
     );
}
 
export default Formulario;