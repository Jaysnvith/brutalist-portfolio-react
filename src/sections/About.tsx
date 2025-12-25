import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PiEnvelopeFill, PiGithubLogoFill, PiInstagramLogoFill, PiPhoneCallFill, PiThreadsLogoFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import Title from "../components/Title";
import TextBox from "../components/TextBox";
import { popIn } from "../animations/popIn";
import { slideOut } from "../animations/slideOut";
import { contactData } from "../data/contact.data";
import { socialData } from "../data/social.data";

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

  const contactIcon = {
    email: PiEnvelopeFill,
    phone: PiPhoneCallFill,
  } as const;

  const skillMap = {
    github: PiGithubLogoFill,
    instagram: PiInstagramLogoFill,
    threads: PiThreadsLogoFill,
  } as const;

  return (
    <section id="about" className="min-h-screen w-full flex items-center bg-linear-to-b from-step-1 to-step-2">
      <div className="mx-auto max-w-6xl w-full px-6">
        <motion.div
          className="mb-16"
          variants={popIn}
          initial="hidden"
          whileInView="visible"
        >
          <Title contents={["#01", "About me"]} />
        </motion.div>

        <motion.div variants={popIn} initial="hidden" whileInView="visible">
          <TextBox className="border-line-1">
            I’m an Information Systems graduate with experience in software
            development and IT operations. I enjoy creating and improving
            systems as well as diagnosing and solving technical problems. I’m
            looking to grow and put my skills to work to achieve meaningful
            results.
          </TextBox>
        </motion.div>

        <div className="flex justify-between items-center mt-8">
          <IconContext.Provider value={{ size: "28px" }}>
            <div className="flex space-x-4 text-2xl">
              {contactData.map(({ id, name, value }) => {
                const Icon = contactIcon[name as keyof typeof contactIcon];

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
                      className="flex items-center p-1 bg-surface text-surface-fg"
                      variants={popIn}
                      initial="hidden"
                      whileInView="visible"
                      onHoverStart={() => setContactHovered(id)}
                      onHoverEnd={() => setContactHovered(null)}
                    >
                      <Icon />
                      <motion.span
                        className="overflow-hidden whitespace-nowrap"
                        initial={{ ...slideOut.hidden, paddingLeft: 0 }}
                        animate={
                          contactHovered === id
                            ? { ...slideOut.visible, paddingLeft: 5 }
                            : { ...slideOut.hidden, paddingLeft: 0 }
                        }
                      >
                        {value}
                      </motion.span>
                    </motion.button>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center space-x-4 text-2xl">
              {socialData.map(({ id, name, value }) => {
                const Icon = skillMap[name as keyof typeof skillMap];

                return (
                  <motion.a
                    key={id}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-1 bg-black text-white"
                    variants={popIn}
                    initial="hidden"
                    whileInView="visible"
                    onHoverStart={() => setSocialHovered(id)}
                    onHoverEnd={() => setSocialHovered(null)}
                  >
                    <Icon />
                    <motion.span
                      className="overflow-hidden whitespace-nowrap"
                      initial={{ ...slideOut.hidden, paddingLeft: 0 }}
                      animate={
                        socialHovered === id
                          ? { ...slideOut.visible, paddingLeft: 5 }
                          : { ...slideOut.hidden, paddingLeft: 0 }
                      }
                    >
                      {new URL(value).pathname}
                    </motion.span>
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
