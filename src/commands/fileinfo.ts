import { Command } from "commander";
import fs from "fs";

export default function fileInfoCommand(program: Command) {

  program
    .command("fileinfo <filename>")
    .description("show file details")
    .action((filename) => {

      const stats = fs.statSync(filename);

      console.log("Size:", stats.size, "bytes");
      console.log("Created:", stats.birthtime);
      console.log("Modified:", stats.mtime);

    });

}