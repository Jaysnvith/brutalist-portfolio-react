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
    <section id="projects" className="min-h-screen w-full flex items-center">
      <div className="mx-auto max-w-6xl w-full p-4">
        <motion.div
          className="flex mb-16 text-4xl"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          <Card className="px-2">#03</Card>
          <Card className="px-2">MY PROJECTS</Card>
        </motion.div>

        <Card className="mb-8">
          <p>
            All data displayed are for demonstration purposes only.
            <Cursor />
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectData.map(({ id, name, desc }) => {
            const Image = projectImage[name as keyof typeof projectImage];
            const activeDesc = showDesc === id;
            return (
              <motion.button
                key={id}
                onHoverStart={() => setShowDesc(id)}
                onHoverEnd={() => setShowDesc(null)}
                variants={popIn}
                initial="hidden"
                whileInView="visible"
              >
                <h2 className="px-1 bg-surface text-surface-fg">
                  {name.toUpperCase()}
                </h2>

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

                <motion.img
                  src={Image}
                  alt={name}
                  className="ring-2 ring-line-3"
                  onClick={() => setShowDesc(activeDesc ? null : id)}
                />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
