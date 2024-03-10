import { Repository } from "@/libs/github";
import { MotionLink } from "@/libs/motion";
import { Variants } from "framer-motion";
import { GitFork, Star } from "lucide-react";

const animation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const RepositoryCard = ({ repository }: { repository: Repository }) => {
  return (
    <MotionLink
      href={repository.url}
      variants={animation}
      className="border-black border-4 shadow-black shadow-xl rounded-xl bg-white p-4 flex flex-col hover:shadow-lg transition-shadow active:hover:shadow-none"
    >
      <div className="flex-1">
        <h2 className="font-bold text-xl mb-0">{repository.name}</h2>
        <p>{repository.description}</p>
      </div>
      <div className="flex gap-3 mt-2">
        <div className="flex items-center font-bold gap-1">
          <Star />
          <span className="text-lg">{repository.stargazers_count}</span>
        </div>
        <div className="flex items-center font-bold gap-1">
          <GitFork />
          <span className="text-lg">{repository.forks_count}</span>
        </div>
      </div>
    </MotionLink>
  );
};
