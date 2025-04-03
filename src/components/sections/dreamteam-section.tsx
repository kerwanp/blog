import { Button } from "../button";
import { Globe } from "../globe";

export const DreamteamSection = () => {
  return (
    <section className="mb-12 container mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 bg-primary text-primary-foreground rounded-lg justify-center p-6 md:p-8">
        <div className="hidden md:block w-[30%] aspect-square relative">
          <Globe />
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">Operating worldwide</h2>
          <p className="max-w-[700px] mb-8">
            Geography is no barrier. With my extensive network of{" "}
            <b>skilled freelance engineers from around the world</b>, I can
            assemble <b>your dream team</b> for any mission—tailored to your
            specific needs.
            <br />
            <br />
            Whether you’re looking for specialized expertise or additional
            support to meet tight deadlines, I connect you with professionals
            who deliver high-quality results and innovative solutions on a
            global scale.
          </p>
          <Button
            variant="secondary"
            data-cal-link="martinp/15min"
            data-cal-config='{"theme": "light"}'
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
};
