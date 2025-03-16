import { Endpoints } from "@octokit/types";

export type Repository =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export async function fetchRepositories(repositories: string[]) {
  return Promise.all(repositories.map((r) => fetchRepository(r)));
}

export async function fetchRepository(repository: string) {
  const res = await fetch(`https://api.github.com/repos/${repository}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });
  const data: Repository = await res.json();
  return data;
}
