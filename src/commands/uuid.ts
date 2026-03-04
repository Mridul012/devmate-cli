import { Command } from "commander";
import { v4 as uuidv4 } from "uuid";

export default function uuidCommand(program: Command) {

  program
    .command("uuid")
    .description("generate a uuid")
    .action(() => {

      console.log("UUID:", uuidv4());

    });

}