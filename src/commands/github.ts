import { Command } from "commander";
import { GithubService } from "../services/githubService";

export default function githubCommand(program: Command) {

  program
    .command("github <username>")
    .description("get github user info")
    .action(async (username) => {

      const service = new GithubService();

      const data = await service.getUser(username);

      console.log("Name:", data.name);
      console.log("Public Repos:", data.public_repos);
      console.log("Followers:", data.followers);
      console.log("Profile:", data.html_url);

    });

}