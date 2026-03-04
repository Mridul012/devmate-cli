import { Command } from "commander";
import { PokemonService } from "../services/pokemonService";

export default function pokemonCommand(program: Command) {

  program
    .command("pokemon <name>")
    .description("get pokemon details")
    .action(async (name) => {

      const service = new PokemonService();

      try {

        const data = await service.getPokemon(name);

        const types = data.types.map((t:any) => t.type.name).join(", ");

        console.log("Name:", data.name);
        console.log("Type:", types);
        console.log("Height:", data.height);
        console.log("Weight:", data.weight);

      } catch {

        console.log("Pokemon not found");

      }

    });

}