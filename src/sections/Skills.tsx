import { useState } from 'react';
import { AnimatePresence, motion, stagger } from 'motion/react';
import { categories, skillData } from '@/data';
import { Card, HighlightOverlay } from '@/components';
import { fadeIn, popIn } from '@/animations';
import { Bootstrap5, BulmaUi, Cpp, Csharp, Css3, Django, Html5, Java, Js, MsqlServer, Mysql, Php, Postgresql, Python, React, TailwindCss, Ts } from '@/assets/svg'

const skillIcon = {
  python: Python,
  cpp: Cpp,
  csharp: Csharp,
  java: Java,
  html: Html5,
  php: Php,
  css: Css3,
  javascript: Js,
  typescript: Ts,
  django: Django,
  react: React,
  tailwind: TailwindCss,
  bulma: BulmaUi,
  bootstrap: Bootstrap5,
  mysql: Mysql,
  postgresql: Postgresql,
  mssql: MsqlServer,
} as const;

function Skills() {
  const [selectCategory, setSelectCategory] = useState<string | null>('language');
  const [showDesc, setShowDesc] = useState<string | null>(null);

  return (
    <div>
      <motion.div
        className='flex mb-16 text-4xl'
        variants={popIn}
        initial='hidden'
        whileInView='visible'
        transition={{ ease: 'linear', duration: 0.3 }}
      >
        <Card className='px-2'>#02</Card>
        <Card className='px-2'>MY SKILLS</Card>
      </motion.div>

      <div className='flex flex-col gap-6'>
        <motion.div
          key={selectCategory}
          variants={popIn}
          initial='hidden'
          whileInView='visible'
          transition={{
            ease: 'linear',
            duration: 0.3,
            delayChildren: stagger(0.03, { startDelay: 0.3 }),
          }}
        >
          <Card className='grid grid-rows-3 md:grid-rows-2 grid-cols-3 md:grid-cols-6 gap-6'>
            {skillData
              .filter((skill) => skill.category === selectCategory)
              .map(({ id, value }) => {
                const Icon = skillIcon[value as keyof typeof skillIcon];
                const activeDesc = showDesc === value;
                return (
                  <motion.button
                    key={id}
                    className='relative m-4'
                    variants={fadeIn}
                    onClick={() => setShowDesc(value)}
                    onHoverStart={() => setShowDesc(value)}
                    onHoverEnd={() => setShowDesc(null)}
                  >
                    <Icon />
                    <AnimatePresence>
                      {activeDesc && <HighlightOverlay />}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
          </Card>
        </motion.div>

        <motion.div
          className='md:self-end md:mr-12'
          variants={popIn}
          initial='hidden'
          whileInView='visible'
          transition={{
            ease: 'linear',
            duration: 0.3,
            delayChildren: stagger(0.03, { startDelay: 0.3 }),
          }}
        >
          <Card className='p-4'>
            <motion.div className='flex flex-col gap-6' variants={fadeIn}>
              <div className='flex flex-col gap-2 items-center'>
                <p className='font-bold text-accent text-2xl'>
                  What'll you pick ?
                </p>
              </div>
              <div className='flex flex-col'>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`capitalize border ${selectCategory === category ? 'py-4 bg-accent/20 animate-pulse' : 'py-2 bg-foreground/20 hover:bg-accent/20'} transition-all`}
                    onClick={() => setSelectCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
