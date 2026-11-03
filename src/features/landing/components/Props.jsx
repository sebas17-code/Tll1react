
import React from 'react';

// Obtener imagen
function getImageUrl(person, size = "s") {
  return (
    "https://i.imgur.com/" +
    person.imageId +
    size +
    ".jpg"
  );
}

// Componente Avatar
function Avatar({ person, size }) {
  return (
    <img
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
      className="object-fit-cover"
    />
  );
}

// Página Props
export const Props = () => {

  const people = [
    {
      name: "Katsuko Saruhashi",
      imageId: "YfeOqp2"
    },
    {
      name: "Aklilu Lemma",
      imageId: "OKS67lh"
    },
    {
      name: "Lin Lanying",
      imageId: "1bX5QH6"
    }
  ];

  return (
    <main className="container py-5 text-white">

      <h2 className="text-center fw-bold mb-5">
        EJEMPLO DE PROPS
      </h2>

      <div className="d-flex flex-row justify-content-center align-items-start gap-5 flex-wrap">

        {people.map((person) => (
          <div className="text-center" key={person.imageId}>

            <Avatar person={person} size={120} />

            <h5 className="mt-3 fw-bold">
              {person.name}
            </h5>

          </div>
        ))}

      </div>

    </main>
  );
};
