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
import TitleBox from "../components/TitleBox";
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
    <section id="about" className="min-h-screen w-full flex items-center">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          className="mb-16"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          <TitleBox contents={["#01", "About me"]} />
        </motion.div>

        <motion.div variants={popIn} initial="hidden" whileInView="visible">
          <Card>
            <p>
              I’m an Information Systems graduate with experience in software
              development and IT operations. I enjoy creating and improving
              systems as well as diagnosing and solving technical problems. I’m
              looking to grow and put my skills to work to achieve meaningful
              results.
              <Cursor />
            </p>
          </Card>
        </motion.div>

        <div className="flex justify-between items-center mt-8">
          <IconContext.Provider value={{ size: "24" }}>
            <div className="flex gap-4">
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
                      variants={popIn}
                      initial="hidden"
                      whileInView="visible"
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
            </div>

            <div className="flex justify-center gap-4">
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
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
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
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
}

export default About;
