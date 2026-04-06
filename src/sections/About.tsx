import { useState } from 'react';
import { AnimatePresence, motion, stagger } from 'motion/react';
import {
  PiEnvelopeFill,
  PiGithubLogoFill,
  PiInstagramLogoFill,
  PiPhoneCallFill,
  PiThreadsLogoFill,
} from 'react-icons/pi';
import { IconContext } from 'react-icons';
import { popIn } from '../animations/popIn';
import { contactData } from '../data/contact.data';
import { socialData } from '../data/social.data';
import Card from '../components/Card';
import { HighlightOverlay } from '../components/HighlightOverlay';
import { RevealText } from '../components/RevealText';

const contactIcon = {
  email: PiEnvelopeFill,
  phone: PiPhoneCallFill,
} as const;

const skillMap = {
  github: PiGithubLogoFill,
  instagram: PiInstagramLogoFill,
  threads: PiThreadsLogoFill,
} as const;

function About() {
  const [contactHovered, setContactHovered] = useState<string | null>(null);
  const [socialHovered, setSocialHovered] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, state: string) => {
    navigator.clipboard.writeText(text);
    setCopied(state);
    setTimeout(() => {
      setCopied(null);
    }, 1200);
  };

  return (
    <div>
      <motion.div
        className='flex mb-16 text-4xl'
        variants={popIn}
        initial='hidden'
        whileInView='visible'
        transition={{ ease: 'linear', duration: 0.3 }}
      >
        <Card className='px-2'>#01</Card>
        <Card className='px-2'>ABOUT ME</Card>
      </motion.div>

      <motion.div
        className='mb-32'
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
            text='
            Software developer experienced in building practical business
            applications, including internal dashboards and operational systems
            that streamline workflows and support company-wide operations. With
            additional background in IT operations, giving me practical insight
            into both application development and infrastructure support.
          '
          />
        </Card>
      </motion.div>

      <motion.div
        className='flex flex-col items-center gap-6'
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
          <RevealText text='Get in touch...' />
        </Card>

        <IconContext.Provider value={{ size: '42' }}>
          <div className='flex flex-col md:flex-row gap-4 items-center'>
            {contactData.map(({ id, name, value }) => {
              const Icon = contactIcon[name as keyof typeof contactIcon];
              const activeContact = contactHovered === id;
              return (
                <motion.button
                  key={id}
                  className='relative flex gap-2 items-center p-1 bg-background text-foreground'
                  variants={popIn}
                  transition={{ ease: 'linear', }}
                  onClick={() => {
                    handleCopy(value, id);
                    setContactHovered(id);
                  }}
                  onHoverStart={() => setContactHovered(id)}
                  onHoverEnd={() => setContactHovered(null)}
                >
                  <Icon />
                  <span className='overflow-hidden whitespace-nowrap'>
                    {copied === id ? 'Copied !' : value}
                  </span>
                  <AnimatePresence>
                    {activeContact && <HighlightOverlay />}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          <div className='flex flex-col md:flex-row gap-4'>
            {socialData.map(({ id, name, value }) => {
              const Icon = skillMap[name as keyof typeof skillMap];
              const activeSocial = socialHovered === id;
              return (
                <motion.a
                  key={id}
                  href={value}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='relative flex gap-2 items-center p-1 bg-background text-foreground'
                  variants={popIn}
                  transition={{ ease: 'linear', }}
                  onClick={() => setSocialHovered(id)}
                  onHoverStart={() => setSocialHovered(id)}
                  onHoverEnd={() => setSocialHovered(null)}
                >
                  <Icon />
                  <motion.span className='overflow-hidden whitespace-nowrap'>
                    {new URL(value).pathname}
                  </motion.span>
                  <AnimatePresence>
                    {activeSocial && <HighlightOverlay />}
                  </AnimatePresence>
                </motion.a>
              );
            })}
          </div>
        </IconContext.Provider>
      </motion.div>
    </div>
  );
}

export default About;
