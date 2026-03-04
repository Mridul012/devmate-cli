#!/usr/bin/env node

import { Command } from "commander";

import greetCommand from "./commands/greet";
import pokemonCommand from "./commands/pokemon";
import weatherCommand from "./commands/weather";
import githubCommand from "./commands/github";
import quoteCommand from "./commands/quote";
import fileInfoCommand from "./commands/fileinfo";
import passwordCommand from "./commands/password";
import uuidCommand from "./commands/uuid";
import timeCommand from "./commands/time";
import systemCommand from "./commands/system";

const program = new Command();

program
  .name("devmate")
  .description("CLI tool for SESD workshop")
  .version("1.0.0");

greetCommand(program);
pokemonCommand(program);
weatherCommand(program);
githubCommand(program);
quoteCommand(program);
fileInfoCommand(program);
passwordCommand(program);
uuidCommand(program);
timeCommand(program);
systemCommand(program);

program.parse();