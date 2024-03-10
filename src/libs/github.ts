import { notFound } from "next/navigation";
import { Endpoints } from "@octokit/types";

export type Repository =
  Endpoints["GET /users/{username}/repos"]["response"]["data"][number];

export async function fetchRepositories(perPage = 10) {
  const params = new URLSearchParams();
  params.set("type", "all");
  params.set("sort", "updated");
  params.set("perPage", perPage.toString());

  const res = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos?${params.toString()}`,
  );

  if (!res.ok) notFound();

  const repositories: Endpoints["GET /users/{username}/repos"]["response"]["data"] =
    await res.json();

  return repositories
    .filter((r) => r.private === false)
    .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
    .slice(0, perPage);
}
