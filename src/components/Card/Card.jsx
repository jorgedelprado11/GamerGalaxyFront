import { Link } from "react-router-dom";

const Card = ({ producto }) => {
  //Para crear la carta necesito: id, nombre, imagen, precio y boton agregar al carrito.

  //Tengo que crear un handler para agregar al carrito los productos

  return (
    <div className="card">
      {!producto.imagenes.length ? null : (
        <div>
          <Link to={`/${producto.id_producto}`}>
            <img
              key={producto.imagenes[0].id_producto_imagen}
              src={producto.imagenes[0].ruta}
              alt={producto.nombre}
              style={{ width: "120px", height: "100px" }}
            />
          </Link>
          <h3>{producto.nombre}</h3>
          <h5>$ {producto.precio}</h5>
          <button>AGREGAR AL CARRITO</button>
        </div>
      )}
    </div>
  );
};

export default Card;
