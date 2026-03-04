import { Command } from "commander";
import os from "os";

export default function systemCommand(program: Command) {

  program
    .command("system")
    .description("show system info")
    .action(() => {

      console.log("OS:", os.platform());
      console.log("CPU Cores:", os.cpus().length);
      console.log("Memory:", os.totalmem());

    });

}