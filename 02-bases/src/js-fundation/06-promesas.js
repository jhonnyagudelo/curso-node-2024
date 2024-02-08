// const getPokemonById = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((pokemon) => pokemon?.name);
// };
//

// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const pokemon = await res.json({});
//
//   return pokemon?.name;
// };

const { httpClienPlugin } = require("../plugins");
const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClienPlugin?.get(url);

  return pokemon?.name;
};

module.exports = getPokemonById;
