import React, { useState } from "react";
import LoginComponent from "./login-components/LoginComponent";
import RegisterComponent from "./register-components/RegisterComponent";
// import ToggleComponent from "./login-components/index"; // El componente que controla los botones de alternancia
import '../../App.css'; 

const Login = () => {
  const [isActive, setIsActive] = useState(false); // Estado para alternar entre login y registro

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* Formulario de registro */}
        <div className="form-container sign-up">
          <RegisterComponent />
        </div>

        {/* Formulario de inicio de sesión */}
        <div className="form-container sign-in">
          <LoginComponent />
        </div>

        {/* Componente de alternancia */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>¡Hola!</h1>
              <p>Ingresa tus datos para poder acceder al sitio.</p>
              <button className="hidden" id="login" onClick={handleLoginClick}>
                Iniciar Sesión
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>¡Hola, amig@!</h1>
              <p>Regístrate con tus datos para poder acceder al sitio.</p>
              <button className="hidden" id="register" onClick={handleRegisterClick}>
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
