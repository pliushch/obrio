import axios from "axios";

export const getPlanets = async (url: string) => {
  const { data } = await axios.get(url);
  return {
    ...data,
    results: data.results.map(_transformPlanet),
  };
};

export const getPlanetInfo = async (url: string) => {
  return await axios.get(url);
};

export const getPersonInfo = async (url: string) => {
  return await axios.get(url);
};

const getPlanetId = (url: string) => {
  const idRegExp = /\/([0-9]*)\/$/;
  const id: RegExpMatchArray | null = url.match(idRegExp);
  return id ? id[1] : null;
};

const _transformPlanet = (planet: {
  url: string;
  name: string;
  climate: string;
  population: string;
}) => ({
  id: getPlanetId(planet.url),
  name: planet.name,
  climate: planet.climate,
  population: planet.population,
});
