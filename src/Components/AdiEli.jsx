import React, { useState } from 'react';
import Libro from './Libro';

const AdiEli = () => {
  const [libros, setLibros] = useState([]);

  const agregarLibro = (libro) => {
    setLibros([...libros, libro]);
  };

  const eliminarLibro = (index) => {
    const nuevosLibros = [...libros];
    nuevosLibros.splice(index, 1);
    setLibros(nuevosLibros);
  };

  return (
    <div className="container">
      <h1>Gestión de Libros</h1>
      <Libro agregarLibro={agregarLibro} libros={libros} eliminarLibro={eliminarLibro} />
    </div>
    
  );
};

export default AdiEli;
