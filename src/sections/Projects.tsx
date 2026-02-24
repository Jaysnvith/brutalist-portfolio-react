import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { popIn } from "../animations/popIn";
import { projectData } from "../data/project.data";
import fantasia from "../assets/img/work-fantasia.webp";
import wiredCity from "../assets/img/work-wired-city.webp";
import wiredGunStore from "../assets/img/work-wired-gun-store.webp";
import salesDashboard from "../assets/img/work-sales-dashboard.webp";
import guestbook from "../assets/img/work-guestbook.webp";
import Card from "../components/Card";
import Cursor from "../components/Cursor";

const projectImage = {
  fantasia: fantasia,
  wiredCity: wiredCity,
  wiredGunStore: wiredGunStore,
  salesDashboard: salesDashboard,
  guestbook: guestbook,
} as const;

function Projects() {
  const [showDesc, setShowDesc] = useState<string | null>(null);

  return (
    <div>
      <motion.div
        className="flex mb-16 text-4xl"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
        <Card className="px-2">#03</Card>
        <Card className="px-2">MY PROJECTS</Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {projectData.map(({ id, name, desc }) => {
          const Image = projectImage[name as keyof typeof projectImage];
          const activeDesc = showDesc === id;

          return (
            <motion.button
              key={id}
              className="flex flex-col items-center gap-4"
              onHoverStart={() => setShowDesc(id)}
              onHoverEnd={() => setShowDesc(null)}
              variants={popIn}
              initial="hidden"
              whileInView="visible"
            >
              <Card>
                <p>
                  {name}
                  <Cursor />
                </p>
              </Card>

              <motion.img
                src={Image}
                alt={name}
                className="shadow-md ring-2 ring-line-3"
                onClick={() => setShowDesc(activeDesc ? null : id)}
              />

              <AnimatePresence>
                {activeDesc && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ ease: "linear" }}
                  >
                    <Card>
                      <p>
                        {desc}
                        <Cursor />
                      </p>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <Card>
        <p>
          All data displayed are for demonstration purposes only.
          <Cursor />
        </p>
      </Card>
    </div>
  );
}

export default Projects;
