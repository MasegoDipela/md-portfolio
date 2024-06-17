import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Let's join forces and create something
            <span className="inline-block relative">
              amazing
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            From concept to deployment, I collaborate with clients to understand
            their unique needs and bring their vision to life. I also need more
            money to feed by book addiction.
          </p>
          <Button href="/downloadcv" white>
            Download CV
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
