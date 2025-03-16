export const fetchCache = "auto";

import CustomersSection from "../components/sections/customers-section";
import CaseStudiesSection from "../components/sections/case-studies-section";
import OSSSection from "../components/sections/oss-section";
import { DreamteamSection } from "../components/sections/dreamteam-section";
import PostsSection from "../components/sections/posts-section";
import { Button } from "@/components/button";

export default function Page() {
  return (
    <>
      <div className="min-h-[calc(100vh-120px)]">
        <section className="pt-[200px] mb-8">
          <div className="container mx-auto flex flex-col justify-center items-center">
            <div className="max-w-[600px] text-center">
              <h1 className="text-6xl font-semibold text-center mb-5">
                Breaking Down Complexity into Elegant Solutions.
              </h1>
              <div className="text-muted-foreground mb-8 text-center">
                I specialize in building high-quality, reliable software
                solutions and solving complex challenges. With a wide range of
                skills and expertise, I deliver innovative, efficient, and
                scalable technology tailored to help businesses succeed
              </div>
              <Button
                size="lg"
                data-cal-link="martinp/15min"
                data-cal-config='{"theme": "light"}'
              >
                Contact me
              </Button>
            </div>
          </div>
        </section>
        <CustomersSection />
      </div>
      <CaseStudiesSection />
      <OSSSection />
      <DreamteamSection />
      <PostsSection />
    </>
  );
}
