import { IconBook } from "@tabler/icons-react";
import Experience from "../experience";
import SectionHeader from "../ui/section-header";
import { Button } from "../ui/button";

function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeader>Education & Experience</SectionHeader>
      <div className="flex flex-col gap-16 items-center">
        <Experience
          title="Staff Research Associate - Machine Learning"
          company="UC San Diego - Abarbanel Lab"
          bulletpoints={[
            "Conducted research in the application of Data Assimilation principles to the field of Machine Learning.",
            "Specifically, investigated the ability of principles of Information Theory and Precision Annealing to train a Multi-layer Perceptron neural network to extrapolate a chaotic time series.",
          ]}
          year="2018-2020"
        >
          <p>
            <a
              href="https://arxiv.org/abs/1902.05062"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              arxiv link
            </a>{" "}
            to paper
          </p>
        </Experience>
        <Experience
          title="Physics Workshop Coordinator"
          company="UC San Diego - OASIS MSTP"
          bulletpoints={[
            "Coordinated and led workshops for undergraduate students in introductory physics courses.",
          ]}
          year="2016-2018"
        >
          <p>
            <a
              href="https://oasis.ucsd.edu/academic-services/mstp-folder/index.html"
              target="_blank"
              className="text-blue-500"
              rel="noreferrer"
            >
              Office website
            </a>
          </p>
        </Experience>
        <div className="flex justify-between w-full md:w-3/4 px-4">
          <div className="flex flex-1 gap-3">
            <IconBook className="text-muted md:block hidden" size="40px" />
            <div className="flex flex-col">
              <h3>B.S. Engineering Physics</h3>
              <p className="text-muted">
                UC San Diego - Jacob's School of Engineering
              </p>
            </div>
          </div>
          <div>
            <p className="text-end text-md min-w-24">2015</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button asChild variant={"secondary"}>
          <a
            href="https://drive.google.com/file/d/1ySSzTfMg72FYJPMgnBd4bdX_oepxST-H/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View resume pdf
          </a>
        </Button>
      </div>
    </section>
  );
}

export default ExperienceSection;
