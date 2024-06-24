import { abi, akili5, mooc1 } from "../assets";
import Heading from "./Heading";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container">
        <Heading
          title="Discover cool projects I have helped bring to life"
          text="These projects range all the way from deployed full-stack social media applications to SAAS projects that communicate with generative artificial inteligence models."
        />

        <div className="relative">
          <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4"> Literature Networking Platform</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                {" "}
                Abi&apos;s book club is a functional social media application
                that is designed to help book lovers connect with each other. It
                is a niche platform that we have coined a literature networking
                platform.
              </p>
            </div>
            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <a href="https://www.abibookclub.com" target="_blank">
                <img
                  src={abi}
                  className="w-full h-full object-cover hover:opacity-60 transition duration-300"
                  width={520}
                  height={400}
                  alt="AI SAAS platform"
                />
              </a>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4"> AI SAAS Platform</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  {" "}
                  Akili is an artificial intelligence, software as a service
                  platform, that allows users to generate text, code and A.I
                  generated images. It makes use of REST API&apos;s in order to
                  communicate with Open AI&apos;s generetive pretained
                  transformer models.
                </p>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <a
                  href="https://youtu.be/EAgW6YCqjH4?si=BsSonuAwXZl_77Np"
                  target="_blank"
                >
                  <img
                    src={akili5}
                    className="w-full h-full object-cover hover:opacity-60 transition duration-300"
                    width={520}
                    height={400}
                    alt="AI SAAS platform"
                  />
                </a>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4"> MOOC Platform</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  {" "}
                  Abi.io is a massive open online course platform that is
                  currently in its initiation phase of the product cycle. As
                  part of the preliminary work I have designed an elegant U.I to
                  help pitch the idea to stakeholders.
                </p>
              </div>
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <a
                  href="https://www.figma.com/design/k16RQ2a4GRohM8q5YHab9r/Abi.io?node-id=0-1&t=2NalvexM0qHC1xH5-1"
                  target="_blank"
                >
                  <img
                    src={mooc1}
                    className="w-full h-full object-cover hover:opacity-60 transition duration-300"
                    width={520}
                    height={400}
                    alt="MOOC Platform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
