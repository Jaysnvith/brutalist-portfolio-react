import { useState } from "react";
import { AnimatePresence, motion, stagger } from "motion/react";
import { projectData } from "@/data";
import { Card, RevealText } from "@/components";
import { fadeIn, popIn } from "@/animations";
import { fantasia, guestbook, salesDashboard, wiredCity, wiredGunStore } from "@/assets/img";


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

  function navigateProject(action: 'next' | 'previous') {
    if (showProject === projectData.length - 1) {
      setShowProject(0)
    } else {
      setShowProject(showProject + 1);
    }
    setClickedButton(action)
  }

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
                className="w-full h-40 md:h-140 object-cover object-top"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
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
                    onClick={() => navigateProject('previous')}
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
                    onClick={() => navigateProject('next')}
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
          <div className="md:hidden flex justify-between mb-1 mt-2 mx-2" >
            <motion.button
              className="w-1/3 p-2 bg-foreground/20 text-foreground active:bg-green-500/50 transition-colors"
              onClick={() => navigateProject('previous')}
            >
              PREVIOUS
            </motion.button>
            <motion.button
              className="w-1/3 p-2 bg-foreground/20 text-foreground active:bg-green-500/50 transition-colors"
              onClick={() => navigateProject('next')}
            >
              NEXT
            </motion.button>
          </div>
        </Card>
      </motion.div>


      <motion.div
        key={showProject}
        className="md:w-1/2 mx-auto mt-6"
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
