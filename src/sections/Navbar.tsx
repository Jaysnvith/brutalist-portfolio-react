import { useState, type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  PiBrainFill,
  PiBriefcaseFill,
  PiIdentificationBadgeFill,
  PiList,
} from "react-icons/pi";
import { popIn } from "../animations/popIn";

type Menus = {
  label: string;
  icon: JSX.Element;
};

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus: Menus[] = [
    { label: "ABOUT", icon: <PiIdentificationBadgeFill /> },
    { label: "SKILLS", icon: <PiBrainFill /> },
    { label: "PROJECTS", icon: <PiBriefcaseFill /> },
  ];

  return (
    <>
      <motion.nav
        className="bg-surface text-surface-fg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "linear" }}
      >
        <div className="flex items-center justify-between min-h-12 max-w-6xl mx-auto px-6">
          <p className="text-sm text-neutral-400">
            <a
              href="https://github.com/Jaysnvith/brutalist-portfolio-react"
              className="hover:text-red-500"
            >
              PORTFOLIO
            </a>
            {" // "}PANJI M.B
          </p>
          
          <ul className="hidden md:flex gap-8">
            {menus.map((menu) => (
              <li key={menu.label}>
                <a
                  href={`#${menu.label.toLocaleLowerCase()}`}
                  className="flex items-center gap-2 hover:bg-surface-fg hover:text-surface transition-colors"
                >
                  {menu.icon}
                  <span>{menu.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden flex items-center gap-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <PiList />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="bg-surface text-surface-fg"
            variants={popIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex flex-col gap-8 p-6">
              {menus.map((menu) => (
                <li key={menu.label}>
                  <a
                    href={`#${menu.label.toLocaleLowerCase()}`}
                    className="flex items-center gap-2 active:bg-surface-fg active:text-surface transition-colors"
                  >
                    {menu.icon}
                    <span>{menu.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
