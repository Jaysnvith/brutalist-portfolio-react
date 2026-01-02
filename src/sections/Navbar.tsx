import { useState, type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PiBrainFill, PiBriefcaseFill, PiIdentificationBadgeFill, PiList, PiMoonFill, PiSunFill } from "react-icons/pi";
import { popIn } from "../animations/popIn";

type Menus = {
  label: string;
  icon: JSX.Element;
};

function Navbar() {
  const [theme, setTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menus: Menus[] = [
    { label: "ABOUT", icon:<PiIdentificationBadgeFill /> },
    { label: "SKILLS", icon:<PiBrainFill/> },
    { label: "PROJECTS", icon:<PiBriefcaseFill /> },
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
          <span className="text-sm text-neutral-400">
            PORTFOLIO // PANJI M.B
          </span>
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
            onClick={() => setTheme(!theme)}
            className="hidden md:flex items-center gap-2 hover:bg-surface-fg hover:text-surface transition-colors cursor-pointer"
          >
            {theme ? (
              <>
                <PiMoonFill />
                <span>DARK</span>
              </>
              ) : (
                <>
                  <PiSunFill />
                  <span>LIGHT</span>
                </>
              )}
          </button>
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