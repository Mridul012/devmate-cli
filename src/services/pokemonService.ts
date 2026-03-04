import axios from "axios";

export class PokemonService {

  async getPokemon(name: string) {

    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return response.data;

  }

}