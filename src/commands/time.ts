import { Command } from "commander";

export default function timeCommand(program: Command) {

  program
    .command("time")
    .description("show current time")
    .action(() => {

      const now = new Date();

      console.log("Current Time:", now.toLocaleString());

    });

}