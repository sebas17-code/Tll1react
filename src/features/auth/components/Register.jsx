import React from 'react';
import { Link } from 'react-router-dom';
import { AuthCard, AuthField, AuthCancel } from './AuthCard.jsx';

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado correctamente');
  };

  return (
    <AuthCard
      icon="bi-person-plus"
      title={<>FICHAR AHORA EN <span className="text-warning">RETROKITS FC</span></>}
      subtitle="Crea tu cuenta de aficionado y guarda tus camisetas históricas"
    >
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3" aria-label="Formulario de registro">
        <AuthField
          id="register-name"
          label="Nombre completo"
          type="text"
          placeholder="Juan Pérez"
          autoComplete="name"
        />

        <AuthField
          id="register-email"
          label="Correo electrónico"
          type="email"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
        />

        <AuthField
          id="register-password"
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          minLength={8}
        />

        <button 
          type="submit" 
          className="btn btn-info text-black rounded-0 w-100 py-3 fw-bolder text-uppercase mt-2"
          aria-label="Registrar nueva cuenta en RetroKits FC"
        >
          COMPLETAR FICHAJE →
        </button>

        <p className="text-center text-light small m-0 mt-2">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-info fw-bolder text-decoration-none text-uppercase ms-1">
            INICIA SESIÓN AQUÍ
          </Link>
        </p>

        <AuthCancel to="/">VOLVER AL INICIO</AuthCancel>
      </form>
    </AuthCard>
  );
};