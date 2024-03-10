import { fetchRepositories } from "@/libs/github";
import { RepositoryCard } from "../ui/RepositoryCard";
import { Variants } from "framer-motion";
import { MotionDiv, MotionH2 } from "@/libs/motion";

const animations: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const RepositoriesSection = async () => {
  const repositories = await fetchRepositories(100).then((r) => r.slice(0, 8));
  return (
    <section className="container">
      <MotionH2 variants={titleAnimation} className="text-4xl font-wide mb-4">
        My unfamous repositories
      </MotionH2>
      <MotionDiv
        variants={animations}
        className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {repositories.map((repository) => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </MotionDiv>
    </section>
  );
};
