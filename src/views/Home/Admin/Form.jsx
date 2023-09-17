import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, createProduct } from "../../../redux/actions/actionsAdmin";
import {fetchSpecifications3, fetchSpecifications9, fetchSpecifications30} from "../../../redux/actions/actionsUsers"
import validate from "../../Home/Admin/validation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorias = useSelector((state) => state.categories);
  const specifications = useSelector((state) => state.specifications9);
  const specificationsSocket = useSelector((state) => state.specifications3);
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSpecifications3())
      .then((response) => {
        console.log(response, "asivan");
      });
    dispatch(fetchSpecifications9());
  }, [dispatch]);

  const [productData, setProductData] = useState({
    nombre: "",
    categoriaSeleccionada: "",
    precio: "",
    calificacion: 1,
    stock: "",
    imagen: null,
    descuento: "",
    specificationValues: {},
  });
  console.log(productData, "aca la produccion")
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedSpecifications = { ...productData.specifications };

    if (productData.categoriaSeleccionada === "9") {
      // Si la categoría seleccionada es "9" (por ejemplo, tipo_memoria)
      updatedSpecifications = {
        ...updatedSpecifications,
        [name]: {
          value: value,
          Specification: {
            name: name,
          },
        },
      };
    } else if (productData.categoriaSeleccionada === "5") {
      // Si la categoría seleccionada es "5" (por ejemplo, socket)
      updatedSpecifications = {
        ...updatedSpecifications,
        socket: {
          value: value,
          Specification: {
            name: "socket",
          },
        },
      };
    }
  
    setProductData({
      ...productData,
      [name]: value,
      specificationValues: updatedSpecifications,
    });

    const validationErrors = validate({
      ...productData,
      [name]: value,
      specifications: updatedSpecifications,
    });
    setErrors({
      ...errors,
      [name]: validationErrors[name],
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const cloudName = "dn6scmh6r";
        const uploadPreset = "wruc4oac";

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        // Realiza la solicitud HTTP para cargar la imagen en Cloudinary
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );

        // Muestra la vista previa de la imagen cargada
        setUploadedImage(response.data.secure_url);

        // Actualiza el estado productData con la URL de la imagen
        setProductData({
          ...productData,
          imagen: response.data.secure_url,
        });
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datosProducto = {
      nombre: productData.nombre,
      id_categoria: productData.categoriaSeleccionada,
      precio: productData.precio,
      calificacion: productData.calificacion,
      stock: productData.stock,
      imagen: uploadedImage,
      descuento: productData.descuento,
      specificationValues: productData.specifications,
    };

    const validationErrors = validate(productData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      dispatch(createProduct(datosProducto));
      alert("Producto creado");
      navigate("/admin");
    }
  };

  const cancelar = () => {
    navigate("/admin");
  };


  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-700 pb-3">
      <h1 className="text-center mb-10 text-4xl text-white">Crea tu producto</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md p-4 border-2 rounded-lg bg-white text-white text-center shadow-custom-1"
      >
        <div className="flex flex-col text-start mt-1">
          <label className="text-black">Nombre del producto:</label>

          <div className="text-center">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre del producto"
              value={productData.nombre}
              onChange={handleInputChange}
              className="text-black  border border-black mb-3 w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            />
            {errors.nombre && <div className="text-red-600">{errors.nombre}</div>}
          </div>
        </div>
        <div className="flex flex-col text-start">
          <label className="text-black">Selecciona una categoría:</label>
          <select
            name="categoriaSeleccionada"
            value={productData.categoriaSeleccionada}
            onChange={handleInputChange}
            className="text-black mb-2 border border-black w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          >
            <option value="" className="text-black">
              Selecciona una categoría
            </option>
            {categorias?.map((categoria, index) => (
              <option
                key={index}
                value={categoria.id_categorias}
                className="text-black border border-black mb-2 w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
              >
                {categoria.categoria}
              </option>
            ))}
          </select>
          {errors.categoriaSeleccionada && (
            <div className="text-red-600">{errors.categoriaSeleccionada}</div>
          )}
        </div>
        {productData.categoriaSeleccionada === "9"|| productData.categoriaSeleccionada === "5"&& (
  <div className="flex flex-col text-start">
    <label className="text-black">Selecciona un tipo de memoria:</label>
    <select
      name="tipo_memoria"
      value={productData.tipo_memoria}
      onChange={handleInputChange}
      className="text-black mb-2 border border-black w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
    >
      <option value="" className="text-black">
        Selecciona un tipo de memoria
      </option>
      {specifications
        .find((spec) => spec.name === "tipo_memoria")
        ?.SpecificationValues.map((valueObj, index) => (
          <option
            key={index}
            value={valueObj.value}
            className="text-black border border-black mb-2 w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          >
            {valueObj.value}
          </option>
        ))}
    </select>
    {errors.tipo_memoria && (
      <div className="text-red-600">{errors.tipo_memoria}</div>
    )}
  </div>
)}
 {productData.categoriaSeleccionada === "5" && (
  <div className="flex flex-col text-start">
    <label className="text-black">Selecciona un tipo de socket:</label>
    <select
      name="socket"
      value={productData.socket}
      onChange={handleInputChange}
      className="text-black mb-2 border border-black w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
    >
      <option value="" className="text-black">
        Selecciona un tipo de socket
      </option>
      {specificationsSocket
        .find((spec) => spec.name === "socket")
        ?.SpecificationValues.map((valueObj, index) => (
          <option
            key={index}
            value={valueObj.value}
            className="text-black border border-black mb-2 w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          >
            {valueObj.value}
          </option>
        ))}
    </select>
    {errors.socket && (
      <div className="text-red-600">{errors.socket}</div>
    )}
  </div>
)}
{productData.categoriaSeleccionada === "3" && (
  <div className="flex flex-col text-start">
    <label className="text-black">Selecciona un tipo de socket:</label>
    <select
      name="socket"
      value={productData.socket}
      onChange={handleInputChange}
      className="text-black mb-2 border border-black w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
    >
      <option value="" className="text-black">
        Selecciona un tipo de socket
      </option>
      {specificationsSocket
        .find((spec) => spec.name === "socket")
        ?.SpecificationValues.filter((valueObj, index) => (
          (index >= 0 && index <= 7) || (index >= 17 && index <= 21)
        ))
        .map((valueObj, index) => (
          <option
            key={index}
            value={valueObj.value}
            className="text-black border border-black mb-2 w-80 h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          >
            {valueObj.value}
          </option>
        ))}
    </select>
    {errors.socket && (
      <div className="text-red-600">{errors.socket}</div>
    )}
  </div>
)}
        <div className="flex flex-col text-start mt-1">
          <label className="text-black">Precio:</label>
          <input
            type="number"
            name="precio"
            placeholder="Precio"
            value={productData.precio}
            onChange={handleInputChange}
            className="text-black mb-2 w-80 border border-black h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
          />
          {errors.precio && <div className="text-red-600">{errors.precio}</div>}
        </div>
        <div className="text-center">
          <div className="flex flex-col text-start mt-1">
            <label className="text-black">Calificación:</label>
            <input
              type="number"
              name="calificacion"
              placeholder="Calificación (1-5)"
              value={productData.calificacion}
              min="1"
              max="5"
              onChange={handleInputChange}
              className="text-black mb-2 w-80 border border-black h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            />
            {errors.calificacion && (
              <div className="text-red-600">{errors.calificacion}</div>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col text-start mt-1">
            <label className="text-black">Stock:</label>
            <input
              type="number"
              name="stock"
              className="text-black mb-2 w-80 border border-black h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
              placeholder="Stock"
              value={productData.stock}
              onChange={handleInputChange}
            />
            {errors.stock && <div className="text-red-600">{errors.stock}</div>}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col text-start mt-1 ">
            <label className="text-black">Imagen:</label>
            <input
              type="file"
              name="imagen"
              placeholder="Imagen"
              accept="image/*"
              onChange={handleFileChange}
              className="text-black mb-2 w-80 border border-black h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
            />
            {uploadedImage && (
              <div>
                <img src={uploadedImage} alt="Vista previa de la imagen" width="300" />
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <div className="flex flex-col text-start mt-1">
            <label className="text-black">Descuento:</label>
            <input
              type="number"
              name="descuento"
              className="text-black mb-2 w-80 border border-black h-8 rounded-md transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500"
              placeholder="Descuento"
              value={productData.descuento}
              onChange={handleInputChange}
            />
            {errors.descuento && <div className="text-red-600">{errors.descuento}</div>}
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col items-center">
            <button type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-md w-full"
            >
              Crear Producto
            </button>
            <button
              type="button"
              onClick={cancelar}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-md w-full"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;