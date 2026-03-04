import { Command } from "commander";

export default function passwordCommand(program: Command) {

  program
    .command("password <length>")
    .description("generate random password")
    .action((length) => {

      const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      let password = "";

      for (let i = 0; i < length; i++) {

        const random = Math.floor(Math.random() * chars.length);

        password += chars[random];

      }

      console.log("Generated Password:", password);

    });

}