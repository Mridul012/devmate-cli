# DevMate CLI

DevMate CLI is a simple **command line tool built with Node.js and TypeScript** for the SESD Workshop assignment.

The tool allows users to run useful commands directly from the terminal such as fetching Pokémon information, checking weather, getting GitHub user data, generating passwords, and more.

---

## Features

* Built using **Node.js + TypeScript**
* Structured using **Object-Oriented Programming (OOP)**
* Includes **10 custom CLI commands**
* Integrates **multiple public APIs**
* Runs as a **real CLI tool (`devmate`)**

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Mridul012/devmate-cli.git
```

Navigate into the project folder:

```bash
cd devmate-cli
```

Install dependencies:

```bash
npm install
```

Compile the TypeScript project:

```bash
npx tsc
```

Link the CLI globally:

```bash
npm link
```

Now the CLI command will be available globally as:

```bash
devmate
```

---

## Usage

General command format:

```bash
devmate <command>
```

Example:

```bash
devmate greet Mridul
```

---

## Command Reference

| Category | Command                       | Description                      | Example                         |
| -------- | ----------------------------- | -------------------------------- | ------------------------------- |
| Social   | `devmate greet <name>`        | Personalized greeting message    | `devmate greet Mridul`          |
| Gaming   | `devmate pokemon <name>`      | Fetch Pokémon information        | `devmate pokemon pikachu`       |
| Weather  | `devmate weather <city>`      | Get weather data for a city      | `devmate weather Chennai`       |
| Git      | `devmate github <username>`   | Fetch GitHub user information    | `devmate github torvalds`       |
| Wisdom   | `devmate quote`               | Get a random inspirational quote | `devmate quote`                 |
| Files    | `devmate fileinfo <filename>` | Show file metadata               | `devmate fileinfo package.json` |
| Security | `devmate password <length>`   | Generate a random password       | `devmate password 12`           |
| Utility  | `devmate uuid`                | Generate a UUID                  | `devmate uuid`                  |
| Utility  | `devmate time`                | Show current system time         | `devmate time`                  |
| System   | `devmate system`              | Display system information       | `devmate system`                |

---

## APIs Used

This project integrates the following APIs:

* Pokémon API → Pokémon details
* Weather API → Weather information
* GitHub API → GitHub user data
* Quote API → Random quotes

---

## Project Structure

```
src
 ├── commands
 │    greet.ts
 │    pokemon.ts
 │    weather.ts
 │    github.ts
 │    quote.ts
 │    fileinfo.ts
 │    password.ts
 │    uuid.ts
 │    time.ts
 │    system.ts
 │
 ├── services
 │    pokemonService.ts
 │    weatherService.ts
 │    githubService.ts
 │
 └── index.ts
```

---

## CLI Help

To view all available commands:

```bash
devmate --help
```

---

