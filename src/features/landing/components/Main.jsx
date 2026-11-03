import React from 'react';

export const Main = () => {

  const featuredProducts = [
    {
      id: 1,
      title: "Alemania 1990",
      price: "$85.00",
      image: `${import.meta.env.BASE_URL}Alemania.jpg`,
      year: "1990",
      country: "ALEMANIA",
    },
    {
      id: 2,
      title: "Argentina 1986",
      price: "$90.00",
      image: `${import.meta.env.BASE_URL}Argentina.jpg`,
      year: "1986",
      country: "ARGENTINA",
    },
    {
      id: 3,
      title: "Brasil 1994",
      price: "$80.00",
      image: `${import.meta.env.BASE_URL}Brasil.jpg`,
      year: "1994",
      country: "BRASIL",
    },
  ];

  return (
    <main data-bs-theme="dark" className="bg-body fg-body min-vh-100">

      {/* PORTADA */}
      <section className="bg-black fg-white py-5 border-bottom border-3 border-primary">
        <div className="container py-5 text-center">
          <span className="badge theme-warning theme-contrast rounded-0 px-3 py-2 fw-bolder text-uppercase">
            FÚTBOL DE OTRA ÉPOCA
          </span>

          <h1 className="display-1 fw-bolder text-uppercase fg-primary mt-4 mb-3">
            EL FÚTBOL ES ETERNO.
          </h1>

          <p className="fg-info fw-bolder text-uppercase font-monospace mb-3">
            CAMISETAS RETRO · HISTORIAS · LEYENDAS
          </p>

          <div className="row justify-content-center">
            <div className="col-12 md:col-8">
              <p className="fg-2 lead mb-4">
                Revive las mejores épocas del fútbol.
                Encuentra camisetas clásicas de selecciones
                que marcaron la historia y nunca pasan de moda.
              </p>
            </div>
          </div>

          <a
            href="#tienda"
            className="btn-solid theme-primary rounded-0 px-4 py-3 fw-bolder text-uppercase"
          >
            EXPLORAR COLECCIÓN →
          </a>
        </div>
      </section>

      {/* FRANJA INFORMATIVA */}
      <section className="py-3">
        <div className="container">
          <div className="d-flex justify-content-around align-items-center flex-wrap gap-3 text-center fw-bolder text-uppercase small">
            <span>HISTORIA</span>
            <span>IDENTIDAD</span>
            <span>PASIÓN</span>
            <span>RETRO FOOTBALL</span>
          </div>
        </div>
      </section>

      {/* COLECCIÓN DESTACADA */}
      <section id="tienda" className="container py-5">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-5">
          <div>
            <span className="badge theme-info theme-contrast rounded-0 mb-3 px-3 py-2">
              NUESTRA SELECCIÓN
            </span>

            <h2 className="display-5 fw-bolder text-uppercase fg-white">
              COLECCIÓN RETRO
            </h2>

            <p className="fg-2 mb-0">
              Camisetas que hicieron historia.
            </p>
          </div>

          <span className="fg-warning fw-bolder font-monospace">
            1986 — 1994
          </span>
        </div>

        {/* PRODUCTOS */}
        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 g-4">
          {featuredProducts.map((product, index) => {
            const margin =
              index === 1
                ? 'lg:mt-3'
                : index === 2
                  ? 'lg:mt-5'
                  : '';

            return (
              <div className={`col ${margin}`} key={product.id}>
                <article className="card bg-1 border border-2 border-primary rounded-0 shadow-lg h-100 overflow-hidden">
                  {/* IMAGEN */}
                  <div className="position-relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="card-img-top ratio-4x3 object-fit-cover"
                      loading="lazy"
                    />

                    <span className="badge theme-warning theme-contrast rounded-0 position-absolute top-0 start-0 m-3">
                      EDICIÓN RETRO
                    </span>
                  </div>

                  {/* INFORMACIÓN */}
                  <div className="card-body p-4">
                    <p className="fg-info small fw-bolder font-monospace mb-2">
                      SELECCIÓN / {product.country}
                    </p>

                    <h3 className="card-title fw-bolder text-uppercase fg-white">
                      {product.title}
                    </h3>

                    <p className="fg-2 small mb-4">
                      CAMISETA CLÁSICA · AÑO {product.year}
                    </p>

                    <hr className="border-primary opacity-75" />

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div>
                        <span className="d-block fg-2 small text-uppercase">
                          PRECIO
                        </span>

                        <span className="fs-4 fw-bolder fg-warning">
                          {product.price}
                        </span>
                      </div>

                      <span className="badge theme-primary theme-contrast rounded-0 p-2">
                        #{product.id.toString().padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </section>

      {/* MENSAJE FINAL */}
      <section className="bg-black border-top border-3 border-info py-5">
        <div className="container text-center py-3">
          <h2 className="display-5 fw-bolder text-uppercase fg-info">
            LAS LEYENDAS NUNCA MUEREN.
          </h2>

          <p className="fg-2 mt-3 mb-0">
            Viste la historia. Representa tu pasión.
          </p>
        </div>
      </section>
    </main>
  );
};