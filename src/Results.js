import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
      {!pets.length ? (
        <h2>No pets found!</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            breed={pet.breed}
            animal={pet.animal}
            key={pet.id}
            id={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
