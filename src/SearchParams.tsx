import { useState, useEffect, useContext, FunctionComponent } from "react";
import ThemeContext from "./ThemeContext";
import Results from "./Results";
import useBreedList from "./useBreedList";
import { Animal, Pet, PetAPIResponse } from "./APIResponseTypes";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams: FunctionComponent = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("" as Animal);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([] as Pet[]);

  // custom hook
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;
    console.log(json);
    setPets(json.pets);
  }

  useEffect(() => {
    void requestPets();
  }, []); // eslint-disable-line react-hooks-exhaustive-deps

  return (
    <div className="my-0 mx-auto w-11/12">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location" className="search-label">
          Location{" "}
          <input
            className="search-control"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        {/* dropdown  */}
        <label htmlFor="animal" className="search-label">
          Animal
          <select
            className="search-control "
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value as Animal)}
            onBlur={(event) => setAnimal(event.target.value as Animal)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="animal" className="search-label">
          Breed
          <select
            className="search-control disabled:opacity-50"
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

        <label htmlFor="theme" className="search-label">
          Theme
          <select
            className="search-control"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(event) => setBreed(event.target.value)}
          >
            <option value="darkblue">Dark Blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium orchid</option>
          </select>
        </label>
        <button
          style={{ backgroundColor: theme }}
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
