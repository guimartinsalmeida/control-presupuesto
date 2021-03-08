import React from 'react';
import gasto from "./Gasto"
import Gasto from './Gasto';

const Listado = ({gastos}) => (  
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto => (
            <Gasto
            key={gasto.id}
            gasto={gasto}
            ></Gasto>
        ))}
    </div>
);

 
export default Listado;