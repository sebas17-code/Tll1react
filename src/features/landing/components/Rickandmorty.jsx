
import { useEffect, useState } from 'react';

export const Rickandmorty = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // BUSCADOR AUTOMÁTICO
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(search.trim());
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

  // CONSUMIR API
  useEffect(() => {
    const controller = new AbortController();

    async function getCharacters() {
      setLoading(true);
      setError('');

      try {
        const params = new URLSearchParams();

        params.set('page', page);

        if (searchQuery) {
          params.set('name', searchQuery);
        }

        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?${params.toString()}`,
          { signal: controller.signal }
        );

        if (response.status === 404) {
          setCharacters([]);
          setInfo(null);
          setError('No se encontraron personajes.');
          return;
        }

        if (!response.ok) {
          throw new Error('Error al consultar la API');
        }

        const data = await response.json();

        setCharacters(data.results);
        setInfo(data.info);

      } catch (error) {
        if (error.name !== 'AbortError') {
          setCharacters([]);
          setInfo(null);
          setError('No se pudo conectar con la API.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    getCharacters();

    return () => controller.abort();
  }, [searchQuery, page]);

  const busy = loading || search.trim() !== searchQuery;

  return (
    <main
      data-bs-theme="dark"
      className="bg-black fg-white min-vh-100 py-4"
    >

      <div className="container-fluid px-3 px-lg-5">

        {/* ENCABEZADO */}
        <header className="text-center mb-5">

          <span className="badge bg-danger fg-contrast-danger rounded-0 px-3 py-2">
          </span>

          <h1 className="display-2 fw-bolder text-uppercase fg-info mt-3">
            RICK & MORTY
          </h1>

          <p className="font-monospace fg-warning text-uppercase">
            Explore the multiverse
          </p>

          <hr className="border border-info opacity-75" />

        </header>

        {/* BUSCADOR */}
        <section className="row justify-content-center mb-5">

          <div className="col-12 sm:col-9 lg:col-6">

            <div className="card bg-1 border border-info border-2 rounded-0 shadow-lg">

              <div className="card-body p-3">

                <label
                  htmlFor="search"
                  className="form-label fw-bolder fg-info text-uppercase"
                >
                  Buscar personaje
                </label>

                <input
                  id="search"
                  type="search"
                  className="form-control rounded-0 border-info"
                  placeholder="Escribe un nombre..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                />

              </div>
            </div>

          </div>
        </section>

        {/* RESULTADOS */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">

          <span className="fg-danger fw-bolder small text-uppercase">
            {busy
              ? 'Buscando personajes...'
              : info
                ? `${info.count} personajes encontrados`
                : 'Sin resultados'
            }
          </span>

          {info && (
            <span className="badge bg-warning fg-contrast-warning rounded-0 p-2">
              PÁGINA {page} / {info.pages}
            </span>
          )}

        </div>

        {/* CARGANDO */}
        {busy && (
          <div className="text-center py-5">

            <div
              className="spinner-border fg-info"
              role="status"
            >
              <span className="visually-hidden">
                Cargando...
              </span>
            </div>

            <p className="fg-info mt-3 fw-bolder">
              EXPLORANDO EL MULTIVERSO...
            </p>

          </div>
        )}

        {/* ERROR */}
        {!busy && error && (
          <div className="alert alert-danger rounded-0 text-center">
            <h4 className="fw-bolder text-uppercase">
              Dimensión no encontrada
            </h4>
            {error}
          </div>
        )}

        {/* TARJETAS */}
        {!busy && !error && (

          <div className="row g-4">

            {characters.map((character, index) => {

              const margin =
                index % 3 === 1
                  ? 'lg:mt-3'
                  : index % 3 === 2
                    ? 'lg:mt-5'
                    : '';

              return (

                <div
                  className={`col-12 sm:col-6 lg:col-4 ${margin}`}
                  key={character.id}
                >

                  <article className="card bg-1 border border-danger border-2 rounded-0 shadow-lg h-100 overflow-hidden">

                    <div className="row g-0 h-100">

                      {/* IMAGEN */}
                      <div className="col-5">

                        <img
                          src={character.image}
                          alt={character.name}
                          className="img-fluid w-100 h-100 object-fit-cover"
                          loading="lazy"
                        />

                      </div>

                      {/* INFORMACIÓN */}
                      <div className="col-7">

                        <div className="card-body p-3">

                          <h5 className="card-title fw-bolder text-uppercase fg-info">
                            {character.name}
                          </h5>

                          <span className={`badge rounded-0 ${
                            character.status === 'Alive'
                              ? 'bg-success'
                              : character.status === 'Dead'
                                ? 'bg-danger'
                                : 'bg-warning'
                          }`}>
                            {character.status}
                          </span>

                          <hr className="border border-danger opacity-75 my-3" />

                          <p className="small mb-2">
                            <strong className="fg-warning">
                              ESPECIE
                            </strong>
                            <br />
                            {character.species}
                          </p>

                          <p className="small mb-2">
                            <strong className="fg-warning">
                              TIPO
                            </strong>
                            <br />
                            {character.type || 'No especificado'}
                          </p>

                          <p className="small mb-0">
                            <strong className="fg-warning">
                              GÉNERO
                            </strong>
                            <br />
                            {character.gender}
                          </p>

                        </div>

                      </div>

                    </div>

                  </article>

                </div>

              );
            })}

          </div>

        )}

        {/* PAGINACIÓN */}
        {!busy && info && (

          <nav
            className="d-flex justify-content-center align-items-center flex-wrap gap-3 mt-5"
            aria-label="Paginación"
          >

            <button
              type="button"
              className="btn btn-outline-info rounded-0 fw-bolder text-uppercase"
              disabled={!info.prev}
              onClick={() => setPage((current) => current - 1)}
            >
              ← Anterior
            </button>

            <span className="badge bg-black border border-warning fg-warning rounded-0 p-3">
              {page} / {info.pages}
            </span>

            <button
              type="button"
              className="btn btn-warning rounded-0 fw-bolder text-uppercase"
              disabled={!info.next}
              onClick={() => setPage((current) => current + 1)}
            >
              Siguiente →
            </button>

          </nav>

        )}

      </div>

    </main>
  );
};
