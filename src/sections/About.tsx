import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  PiEnvelopeFill,
  PiGithubLogoFill,
  PiInstagramLogoFill,
  PiPhoneCallFill,
  PiThreadsLogoFill,
} from "react-icons/pi";
import { IconContext } from "react-icons";
import { popIn } from "../animations/popIn";
import { slideOut } from "../animations/slideOut";
import { contactData } from "../data/contact.data";
import { socialData } from "../data/social.data";
import Card from "../components/Card";
import Cursor from "../components/Cursor";

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
        className="flex mb-16 text-4xl"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
        <Card className="px-2">#01</Card>
        <Card className="px-2">ABOUT ME</Card>
      </motion.div>

      <motion.div
        className="mb-32"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
        <Card>
          <p>
            Software developer experienced in building practical business applications, including internal
            dashboards and operational systems that streamline workflows and support company-wide operations.
            With additional background in IT operations, giving me practical insight into both application
            development and infrastructure support.
            <Cursor />
          </p>
        </Card>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-6"
        variants={popIn}
        initial="hidden"
        whileInView="visible"
      >
        <Card>
          <p>
            Get in touch...
            <Cursor />
          </p>
        </Card>

        <div className="flex gap-4">
          <IconContext.Provider value={{ size: "42" }}>
            {contactData.map(({ id, name, value }) => {
              const Icon = contactIcon[name as keyof typeof contactIcon];
              const activeContact = contactHovered === id;

              return (
                <div className="relative inline-flex">
                  <AnimatePresence>
                    {copied === id && (
                      <motion.span
                        className="absolute top-12 text-base bg-surface text-surface-fg"
                        variants={popIn}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>

                  <motion.button
                    key={id}
                    onClick={() => handleCopy(value, id)}
                    className="flex items-center p-1 active:ring-2 hover:animate-pulse bg-surface text-surface-fg"
                    onHoverStart={() => setContactHovered(id)}
                    onHoverEnd={() => setContactHovered(null)}
                  >
                    <Icon />
                    <AnimatePresence>
                      {activeContact && (
                        <motion.span
                          className="overflow-hidden whitespace-nowrap"
                          initial={{ ...slideOut.hidden, paddingLeft: 0 }}
                          animate={{ ...slideOut.visible, paddingLeft: 5 }}
                          exit={{ ...slideOut.hidden, paddingLeft: 0 }}
                        >
                          {value}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              );
            })}

            {socialData.map(({ id, name, value }) => {
              const Icon = skillMap[name as keyof typeof skillMap];
              const activeSocial = socialHovered === id;

              return (
                <motion.a
                  key={id}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1 active:ring-2 hover:animate-pulse bg-surface text-surface-fg transition-shadow"
                  onHoverStart={() => setSocialHovered(id)}
                  onHoverEnd={() => setSocialHovered(null)}
                >
                  <Icon />
                  <AnimatePresence>
                    {activeSocial && (
                      <motion.span
                        className="overflow-hidden whitespace-nowrap"
                        initial={{ ...slideOut.hidden, paddingLeft: 0 }}
                        animate={{ ...slideOut.visible, paddingLeft: 5 }}
                        exit={{ ...slideOut.hidden, paddingLeft: 0 }}
                      >
                        {new URL(value).pathname}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              );
            })}
          </IconContext.Provider>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
