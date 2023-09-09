import React from 'react'

function Pregunta({ titulo, descripcion, funcion, expandir, propiedad }) {
    return (
        <div
            className={`bg-white rounded-lg p-4 flex items-center justify-center cursor-pointer transition-all ${expandir[propiedad] ? "h-30" : "h-10"
                } mb-4 hover:bg-gray-300`}
            onClick={funcion}
        >
            {expandir[propiedad] ? descripcion : `${titulo}   ↓`}
        </div>
    )
}

export default Pregunta;