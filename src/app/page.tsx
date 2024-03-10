import { HeroSection } from "@/components/sections/HeroSection";
import { PostsSection } from "@/components/sections/PostsSection";
import { RepositoriesSection } from "@/components/sections/RepositoriesSection";
import { MotionMain } from "@/libs/motion";
import { Variants } from "framer-motion";

const animation: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default async function Home() {
  return (
    <MotionMain variants={animation} initial="hidden" animate="visible">
      <HeroSection />
      <PostsSection />
      <RepositoriesSection />
    </MotionMain>
  );
}
