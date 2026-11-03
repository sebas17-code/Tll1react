
import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky-top">
      <nav
        className="navbar md:navbar-expand bg-1 fg-2 border-bottom border-secondary shadow-sm"
        data-bs-theme="dark"
      >
        <div className="container-fluid px-3 px-md-4">

          {/* Marca de la tienda */}
          <NavLink
            className="navbar-brand fw-bolder text-uppercase d-flex align-items-center gap-2"
            to="/"
          >
            <span className="text-white">RETROKITS</span>
            <span className="text-warning">FC</span>
          </NavLink>

          {/* Botón para abrir el menú móvil */}
          <button
            className="btn-icon navbar-toggler rounded-0 border border-secondary"
            type="button"
            data-bs-toggle="drawer"
            data-bs-target="#navbarDrawer"
            aria-controls="navbarDrawer"
            aria-expanded="false"
            aria-label="Abrir navegación"
          >
            <span
              className="navbar-toggler-icon"
              aria-hidden="true"
            ></span>
          </button>

          {/* Menú lateral */}
          <dialog
            className="drawer drawer-end bg-1 fg-2"
            tabIndex="-1"
            id="navbarDrawer"
            aria-labelledby="navbarDrawerLabel"
          >
            <div className="drawer-header border-bottom border-secondary">
              <h5
                className="drawer-title fw-bold text-uppercase"
                id="navbarDrawerLabel"
              >
                RETROKITS FC
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="drawer"
                aria-label="Cerrar"
              ></button>
            </div>

            <div className="drawer-body mb-2 md:mb-0">

              {/* Navegación principal */}
              <ul className="nav navbar-nav me-auto gap-1">

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-uppercase fw-semibold ${
                        isActive ? "active text-warning" : "text-white"
                      }`
                    }
                    to="/"
                    end
                  >
                    Inicio
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-uppercase fw-semibold ${
                        isActive ? "active text-warning" : "text-white"
                      }`
                    }
                    to="/login"
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-uppercase fw-semibold ${
                        isActive ? "active text-warning" : "text-white"
                      }`
                    }
                    to="/api"
                  >
                    API
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link text-uppercase fw-semibold ${
                        isActive ? "active text-warning" : "text-white"
                      }`
                    }
                    to="/props"
                  >
                    Props
                  </NavLink>
                </li>

                {/* Categorías */}
                <li className="nav-item">
                  <button
                    className="nav-link text-uppercase fw-semibold text-white"
                    type="button"
                    data-bs-toggle="menu"
                    aria-expanded="false"
                    aria-controls="categoriesMenu"
                  >
                    Categorías
                  </button>

                  <div className="menu bg-1 fg-2 border border-secondary shadow-lg">
                    <a className="menu-item" href="#">
                      Camisetas de los 90s
                    </a>

                    <a className="menu-item" href="#">
                      Selecciones históricas
                    </a>

                    <hr className="menu-divider" />

                    <a className="menu-item" href="#">
                      Botines y accesorios retro
                    </a>
                  </div>
                </li>

              </ul>

              {/* Buscador */}
              <form
                className="hstack gap-2 mt-3 mt-md-0"
                role="search"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  className="form-control bg-black text-white border-secondary rounded-0"
                  type="search"
                  placeholder="Buscar camisetas..."
                  aria-label="Buscar productos"
                />

                <button
                  className="btn-solid theme-secondary rounded-0 px-3"
                  type="submit"
                  title="Buscar"
                  aria-label="Buscar"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-4-4"></path>
                  </svg>
                </button>
              </form>

            </div>
          </dialog>

        </div>
      </nav>
    </header>
  );
};
