import React from 'react';
import { AuthCard, AuthField, AuthCancel } from './AuthCard.jsx';

export const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado correctamente');
  };

  return (
    <AuthCard
      icon="bi-key"
      title={<>RECUPERAR <span className="text-warning">CONTRASEÑA</span></>}
      subtitle="Ingresa tu correo para recibir las instrucciones de restauración"
    >
      <form 
        onSubmit={handleSubmit} 
        className="d-flex flex-column gap-3"
        aria-label="Formulario de recuperación de contraseña"
      >
        <AuthField
          id="forgot-email"
          label="Correo electrónico"
          type="email"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
        />

        <button 
          type="submit" 
          className="btn btn-info text-black rounded-0 w-100 py-3 fw-bolder text-uppercase mt-2"
          aria-label="Enviar instrucciones para recuperar la contraseña"
        >
          ENVIAR INSTRUCCIONES →
        </button>

        <AuthCancel to="/login">
          VOLVER AL INICIO DE SESIÓN
        </AuthCancel>
      </form>
    </AuthCard>
  );
};