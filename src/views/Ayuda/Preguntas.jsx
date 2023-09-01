import React, { useState } from 'react'
import Pregunta from './Pregunta';

function Preguntas() {
    const [expandir, setExpandir] = useState({
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
        p7: false,
    });

    const handleExp = (index) => {
        const keys = Object.keys(expandir);
        // console.log(keys[index])
        setExpandir({
            ...expandir,
            [keys[index]]: !expandir[keys[index]] //para poder usar una variable como propiedad tiene que ir con corchetes
        })
    };
    return (
        <div>
            <Pregunta titulo={"Pregunta frecuente 1"} descripcion={"Probando"} funcion={() => handleExp(0)} expandir={expandir} propiedad={"p1"} />
            <Pregunta titulo={"Pregunta frecuente 2"} descripcion={"Probando"} funcion={() => handleExp(1)} expandir={expandir} propiedad={"p2"} />
            <Pregunta titulo={"Pregunta frecuente 3"} descripcion={"Probando"} funcion={() => handleExp(2)} expandir={expandir} propiedad={"p3"} />
            <Pregunta titulo={"Pregunta frecuente 4"} descripcion={"Probando"} funcion={() => handleExp(3)} expandir={expandir} propiedad={"p4"} />
            <Pregunta titulo={"Pregunta frecuente 5"} descripcion={"Probando"} funcion={() => handleExp(4)} expandir={expandir} propiedad={"p5"} />
            <Pregunta titulo={"Pregunta frecuente 6"} descripcion={"Probando"} funcion={() => handleExp(5)} expandir={expandir} propiedad={"p6"} />
            <Pregunta titulo={"Pregunta frecuente 7"} descripcion={"Probando"} funcion={() => handleExp(6)} expandir={expandir} propiedad={"p7"} />
        </div>
    )
}

export default Preguntas;
