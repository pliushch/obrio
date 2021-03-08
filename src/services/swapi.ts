import axios from "axios";
import { getId } from "../helpers/getId";

export const getPlanets = async (url: string) => {
  const { data } = await axios.get(url);
  return {
    ...data,
    results: data.results.map(_transformPlanet),
  };
};

export const getPlanetInfo = async (id: string) => {
  return await axios.get(`https://swapi.dev/api/planets${id}/`);
};

export const getPersonInfo = async (url: string) => {
  return await axios.get(url);
};

export const getPersonImage = async (id: string | null) => {
  return await axios.get(
    `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  );
};

const _transformPlanet = (planet: {
  url: string;
  name: string;
  climate: string;
  population: string;
}) => ({
  id: getId(planet.url),
  name: planet.name,
  climate: planet.climate,
  population: planet.population,
});
