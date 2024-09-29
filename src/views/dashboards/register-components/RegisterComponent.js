import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validarSignUp = async (e) => {
    e.preventDefault();
    if (username.length < 4) {
      alert("El nombre debe tener 4 caracteres como mínimo.");
      return;
    }
    if (!email) {
      alert("El correo no puede estar vacío.");
      return;
    }
    if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
      alert("La contraseña debe tener 8 caracteres como mínimo, incluir al menos un número y una mayúscula.");
      return;
    }

    // Realiza la petición POST al backend
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        navigate("/dashboards/dashboard1");
      }
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      alert("Error al registrar el usuario");
    }
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={validarSignUp}>
        <h1>Crear Cuenta</h1>
        <input
          type="text"
          placeholder="Nombre"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterComponent;