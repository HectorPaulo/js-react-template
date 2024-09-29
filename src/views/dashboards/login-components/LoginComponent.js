import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginComponent = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
const validateLogin = () => {
  email == null || email === '' ? alert("El correo no puede estar vacío.") : 
  password == null || password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password) ? alert("La contraseña debe tener 8 caracteres como mínimo, incluir al menos un número y una mayúscula.") : navigate("/dashboards/dashboard1");
  }

  
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Iniciar Sesión</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <a href="/">Olvidé mi contraseña</a>
        <button onClick={validateLogin}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginComponent;
