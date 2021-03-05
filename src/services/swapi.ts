import axios from "axios";

export const getPlanets = async (url: string) => {
    return await axios.get(url);
};

export const getPlanetInfo = async (url: string) => {
    return await axios.get(url);
};

export const getPersonInfo = async (url: string) => {
    return await axios.get(url);
};
