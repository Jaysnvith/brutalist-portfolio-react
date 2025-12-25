import { useState, type JSX } from "react";
import { motion } from "motion/react";
import { PiBrainFill, PiBriefcaseFill, PiIdentificationBadgeFill, PiMoonFill, PiSunFill } from "react-icons/pi";

type Menus = {
  label: string;
  icon: JSX.Element;
};

function Navbar() {
  const [theme, setTheme] = useState<boolean>(false);

  const menus: Menus[] = [
    { label: "About", icon:<PiIdentificationBadgeFill /> },
    { label: "Skills", icon:<PiBrainFill/> },
    { label: "Projects", icon:<PiBriefcaseFill /> },
  ];

  const menuVariant = {
    initial: {
      backgroundColor: "transparent",
      color: "var(--color-fg)",
    },
    hover: {
      backgroundColor: "var(--color-surface)",
      color: "var(--color-surface-fg)",
    },
  };

  return (
    <nav className="flex items-center w-fit my-4 mx-auto text-2xl divide-x-2 border-x-2 divide-fg border-fg">
      {menus.map((menu) => (
        <motion.a
          key={menu.label}
          href={`#${menu.label.toLocaleLowerCase()}`}
          className="flex items-center space-x-2 px-8"
          variants={menuVariant}
          initial="initial"
          whileHover="hover"
        >
          {menu.icon}
          <span>{menu.label}</span>
        </motion.a>
      ))}
      
      <motion.button
        onClick={() => setTheme(!theme)}
        className="flex items-center space-x-2 px-8"
        variants={menuVariant}
        initial="initial"
        whileHover="hover"
      >
        {theme ? (
          <>
            <PiMoonFill />
            <span>Dark</span>
          </>
          ) : (
            <>
              <PiSunFill />
              <span>Light</span>
            </>
          )}
      </motion.button>
    </nav>
  );
}

export default Navbar;