import React, { useState } from 'react';

export const Libro = ({ agregarLibro, libros, eliminarLibro }) => {
  const [nombre, setNombre] = useState('');
  const [autor, setAutor] = useState('');
  const [fechaPublicacion, setFechaPublicacion] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre && autor && fechaPublicacion && estado) {
      agregarLibro({ nombre, autor, fechaPublicacion, estado });
      setNombre('');
      setAutor('');
      setFechaPublicacion('');
      setEstado('');
    }
  };

  return (
    <div>
      <h2>Agregar Libro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre">Nombre del Libro</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="autor">Autor del Libro</label>
          <input
            type="text"
            className="form-control"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha">Fecha de Publicación</label>
          <input
            type="text"
            className="form-control"
            id="fecha"
            value={fechaPublicacion}
            onChange={(e) => setFechaPublicacion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="estado">Estado del Libro</label>
          <select
            className="form-control"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="">Escoger un estado</option>
            <option value="Prestado">Prestado</option>
            <option value="Dañado">Dañado</option>
            <option value="Perdido">Perdido</option>
            <option value="Disponible">Disponible</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Libro
        </button>
      </form>
      <h2>Listado de Libros</h2>
      <ul>
        {libros.map((libro, index) => (
          <li key={index}>
            {libro.nombre} - {libro.autor} - {libro.fechaPublicacion} - {libro.estado}{' '}
            <button onClick={() => eliminarLibro(index)} className="btn btn-danger">
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Libro;
