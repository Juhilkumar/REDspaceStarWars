import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharecterInfo() {
  const [character, setCharacter] = useState(null);
  const [homeInfo, setHomeInfo] = useState(null);
  const [speciesInfo, setSpeciesInfo] = useState(null);
  const [filmList, setFilms] = useState(null);
  const { id } = useParams();
  const userListUrl = `http://localhost:5002/api/v1/person/` + id;
  const homePlanetInfoUrl = "https://swapi.dev/api/planets/" + id;
  const speciesInfoUrl = "https://swapi.dev/api/species/" + id;
  const filmListUrl = "https://swapi.dev/api/films/" + id;

  useEffect(() => {
    fetchUserList();
    fetchCharacterPlanetInfo();
    fetchCharacterSpeciesInfo();
    fetchFilmsInfo();
  }, []);

  async function fetchUserList() {
    const response = await axios.get(userListUrl);
    let json = JSON.parse(JSON.stringify(response.data));
    console.log("json" + json);
    setCharacter(json);
  }

  async function fetchCharacterPlanetInfo() {
    const response = await axios.get(homePlanetInfoUrl);
    let json = JSON.parse(JSON.stringify(response.data));
    console.log("json" + json);
    setHomeInfo(json);
  }

  async function fetchCharacterSpeciesInfo() {
    const response = await axios.get(speciesInfoUrl);
    let json = JSON.parse(JSON.stringify(response.data));
    console.log("json" + json);
    setSpeciesInfo(json);
  }

  async function fetchFilmsInfo() {
    const response = await axios.get(filmListUrl);
    let json = JSON.parse(JSON.stringify(response.data));
    setFilms(json);
    console.log(filmList);
  }

  return (
    <div>
      <ul>
        <li>Name: {character?.data?.name}</li>
        <li>Height: {character?.data?.height}</li>
        <li>Mass: {character?.data?.mass}</li>
        <li>Hair Color: {character?.data?.hair_color}</li>
        <li>Skin Color: {character?.data?.skin_color}</li>
        <li>Gender: {character?.data?.gender}</li>
        <li>Birth Year: {character?.data?.birth_year}</li>
        <li className="p-3">
          <h4>Home planet</h4>
          <li>Title: {homeInfo?.name}</li>
          <li>Terrain: {homeInfo?.terrain}</li>
          <li>Population: {homeInfo?.population}</li>
        </li>
        <li className="p-3">
          <h4>Species</h4>
          <li>Name: {speciesInfo?.name}</li>
          <li>Average Lifespan: {speciesInfo?.average_lifespan}</li>
          <li>Classification: {speciesInfo?.classification}</li>
          <li>Language: {speciesInfo?.language}</li>
        </li>
        <li className="p-3">
          <h4>Films: </h4>
          <li>Title: {filmList?.title}</li>
          <li>Director: {filmList?.director}</li>
        </li>
      </ul>
    </div>
  );
}

export default CharecterInfo;
