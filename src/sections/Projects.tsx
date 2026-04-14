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
  const [showProject, setShowProject] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [clickedButton, setClickedButton] = useState<'next' | 'previous' | null>(null)

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
          <motion.div
            className="relative"          
            variants={fadeIn}
            onHoverStart={() => setShowButton(true)}
            onHoverEnd={() => setShowButton(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={showProject}
                src={projectImage[projectData[showProject].name as keyof typeof projectImage]}
                alt="Image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </AnimatePresence>
            <AnimatePresence>
              {showButton && (
                <>                
                  <motion.button 
                    className="absolute top-4 left-4 bottom-4 w-1/3 border-2 font-bold text-2xl border-accent bg-accent/60 text-background hover:bg-accent/80 transition-colors"
                    variants={{
                      idle: { scale: 1, opacity: 1 },
                      clicked: { scale: 1.5, opacity: 0 },
                      hidden: { scale: 1, opacity: 0 },
                    }}
                    initial="hidden"
                    animate={clickedButton === 'previous' ? 'clicked' : 'idle'}
                    exit="hidden"
                    onClick={() => {
                      if (showProject === 0) {
                        setShowProject(projectData.length - 1)
                      } else {
                        setShowProject(showProject - 1)
                      }
                      setClickedButton('previous')
                    }}
                    onAnimationComplete={(definiton) => {
                      if(definiton === 'clicked') setClickedButton(null)
                    }}
                  >
                    P R E V I O U S
                  </motion.button>
                  <motion.button
                    className="absolute top-4 right-4 bottom-4 border-2 w-1/3 font-bold text-2xl border-accent bg-accent/60 text-background hover:bg-accent/80 transition-colors"
                    variants={{
                      idle: { scale: 1, opacity: 1 },
                      clicked: { scale: 1.5, opacity: 0 },
                      hidden: { scale: 1, opacity: 0 },
                    }}
                    initial="hidden"
                    animate={clickedButton === 'next' ? 'clicked' : 'idle'}
                    exit="hidden"
                    onClick={() => {
                      if (showProject === projectData.length - 1) {
                        setShowProject(0)
                      } else {
                        setShowProject(showProject + 1);
                      }
                      setClickedButton('next')
                    }}
                    onAnimationComplete={(definiton) => {
                      if(definiton === 'clicked') setClickedButton(null)
                    }}
                  >
                    N E X T
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </motion.div>
        </Card>
      </motion.div>

      <motion.div
        key={showProject}
        className="md:w-1/2 mx-auto mt-5"
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
          <RevealText
            text={projectData[showProject].desc}
          />
        </Card>
      </motion.div>
    </div>
  );
}

export default Projects;
