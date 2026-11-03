import React from 'react';
import { Link } from 'react-router-dom';

/** Contenedor común de Login / Register / ForgotPassword con estilo RetroKits FC. */
export const AuthCard = ({ icon, title, subtitle, children }) => (
  <div className="container d-flex justify-content-center align-items-center py-4 py-sm-5 px-3">
    
    {/* TARJETA OSCURA Y CUADRADA */}
    <div className="card w-100 bg-black border border-2 border-info rounded-0 shadow-lg p-4 p-sm-5">
      
      <div className="text-center mb-4">
        
        {/* ÍCONO ESTILO BADGE DE RETROKITS */}
        {icon && (
          <span className="badge bg-black text-warning border border-warning rounded-0 px-3 py-2 mb-3 fw-bolder text-uppercase">
            <i className={`bi ${icon} fs-5`} aria-hidden="true"></i>
          </span>
        )}
        
        {/* TÍTULO */}
        <h1 className="h3 text-white fw-bolder m-0 text-uppercase">
          {title}
        </h1>
        
        {/* SUBTÍTULO */}
        {subtitle && (
          <p className="text-info fw-bolder text-uppercase small mt-2 mb-0">
            {subtitle}
          </p>
        )}
        
      </div>
      
      {children}
      
    </div>
  </div>
);


/** Campo con <label> realmente asociado al <input> (accesibilidad y diseño oscuro). */
export const AuthField = ({ id, label, aside, ...inputProps }) => (
  <div className="d-flex flex-column gap-1 text-start mb-4">
    
    <div className="d-flex justify-content-between align-items-center gap-2">
      <label 
        htmlFor={id} 
        className="form-label text-info fw-bolder text-uppercase mb-0"
      >
        {label}
      </label>
      {aside}
    </div>
    
    <input 
      id={id} 
      name={id} 
      required 
      className="form-control form-control-lg bg-black text-white border border-2 border-info rounded-0" 
      {...inputProps} 
    />
    
  </div>
);


/** Enlace para cancelar o volver, adaptado a la tipografía urbana. */
export const AuthCancel = ({ to = '/', children = 'Cancelar y volver al inicio' }) => (
  <div className="text-center mt-3 pt-3 border-top border-secondary">
    <Link 
      to={to} 
      className="text-white fw-bolder text-decoration-none text-uppercase small"
    >
      {children}
    </Link>
  </div>
);