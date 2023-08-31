import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, createProduct } from '../../../redux/actions/actionsAdmin';

const productForm = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories); 
  const [productName, setProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name: productName,
      category: selectedCategory
    };

    dispatch(createProduct(productData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Selecciona una categoría</option>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default productForm;