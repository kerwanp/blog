import { MotionDiv, MotionLink } from "@/libs/motion";
import { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const HeroSection = () => {
  return (
    <section className="container mx-auto mb-12">
      <MotionDiv
        variants={containerAnimation}
        className="shadow-black shadow-xl border-black border-4 rounded-xl p-12 bg-red"
      >
        <div className="flex">
          <div className="flex-1 flex flex-col justify-end items-start">
            <div className="font-bold text-5xl mb-8">
              <MotionDiv variants={textAnimation}>Hi! 👋</MotionDiv>
              <MotionDiv variants={textAnimation}>
                I&apos;m <h1 className="text-white inline">Martin Paucot</h1>,
              </MotionDiv>
              <MotionDiv variants={textAnimation}>
                a tech expert passionate by
              </MotionDiv>
              <MotionDiv variants={textAnimation}>
                everything I don&apos;t know yet
              </MotionDiv>
            </div>
            <MotionLink
              variants={textAnimation}
              href="/blog"
              className="inline-flex items-center rounded-md border-black border-2 shadow-black shadow-lg px-6 py-2 bg-white font-semibold gap-3 text-lg hover:shadow-md active:shadow-none transition-shadow"
            >
              Check my blog
              <ArrowUpRight />
            </MotionLink>
          </div>
          <MotionDiv
            variants={textAnimation}
            className="shadow-black shadow-md border-black border-4 rounded-xl overflow-hidden"
          >
            <Image
              src="/avatar.jpg"
              width={300}
              height={300}
              alt="Picture of me. Trust me I'm handsome"
            />
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  );
};
