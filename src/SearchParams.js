import { useState, useEffect } from "react";
import "regenerator-runtime/runtime";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const [pets, setPets] = useState([]);
  // custom hook
  const [breeds] = useBreedList(animal);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  }

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks-exhaustive-deps

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location{" "}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        {/* dropdown  */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(event) => setAnimal(event.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="animal">
          Breed
          <select
            id="animal"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            onBlur={(event) => setBreed(event.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          breed={pet.breed}
          animal={pet.animal}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
