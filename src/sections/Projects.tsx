import { useState } from "react";
import { motion } from "motion/react";
import Title from "../components/Title";
import TextBox from "../components/TextBox";
import { popIn } from "../animations/popIn";
import { projectData } from "../data/project.data";
import fantasia from "../assets/img/work-fantasia.png";
import wiredCity from "../assets/img/work-wired-city.png";
import wiredGunStore from "../assets/img/work-wired-gun-store.png";

function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  const projectImage = {
    "1": fantasia,
    "2": wiredCity,
    "3": wiredGunStore,
  } as const;

  return (
    <section id="projects" className="min-h-screen w-full flex items-center bg-linear-to-b from-step-3 to-step-4">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          className="mb-16"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          <Title contents={["#03", "Projects"]} />
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-8"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          {projectData.map(({ id, name, desc }) => {
            const Image = projectImage[id as keyof typeof projectImage];

            return (
              <motion.div
                key={id}
                className="flex flex-col space-y-2"
                onHoverStart={() => setHovered(id)}
                onHoverEnd={() => setHovered(null)}
              >
                <h2 className="text-2xl">{name}</h2>

                <img src={Image} alt={name} className="border-2 border-line-3"/>

                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hovered === id ? "auto" : 0,
                    opacity: hovered === id ? 1 : 0,
                  }}
                >
                  <TextBox className="border-line-3">{desc}</TextBox>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
