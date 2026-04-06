import { useState } from "react";
import { AnimatePresence, motion, stagger } from "motion/react";
import { popIn } from "../animations/popIn";
import { projectData } from "../data/project.data";
import fantasia from "../assets/img/work-fantasia.webp";
import wiredCity from "../assets/img/work-wired-city.webp";
import wiredGunStore from "../assets/img/work-wired-gun-store.webp";
import salesDashboard from "../assets/img/work-sales-dashboard.webp";
import guestbook from "../assets/img/work-guestbook.webp";
import Card from "../components/Card";
import Cursor from "../components/Cursor";
import { fadeIn } from "../animations/fadeIn";
import { RevealText } from "../components/RevealText";

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
        transition={{ ease: 'linear', duration: 0.3 }}
      >
        <Card className="px-2">#03</Card>
        <Card className="px-2">MY PROJECTS</Card>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        {projectData.map(({ id, name, desc }) => {
          const Image = projectImage[name as keyof typeof projectImage];
          const activeDesc = showDesc === id;

          return (
            <motion.button
              key={id}
              className="flex flex-col items-center"
              variants={popIn}
              initial='hidden'
              whileInView='visible'
              transition={{
                ease: 'linear',
                duration: 0.3,
                delayChildren: 0.3,
              }}
              onHoverStart={() => setShowDesc(id)}
              onHoverEnd={() => setShowDesc(null)}
            >
              <Card>
                <motion.img
                  src={Image}
                  alt={name}
                  onClick={() => setShowDesc(activeDesc ? null : id)}
                  variants={fadeIn}
                />
              </Card>

              <AnimatePresence>
                {activeDesc && (
                  <motion.div
                    className="mx-6"
                    variants={popIn}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Card>
                      <p className="text-left">
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

      <motion.div
        variants={popIn}
        initial='hidden'
        whileInView='visible'
        transition={{
          ease: 'linear',
          duration: 0.3,
          delayChildren: stagger(0.03, { startDelay: 0.3 }),
        }}
      >
        <Card>
          <RevealText text="All data displayed are for demonstration purposes only." />
        </Card>
      </motion.div>
    </div>
  );
}

export default Projects;
