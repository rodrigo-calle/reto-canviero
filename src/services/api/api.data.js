const urlApi = `https://rickandmortyapi.com/api`;

export const getAllCharacters = () => 
    fetch(`${urlApi}/character/`)
    .then((res) =>  res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));


export const getCharacterById = (id) =>
    fetch(`${urlApi}/character/${id}`)
    .then((res) =>  res.json())
    .catch((error) => console.log(error));

