# devmate-cli
# DevMate CLI

DevMate CLI is a simple command line tool built using **Node.js and TypeScript** as part of the SESD Workshop CLI project.

The tool provides different useful commands that can be executed directly from the terminal such as getting Pokémon details, weather information, GitHub user details, generating passwords, and more.

---

## Features

* Built using **Node.js + TypeScript**
* Uses **Object-Oriented Programming (OOP)** for services
* Includes **10 custom CLI commands**
* Integrates **multiple external APIs**
* Simple modular project structure

---

## APIs Used

This project integrates the following APIs:

* Pokémon API (for Pokémon details)
* Weather API (for weather information)
* GitHub API (for user information)
* Quote API (for random quotes)

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

## Installation

Clone the repository:

```
git clone https://github.com/Mridul012/devmate-cli.git
```

Go into the project directory:

```
cd devmate-cli
```

Install dependencies:

```
npm install
```

---

## Running the CLI

Use the following command format:

```
npx ts-node src/index.ts <command>
```

---

## Available Commands

### Greet

```
npx ts-node src/index.ts greet <name>
```

Example:

```
npx ts-node src/index.ts greet Mridul
```

---

### Pokémon Info

```
npx ts-node src/index.ts pokemon <pokemon_name>
```

Example:

```
npx ts-node src/index.ts pokemon pikachu
```

---

### Weather Information

```
npx ts-node src/index.ts weather <city>
```

Example:

```
npx ts-node src/index.ts weather Chennai
```

---

### GitHub User Info

```
npx ts-node src/index.ts github <username>
```

Example:

```
npx ts-node src/index.ts github torvalds
```

---

### Random Quote

```
npx ts-node src/index.ts quote
```

---

### File Info

```
npx ts-node src/index.ts fileinfo <filename>
```

Example:

```
npx ts-node src/index.ts fileinfo package.json
```

---

### Generate Password

```
npx ts-node src/index.ts password <length>
```

Example:

```
npx ts-node src/index.ts password 10
```

---

### Generate UUID

```
npx ts-node src/index.ts uuid
```

---

### Current Time

```
npx ts-node src/index.ts time
```

---

### System Info

```
npx ts-node src/index.ts system
```

---
## Command Reference

| Category | Command | Description | Example |
|--------|--------|--------|--------|
| Social | `devmate greet <name>` | Personalized greeting | `devmate greet Mridul` |
| Gaming | `devmate pokemon <name>` | Get Pokémon details | `devmate pokemon pikachu` |
| Weather | `devmate weather <city>` | Get current weather info | `devmate weather Chennai` |
| Git | `devmate github <username>` | Fetch GitHub user details | `devmate github torvalds` |
| Wisdom | `devmate quote` | Get a random inspirational quote | `devmate quote` |
| Files | `devmate fileinfo <filename>` | Show file details | `devmate fileinfo package.json` |
| Security | `devmate password <length>` | Generate random password | `devmate password 12` |
| Utility | `devmate uuid` | Generate UUID | `devmate uuid` |
| Utility | `devmate time` | Show current time | `devmate time` |
| System | `devmate system` | Display system information | `devmate system` |
