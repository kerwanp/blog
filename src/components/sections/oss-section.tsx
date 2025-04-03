import { fetchRepositories, Repository } from "@/lib/github";
import { ExternalLink, GitFork, Github, Star } from "lucide-react";
import { Button } from "../button";
import DotPattern from "../dot-pattern";

export default async function OSSSection() {
  const repositories = await fetchRepositories([
    "openapi-ts/openapi-typescript",
    "kerwanp/adonis-cockpit",
    "FriendsOfAdonis/FriendsOfAdonis",
    "kerwanp/notion-render",
    "kerwanp/notionx",
  ]);

  return (
    <section className="mb-16 container mx-auto">
      <div className="relative border border-primary rounded-lg p-6 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl xl:text-6xl font-semibold mb-8">
              Shaping the technologies of tomorrow
            </h2>
            <p className="text-lg mb-8">
              I believe Open-source is the most efficient way to shape the
              technologies of tomorrow: The pillars of our softwares.
              <br />
              <br />I share my knowledge and give my time to build and help
              Open-source projects where I put my trust in.
            </p>
            <Button size="lg" asChild>
              <a href="https://github.com/kerwanp" target="_blank">
                <Github />
                Visit my Github Profile
              </a>
            </Button>
          </div>
          <div className="grid xl:grid-cols-2 self-start gap-3">
            {repositories.map((repository) => (
              <RepositoryCard key={repository.id} repository={repository} />
            ))}
          </div>
        </div>
        <DotPattern className="opacity-40 -z-10" />
      </div>
    </section>
  );
}

const RepositoryCard = ({ repository }: { repository: Repository }) => {
  const image =
    repository.organization?.avatar_url ?? repository.owner.avatar_url;
  return (
    <a
      href={repository.html_url}
      target="_blank"
      className="bg-background border rounded-lg p-4 flex flex-col relative hover:bg-muted duration-75"
    >
      <ExternalLink className="absolute top-4 right-4" size={16} />
      <div className="flex-1 mb-3">
        <img
          className="rounded-md mb-2"
          src={image}
          width={32}
          height={32}
          alt={repository.full_name}
        />
        <h3 className="font-bold mb-1 overflow-hidden whitespace-nowrap text-ellipsis">
          {repository.full_name}
        </h3>
        <p className="text-sm text-muted-foreground">
          {repository.description}
        </p>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 items-center">
          <span>{repository.stargazers_count}</span>
          <Star size={16} className="fill-primary" />
        </div>
        <div className="flex gap-1 items-center">
          <span>{repository.forks_count}</span>
          <GitFork size={16} className="fill-primary" />
        </div>
      </div>
    </a>
  );
};
