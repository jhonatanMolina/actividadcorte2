import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
   
    localStorage.setItem('contrasena', contrasena);
    onLogin(contrasena);
    localStorage.setItem('usuario', usuario);
    onLogin(usuario);
   

  };
  

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            className="form-control"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        
      </form>
    </div>
  );
};

export default Login;
