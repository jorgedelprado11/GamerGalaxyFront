import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


const SearchBar = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState('');


  useEffect(() => {
    dispatch((value));
  }, [value, dispatch]);

  return (
    <div>
      <input
        type="search"
        placeholder="Buscador"
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;