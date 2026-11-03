import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Iniciando sesión...");
  };

  return (
    <main
      data-bs-theme="dark"
      className="bg-black min-vh-100 d-flex align-items-center py-5"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">

            <div className="card bg-black border border-2 border-info rounded-0 shadow-lg">
              <div className="card-body p-4 p-sm-5">

                <div className="text-center mb-4">
                  <span className="badge bg-warning text-black rounded-0 px-3 py-2 fw-bolder text-uppercase">
                    RETRO FOOTBALL STORE
                  </span>

                  <h1 className="display-5 fw-bolder text-uppercase text-white mt-4">
                    RETROKITS FC
                  </h1>

                  <p className="text-info fw-bolder text-uppercase small">
                    TU PASIÓN, TU HISTORIA.
                  </p>

                  <p className="text-light small">
                    Ingresa al vestuario para consultar tus pedidos
                    y guardar tus camisetas favoritas.
                  </p>
                </div>

                <form onSubmit={handleSubmit} aria-label="Formulario de inicio de sesión">

                  <div className="mb-4">
                    <label
                      htmlFor="loginEmail"
                      className="form-label text-info fw-bolder text-uppercase"
                    >
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg bg-black text-white border border-2 border-info rounded-0"
                      id="loginEmail"
                      placeholder="correo@ejemplo.com"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="loginPassword"
                      className="form-label text-info fw-bolder text-uppercase"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg bg-black text-white border border-2 border-info rounded-0"
                      id="loginPassword"
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                    />
                  </div>

                  <div className="mb-4 form-check">
                    <input
                      type="checkbox"
                      id="rememberMeCheck"
                      className="form-check-input border-info rounded-0"
                    />
                    <label
                      htmlFor="rememberMeCheck"
                      className="form-check-label text-light small"
                    >
                      Mantener mi sesión iniciada
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-info text-black rounded-0 w-100 py-3 fw-bolder text-uppercase"
                    aria-label="Iniciar sesión en RetroKits FC"
                  >
                    ENTRAR A LA CANCHA →
                  </button>

                  <div className="mt-4 pt-4 border-top border-secondary text-center">
                    <div className="mb-4">
                      <p className="text-light small mb-2">
                        ¿Problemas para ingresar?
                      </p>
                      <Link
                        to="/forgot-password"
                        className="text-white fw-bolder text-decoration-none text-uppercase"
                        aria-label="Recuperar contraseña olvidada"
                      >
                        OLVIDÉ MI CONTRASEÑA
                      </Link>
                    </div>

                    <div>
                      <p className="text-light small mb-2">
                        ¿Todavía no tienes equipo?
                      </p>
                      <Link
                        to="/register"
                        className="text-info fw-bolder text-decoration-none text-uppercase"
                        aria-label="Registrar una nueva cuenta"
                      >
                        FICHAR AHORA · REGISTRARSE
                      </Link>
                    </div>
                  </div>

                </form>

              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-light small font-monospace text-uppercase">
                RETROKITS FC © 2026
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};