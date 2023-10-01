import { useState } from 'react'
import Libro from './Components/Libro'
import AdiEli from './Components/AdiEli'
import './App.css'
import Login from './Components/Login'



function App() {
  
  const [usuarioLogueado, setUsuarioLogueado] = useState(localStorage.getItem('usuario'));

  const handleLogin = (usuario) => {
    setUsuarioLogueado(usuario);
  }

  const handleLogout = () => {
    localStorage.setItem('usuario', ''); 
    setUsuarioLogueado(null); 
    localStorage.setItem('contrasena', ''); 
    setUsuarioLogueado(null); 
  };


 return (
    
  <div className="container-lg card my-5 p-4">
  <h1 className="display-5 text-center mt-4">Biblioteca</h1>
  {usuarioLogueado ? (
    <div>
      <p>Bienvenido, {usuarioLogueado}.</p>
      <button onClick={handleLogout} className="btn btn-danger">
            Cerrar Sesión
          </button>
      <AdiEli />
    </div>
  ) : (
    <Login onLogin={handleLogin} />
  )}
</div>
);
  
  }

export default App
