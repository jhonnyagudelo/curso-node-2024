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

import { httpClient } from '../plugins/'

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClient.get(url);

  // const resp = await fetch( url );
  // const pokemon = await resp.json();


  // throw new Error('Pokemon no existe');

  return pokemon.name;
}
