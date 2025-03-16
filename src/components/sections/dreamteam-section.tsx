import { Button } from "../button";
import { Globe } from "../globe";

export const DreamteamSection = () => {
  return (
    <section className="mb-12">
      <div className="container mx-auto flex items-center h-[500px] gap-6 bg-primary text-primary-foreground rounded-lg justify-center">
        <div className="w-[500px] aspect-square relative">
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
