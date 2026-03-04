import { Command } from "commander";
import axios from "axios";

export default function quoteCommand(program: Command) {

  program
    .command("quote")
    .description("get a random quote")
    .action(async () => {

      try {

        const res = await axios.get("https://zenquotes.io/api/random");

        const quote = res.data[0];

        console.log("Quote:", quote.q);
        console.log("Author:", quote.a);

      } catch {

        console.log("Could not fetch quote right now.");

      }

    });

}