import { Command } from "commander";

export default function greetCommand(program: Command) {
  program
    .command("greet <name>")
    .description("print greeting message")
    .action((name) => {
      console.log(`Hello ${name}, welcome to DevMate CLI`);
    });
}