import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchCategories,
  createProduct,
} from "../../../redux/actions/actionsAdmin";
/* import {Cloudinary} from "@cloudinary/url-gen"; */

const productForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categories);
  /* const cld = new Cloudinary({cloud: {cloudName: 'dl0lr7gb1'}}); */

  const [producto, setProducto] = useState({
    nombre: "",
    categoria: "",
    precio: "",
    calificacion: "",
    stock: "",
    garantia: "",
    iva: "",
  });

  const [error, setError] = useState({});

  const handleChange = () => {};

  // console.log('categorias form',categorias);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosProducto = {
      nombre: nombreProducto,
      id_categoria: categoriaSeleccionada,
      precio: precio,
      calificacion: calificacion,
      stock: stock,
      imagen: garantia,
      descuento: iva,
    };

    dispatch(createProduct(datosProducto));
    alert("producto creado");
    navigate("/admin");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 border-2 rounded-lg bg-slate-600 text-white text-center"
      >
        <h1 className="text-center mb-10 text-4xl text-white">
          Crea tu producto
        </h1>
        <div className="flex flex-col items-center">
          <label>Nombre del producto</label>
          <div className="text-center">
            <input
              type="text"
              placeholder="Nombre del producto"
              value={producto.nombre}
              onChange={handleChange}
              className="text-black mb-10 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            />
          </div>
        </div>
        <div className="text-center">
          <select
            value={producto.categoria}
            onChange={handleChange}
            className="text-black mb-2 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          >
            <option value="">Selecciona una categoría</option>
            {categorias?.map((categoria, index) => (
              <option
                key={index}
                value={categoria.id_categorias}
                className="text-black mb-2 w-80 h-6rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
              >
                {categoria.categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center">
          <label className="mt-2">Precio</label>
          <input
            type="number"
            placeholder="Precio"
            value={producto.precio}
            onChange={handleChange}
            className="text-black mb-2 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          />
        </div>
        <div className="text-center">
          <div className="flex flex-col items-center">
            <label className="mt-2">Calificación</label>
            <input
              type="number"
              placeholder="Calificación (1-5)"
              min="1"
              max="5"
              value={producto.calificacion}
              onChange={handleChange}
              className="text-black mb-2 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center">
            <label>Stock</label>
            <input
              type="number"
              className="text-black mb-2 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
              placeholder="Stock"
              value={producto.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center ">
            <label className="mt-2">Imagen</label>
            <input
              type="text"
              placeholder="Imagen"
              value={producto.imagen}
              onChange={handleChange}
              className="text-black mb-2 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center">
            <label>Descuento</label>
            <input
              type="number"
              className="text-black mb-2 w-80 h-6 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
              placeholder="Descuento"
              value={producto.descuento}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center">
            <button type="submit" className="bg-green-700">
              Crear Producto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default productForm;
